import React from 'react'
import heroImage from '../image/hero-image.png'


const Hero = () => {
  return (
      <section className='flex justify-center lg:justify-between flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto p-4 '>
          
          <div className=''>
              <h1 className='text-3xl lg:text-6xl font-semibold mb-6 text-gray-600 lg:leading-tight'><span className='text-pink-500 text-6xl'>Dev. Shop</span> <br /> for developer's to solve their Problems</h1>
              <p className='text-gray-500 font-medium text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, illum perspiciatis. Temporibus sed odit facilis ab blanditiis nesciunt harum totam!</p>

              <button className='px-8 py-2  text-gray-600 mt-8 font-semibold text-1xl rounded-full bg-pink-200 hover:bg-pink-400 transition-colors hover:text-pink-50 tracking-wide'>Join Slack</button>
          </div>

          <div className='max-w-xl'>
              <img className='w-full p-2' src={heroImage} alt="Hero section" />
          </div>

      </section>
  )
}

export default Hero
