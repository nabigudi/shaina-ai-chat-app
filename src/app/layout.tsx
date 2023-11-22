import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Renaiss AI Chat App',
  description: 'Created by Nabila Gudiño Ochoa',
}
type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
