import localFont from 'next/font/local'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const inter = localFont({
  src: './fonts/GeistVF.woff',
})

export const metadata: Metadata = {
  title: 'Krish Arora — AI/ML Engineer | Python · LLMs · Full Stack',
  description: '3rd-year BMath student at UWaterloo building AI automation tools. Experience with OpenAI API, Azure AI, LangChain, and full-stack engineering. Open to AI/ML and SWE opportunities.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Krish Arora — AI/ML Engineer | Python · LLMs · Full Stack',
    description: '3rd-year BMath student at UWaterloo building AI automation tools. Experience with OpenAI API, Azure AI, LangChain, and full-stack engineering. Open to AI/ML and SWE opportunities.',
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
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
