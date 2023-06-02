import React from 'react'
import Image from "next/image"

export default function Logo() {
  return (
    <section className='w-full mx-auto flex'>
        <Image 
            src="/logo-white.png"
            className='bg-black my-5'
            width={40}
            height={40}
            alt="me"
            priority={true}
        />
        <h1 className='text-white text-2xl mt-6'>hong.</h1>
    </section>
  )
}
