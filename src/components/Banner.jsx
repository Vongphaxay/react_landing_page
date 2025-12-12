import React from 'react'

function Banner() {
  return (
    <div className='bg-gray-900 text-white py-16'>
      <div className="container mx-auto text-center">
        <h1 className='text-5xl font-extrabold'>WelCome To VaRiGo+</h1>
        <p className='text-lg mt-4'>Discover Amazing Things With TailwindCSS.</p>
        <a href="#" className='bg-blue-500 text-withe px-6 py-2 rounded-full mt-8 inline-block hover:bg-blue-600'>Get Started</a>
      </div>
    </div>
  )
}

export default Banner
