import { Resend } from 'resend'
const resend = new Resend(process.env.re_V632FX7v_2ozdxKnkJ8ZybGdKSnuotqMK)
import EmailTemplate from '../../components/EmailTemplate'

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.sendEmail({
      from: 'modern-portfolio.com <website@modern-portfolio.com>',
      to: 'd2b4mb@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via modern-portfolio.com`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
