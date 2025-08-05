import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { portfolioConfig } from '@/config/portfolio'

export const metadata: Metadata = {
  title: portfolioConfig.seo.title,
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords,
  authors: [{ name: portfolioConfig.personal.name }],
  openGraph: {
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    url: 'https://lavsarkari.me',
    siteName: `${portfolioConfig.personal.name} Portfolio`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    creator: portfolioConfig.seo.twitterHandle,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}