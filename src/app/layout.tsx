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
    'AI Product',
    'Agent Engineer',
    'LLM',
    'Multi-agent',
    'RAG',
    'Next.js',
    'Full-stack',
    personal.name,
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
