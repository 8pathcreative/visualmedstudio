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

    // For now, we'll use a simple fetch to a webhook service like Formspree or similar
    // In production, you would use Resend, SendGrid, or similar email service
    const response = await fetch("https://formspree.io/f/xpwagqvr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: `${firstName} ${lastName}`,
        company: company,
        projectType: projectType,
        message: message,
        _replyto: email,
        _subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      }),
    })

    if (response.ok) {
      return NextResponse.json({
        success: true,
        message: "Message sent successfully!",
      })
    } else {
      throw new Error("Failed to send email")
    }
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ success: false, message: "Failed to send message" }, { status: 500 })
  }
}
