import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)



export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json()

    await resend.emails.send({
      from: 'PrismoLens <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for your review! ✦',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0D0D0D; color: #F5F0E8; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #D4A843; font-size: 28px; margin-bottom: 8px;">PrismoLens</h1>
            <p style="color: #8A8078; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">Photo Booth Services</p>
          </div>
          
          <h2 style="font-size: 22px; margin-bottom: 16px;">Thank you, ${name}! 🎉</h2>
          
          <p style="color: #8A8078; line-height: 1.7; margin-bottom: 16px;">
            We've received your review and we truly appreciate you taking the time to share your experience with PrismoLens!
          </p>
          
          <p style="color: #8A8078; line-height: 1.7; margin-bottom: 16px;">
            Our team will validate your review and once approved, it will appear on our website. We'll get back to you shortly.
          </p>

          <div style="background: rgba(212,168,67,0.08); border: 1px solid rgba(212,168,67,0.2); border-radius: 8px; padding: 20px; margin: 24px 0;">
            <p style="color: #D4A843; font-size: 14px; margin: 0;">
              ✦ Your review helps other clients discover PrismoLens. Thank you for being part of our story!
            </p>
          </div>

          <p style="color: #8A8078; line-height: 1.7;">
            If you have any questions, feel free to message us on 
            <a href="https://m.me/prismolensofficial" style="color: #D4A843;">Messenger</a> 
            or follow us on 
            <a href="https://instagram.com/prismolens_ofc" style="color: #D4A843;">Instagram</a>.
          </p>

          <div style="text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.06);">
            <p style="color: #8A8078; font-size: 12px;">© ${new Date().getFullYear()} PrismoLens Photo Booth Services · Philippines</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Review email error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}