import React from 'react'
import Items from './Items'

function Home() {
  return (
    <div className='space-y-20 my-20'>
      <Banner></Banner>
      <Items></Items>
    </div>
  )
}

const Banner = () => {
  return <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-center lg:justify-items-end justify-items-center'>
    <div className='order-2 lg:order-1 text-center lg:text-left'>
      <h2 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-800 to-amber-500'>Best place to have fast food</h2>
      <p className='text-lg font-medium mt-6'>get 20% off on first order</p>
    </div>
    <div className='order-1 lg:order-2'>
      <img className='object-cover md:h-[600px] h-[300px] animate-[spin_10s_linear_infinite]' src="https://i.ibb.co/1KwrGSS/charlesdeluvio-D-v-DQMTf-AAU-unsplash-Photo-Room.png" alt="banner" />
    </div>
  </div>
}


export default Home