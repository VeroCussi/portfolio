import type { Metadata } from 'next'
import { Inter, Space_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Verónica Cussi - Portfolio',
  description: 'Portfolio profesional de Verónica Cussi, desarrolladora web full-stack',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased`}
        style={{
          backgroundColor: 'var(--paper)',
          color: 'var(--ink)'
        }}
      >
        {children}
      </body>
    </html>
  );
}
