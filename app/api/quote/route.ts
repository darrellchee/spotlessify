import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const dataFile = join(process.cwd(), "data", "submissions.json");

interface QuoteSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  suburb: string;
  serviceType: string;
  bedrooms: string;
  notes: string;
  submittedAt: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Generate ID (using simple random string instead of uuid)
    const id = `quote-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create submission object
    const submission: QuoteSubmission = {
      id,
      name: body.name,
      email: body.email,
      phone: body.phone,
      suburb: body.suburb || "",
      serviceType: body.serviceType || "",
      bedrooms: body.bedrooms || "",
      notes: body.notes || "",
      submittedAt: new Date().toISOString(),
    };

    // Read existing submissions
    let submissions: QuoteSubmission[] = [];
    try {
      const fileContent = readFileSync(dataFile, "utf-8");
      submissions = JSON.parse(fileContent);
    } catch (err) {
      // File might not exist, start with empty array
      submissions = [];
    }

    // Add new submission
    submissions.push(submission);

    // Write back to file
    writeFileSync(dataFile, JSON.stringify(submissions, null, 2));

    return NextResponse.json(
      { success: true, id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
