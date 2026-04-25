import './globals.css'

export const metadata = {
  title: 'Accredian Enterprise — Upskill Your Workforce',
  description: 'Partner with Accredian to deliver world-class learning programs tailored for your enterprise.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
