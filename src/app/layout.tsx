import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import { Inter } from 'next/font/google'
import '../index.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://israelnazareth.com'),
  title: 'Israel Nazareth - Desenvolvedor Web',
  description: 'Portfolio pessoal de Israel Nazareth, Desenvolvedor Web Full Stack com experiência em React, TypeScript, Node.js e outras tecnologias modernas.',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  keywords: 'desenvolvedor web, react, typescript, node.js, full stack, portfolio',
  authors: [{ name: 'Israel Nazareth' }],
  creator: 'Israel Nazareth',
  publisher: 'Israel Nazareth',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://israelnazareth.github.io/',
    siteName: 'Israel Nazareth - Portfolio',
    title: 'Israel Nazareth - Desenvolvedor Web',
    description: 'Portfolio pessoal de Israel Nazareth, Desenvolvedor Web Full Stack com experiência em React, TypeScript, Node.js e outras tecnologias modernas.',
    images: [
      {
        url: 'https://i.imgur.com/L5RSFP0.jpg',
        alt: 'Israel Nazareth - Desenvolvedor Web'
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 