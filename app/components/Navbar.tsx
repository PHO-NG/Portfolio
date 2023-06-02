/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import Logo from "../components/Logo"

export default function Navbar() {
  
  return (
    <nav className="sticky top-0 mx-10 border-white border-b-2 flex justify-between py-2">
        <Logo />
        <div className='flex-col sm:flex-row'>
        {/* CHANGE FONT WEIGHT TO LIGHT */}
          <h1 className='flex px-2 py-5 text-white place-content-center md:mb-0'>
            <Link href="/" className='px-2 font-extralight text-xl text-white/90 no-underline hover:text-white'>Home</Link>
            <Link href="/" className='px-2 font-extralight text-xl text-white/90 no-underline hover:text-white'>Projects</Link>
            <Link href="/" className='px-2 font-extralight text-xl text-white/90 no-underline hover:text-white'>Resume</Link>
            <Link href="/" className='p-2 font-extralight text-xl -mt-2 text-white/90 no-underline hover:text-white hover:border-3 whitespace-nowrap border-2 border-orange'>Let's Chat</Link>
          </h1>
        </div>
    </nav>
  )
}
