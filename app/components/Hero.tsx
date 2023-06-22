/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Navbar() {
  
  return (
    <div className="flex justify-center mt-20">
      <Image 
            src="/"
            className='bg-black my-5 mx-10'
            width={200}
            height={100}
            alt="me"
            priority={true}
        />
        <div className="text-white shrink w-4/12">
          <h2 className="">━━━ Hey👋, I'm</h2>
          <h1 className="ml-5 text-orange font-bold text-5xl">Phong Nguyen</h1>
          <h2 className="ml-64">a developer.</h2>
          <p className="w-8/12 md:w-11/12 font-extralight">I care a lot about using design for positive impact, and enjoy creating user-centric, delightful, and human experiences.</p>
          <div className="my-5">
            <button type="button" className="text-blue border-2 border-blue hover:text-white hover:bg-blue font-medium rounded-full text-sm px-7 py-1.5 text-center mr-10 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">RESUME</button>
            <button type="button" className="text-orange border-2 border-orange hover:text-white hover:bg-orange font-medium rounded-full text-sm px-7 py-1.5 text-center dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">PROJECTS</button>
          </div>
        </div>
      </div>
  )
}
