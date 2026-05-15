import localFont from 'next/font/local'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = localFont({
  src: './fonts/GeistVF.woff',
})

export const metadata: Metadata = {
  title: 'Krish Arora - Data Analyst & Developer',
  description: 'Portfolio of Krish Arora, showcasing skills in data analysis and development.',
  openGraph: {
    title: 'Krish Arora - Data Analyst & Developer',
    description: 'Portfolio of Krish Arora, showcasing skills in data analysis and development.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
