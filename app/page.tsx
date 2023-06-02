/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export default function Home() {
  return (
    <main >
      <div className="flex justify-around mt-20">
      <Image 
            src="/"
            className='bg-black my-5 mx-10'
            width={40}
            height={40}
            alt="me"
            priority={true}
        />
        <div className="text-white shrink w-3/12">
          <h2 className="">━━━ Hey👋, I'm</h2>
          <h1 className="ml-5 text-orange font-bold text-5xl">Phong Nguyen</h1>
          <h2 className="ml-64">a developer.</h2>
          <p className="w-8/12 font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices diam eu nisi varius, a laoreet diam dignissim. Maecenas luctus ullamcorper</p>
          <div>
          <button type="button" className="text-blue border-2 border-blue hover:text-white hover:bg-blue font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">RESUME</button>
          <button type="button" className="text-orange border-2 border-orange hover:text-white hover:bg-orange font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">PROJECTS</button>
          </div>
        </div>
      </div>
    </main>
  )
}
