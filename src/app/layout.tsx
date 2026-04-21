import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { personal } from '@/data/personal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${personal.name} — ${personal.title}`,
    template: `%s | ${personal.name}`,
  },
  description: personal.description,
  keywords: [
    'AI 应用',
    'Agent 开发',
    'LLM',
    '多智能体',
    'RAG',
    'Prompt Engineering',
    personal.name,
    '乔卓骁',
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    type: 'website',
    title: personal.name,
    description: personal.description,
    siteName: personal.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: personal.name,
    description: personal.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
