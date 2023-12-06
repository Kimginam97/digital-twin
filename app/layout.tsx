import type { Metadata } from 'next'
import './globals.css'
import Nav from './ui/common/nav'

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
      <body className="bg-black">
        <Nav />
        <div>{children}</div>
      </body>
    </html>
  )
}
