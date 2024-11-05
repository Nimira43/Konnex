import type { Metadata } from 'next'
import { Poppins } from 'next/font/google' 
import './globals.css'
import Providers from '@/components/Providers'
import TopNav from '@/components/navbar/TopNav'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'ProGamers',
  description: 'Next JS app with NextUI and Framer Motion',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Providers>
          <TopNav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
