import React from 'react'

import Lottie from 'lottie-react'
import Learning from '../learning.json'

const Hero = () => {
    return (
        <section className='bg-hero-background bg-no-repeat bg-center h-screen flex justify-center items-center'>
            <div className=' mt-4 flex justify-center lg:justify-between flex-col-reverse lg:flex-row gap-8 items-center max-w-7xl mx-auto p-1 lg:p-2 '>
                <div className='text-center lg:text-left max-w-lg w-full'>

                    <h1 className='text-3xl lg:text-4xl font-semibold mb-6 text-gray-600'><span className=' text-6xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-teal-500'>Dev. Shop</span> <br /> for developer's to solve their Problems</h1>

                    <p className='text-gray-500 font-medium text-lg'>Here you find many kinds of Navbar, Cards and Images for Developer uses. Here you get all source code for develop Navbar, Cards and much more. Don't just copy and past those codes, But also try to Understand those codes.</p>
                    
                    <button className='transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-8 py-2 mt-8 font-bold text-1xl rounded-full text-pink-50 tracking-wide bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:transition-all hover:to-yellow-500'>Join Slack</button>
                </div>
                <div className='w-full'>
                <Lottie className='' animationData={Learning} />
                </div>
            </div>
        </section>
        
  )
}

export default Hero
