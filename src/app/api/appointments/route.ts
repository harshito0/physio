import { NextResponse } from "next/server";

export interface AppointmentPayload {
  patientName: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  consent: boolean;
  honeypot?: string;
}

// In-memory rate limiting map for basic abuse prevention
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5;

  const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - record.lastReset > windowMs) {
    record.count = 1;
    record.lastReset = now;
    rateLimitMap.set(ip, record);
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  rateLimitMap.set(ip, record);
  return true;
}

export async function POST(request: Request) {
  try {
    const clientIp = request.headers.get("x-forwarded-for") || "127.0.0.1";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many appointment requests from your connection. Please wait a moment or call the clinic directly.",
        },
        { status: 429 }
      );
    }

    const body: AppointmentPayload = await request.json();

    // Anti-bot honeypot check
    if (body.honeypot && body.honeypot.trim().length > 0) {
      return NextResponse.json({ success: false, error: "Spam detected." }, { status: 400 });
    }

    // Server-side validation
    if (!body.patientName || body.patientName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid patient name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Phone validation (accepts 10-digit Indian numbers or international format)
    const phoneClean = body.phone?.replace(/[\s\-\(\)]/g, "") || "";
    const phoneRegex = /^(\+?[0-9]{10,14})$/;
    if (!phoneRegex.test(phoneClean)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid 10-digit phone number so our reception can contact you.",
        },
        { status: 400 }
      );
    }

    if (!body.service || body.service.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please select the clinical service you require." },
        { status: 400 }
      );
    }

    if (!body.preferredDate) {
      return NextResponse.json(
        { success: false, error: "Please choose your preferred appointment date." },
        { status: 400 }
      );
    }

    if (!body.consent) {
      return NextResponse.json(
        { success: false, error: "You must provide consent for the clinic reception to contact you." },
        { status: 400 }
      );
    }

    // Generate unique clinical appointment reference code
    const refCode = `ZEN-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;

    const appointmentRecord = {
      referenceCode: refCode,
      submittedAt: new Date().toISOString(),
      patientName: body.patientName.trim(),
      phone: phoneClean,
      email: body.email?.trim() || "Not provided",
      service: body.service,
      preferredDate: body.preferredDate,
      preferredTime: body.preferredTime || "Flexible Morning",
      message: body.message?.trim() || "None",
      status: "REQUEST_RECEIVED",
    };

    // Log for clinical auditing and notification
    console.log("=== [ZENLIFE PHYSIO] NEW APPOINTMENT ENQUIRY ===");
    console.log(JSON.stringify(appointmentRecord, null, 2));

    // Optional external webhook integration if configured in environment
    const webhookUrl = process.env.APPOINTMENT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(appointmentRecord),
        });
      } catch (webhookErr) {
        console.warn("External webhook notification error (non-fatal):", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message:
        "Your appointment enquiry has been safely received. Dr. Sakshi's clinic reception will review schedule availability and contact you shortly to confirm your slot.",
      referenceCode: refCode,
      details: {
        patientName: appointmentRecord.patientName,
        service: appointmentRecord.service,
        date: appointmentRecord.preferredDate,
        time: appointmentRecord.preferredTime,
      },
    });
  } catch (error) {
    console.error("Error processing appointment request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred while processing your request. Please call +91 70873 91488 directly.",
      },
      { status: 500 }
    );
  }
}
