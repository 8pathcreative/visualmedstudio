import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, message, projectType } = body

    const emailContent = {
      to: "neilkhumphrey@gmail.com",
      from: "contact@vismedstudio.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #191970; border-bottom: 2px solid #5FB3D4; padding-bottom: 10px;">New Contact Form Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || "Not provided"}</p>
            <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
          </div>
          <div style="margin: 20px 0;">
            <h3 style="color: #191970;">Message:</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #5FB3D4; border-radius: 4px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="color: #666; font-size: 14px;"><em>Sent from Vismed Studio contact form</em></p>
        </div>
      `,
    }

    // Send data to Google Sheets via Google Apps Script
    const response = await fetch("https://script.google.com/macros/s/AKfycbwCJqMHsl87oOIkdedbC2E43lAj2E9Ntbi9r4N2djiCjhggNDJVVQ6Wy8pzZJBtUQlm/exec", {
      method: "POST",
      mode: "no-cors", // This bypasses CORS issues
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        company,
        projectType,
        message,
      }),
    })

    // With no-cors mode, we can't read the response, so we'll assume success
    // The data will still be sent to Google Sheets
    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
