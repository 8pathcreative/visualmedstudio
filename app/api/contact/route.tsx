import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Validation function
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, message, projectType } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      )
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 10 characters long" },
        { status: 400 }
      )
    }

    const adminEmail = process.env.ADMIN_EMAIL || "neilkhumphrey@gmail.com"

    // Send email to admin using Resend
    const adminEmailResult = await resend.emails.send({
      from: "Vismed Studio <onboarding@resend.dev>",
      to: adminEmail,
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
    })

    if (adminEmailResult.error) {
      console.error("[Contact API] Failed to send admin email:", adminEmailResult.error)
      return NextResponse.json(
        { success: false, message: "Failed to send message to admin" },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: "Vismed Studio <onboarding@resend.dev>",
      to: email,
      subject: "We received your message - Vismed Studio",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #191970;">Thank You for Reaching Out!</h2>
          <p>Hi ${firstName},</p>
          <p>We've received your inquiry and appreciate you taking the time to contact us. Our team will review your message and get back to you within 24 hours.</p>
          <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
            <p style="margin: 10px 0 0 0; color: #666; font-size: 14px;">We'll be in touch soon!</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">Vismed Studio - Medical Visualization & Development</p>
        </div>
      `,
    })

    if (userEmailResult.error) {
      console.error("[Contact API] Failed to send user confirmation email:", userEmailResult.error)
      // Don't fail the request if confirmation email fails, but log it
    }

    // Also send to Google Sheets as backup
    if (process.env.GOOGLE_SHEETS_SCRIPT_URL) {
      fetch(process.env.GOOGLE_SHEETS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
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
          submittedAt: new Date().toISOString(),
        }),
      }).catch((error) => {
        console.error("[Contact API] Failed to send to Google Sheets:", error)
      })
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We'll be in touch within 24 hours.",
    })
  } catch (error) {
    console.error("[Contact API] Error:", error)
    return NextResponse.json(
      { success: false, message: "An error occurred while processing your request" },
      { status: 500 }
    )
  }
}
