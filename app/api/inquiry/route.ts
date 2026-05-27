import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()

  const { error } = await resend.emails.send({
    from: 'PrismoLens <onboarding@resend.dev>',
    to: 'rainierburlasa472@gmail.com',
    subject: `New Inquiry — ${body.first_name} ${body.last_name}`,
    html: `
      <h2>New Inquiry from ${body.first_name} ${body.last_name}</h2>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Phone:</b> ${body.phone}</p>
      <p><b>Event Type:</b> ${body.event_type}</p>
      <p><b>Event Date:</b> ${body.event_date}</p>
      <p><b>Package:</b> ${body.package}</p>
      <p><b>Message:</b> ${body.message || '—'}</p>
    `,
  })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ success: true })
}