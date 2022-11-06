import React from 'react'
import heroImage from '../image/hero-image.png'


const Hero = () => {
    return (
        <div className='bg-hero-background bg-no-repeat bg-center h-screen'>
            <section className=' mt-4 flex justify-center lg:justify-between flex-col lg:flex-row gap-8 items-center max-w-7xl mx-auto p-1 lg:p-2 '>
                <div className='text-center lg:text-left max-w-xl w-full'>
                    <h1 className='text-3xl lg:text-5xl font-semibold mb-6 text-gray-600'><span className='text-pink-500 text-6xl'>Dev. Shop</span> <br /> for developer's to solve their Problems</h1>
                    <p className='text-gray-500 font-medium text-lg'>Here you find many kinds of Navbar, Cards and Images for Developer uses. Here you get all source code for develop Navbar, Cards and much more. Don't just copy and past those codes, But also try to Understand those codes.</p>
                    <button className='px-8 py-2  text-gray-600 mt-8 font-semibold text-1xl rounded-full bg-pink-200 hover:bg-pink-400 transition-colors hover:text-pink-50 tracking-wide'>Join Slack</button>
                </div>
                <div className='max-w-2xl'>
                    <img className='w-full p-2' src={heroImage} alt="Hero section" />
                </div>
            </section>
        </div>
        
  )
}

export default Hero
