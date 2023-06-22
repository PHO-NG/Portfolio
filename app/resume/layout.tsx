import './page.module.css'
import Navbar from '../components/Navbar'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
    subsets: ['latin'],
  })

export const metadata = {
  title: "Phong's Portfolio",
  description: "Phong's Personal Portfolio",
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.className}>
      
      <body className='bg-black'>
      <Navbar />
      {children}
      </body>
    </html>
  )
}
