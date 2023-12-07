import type { Metadata } from 'next'
import './index.module.css'

export const metadata: Metadata = {
  title: 'Digital-Twin',
  description: 'Digital-Twin Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
