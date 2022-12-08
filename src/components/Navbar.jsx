import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ActiveLink from './ActiveLink'
import { CgMenuLeft } from "react-icons/cg";

function Navbar({ children }) {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <div className='border-b fixed w-full top-0 bg-white z-10'>
        <div className='w-4/5 mx-auto h-14 flex justify-between items-center'>
          <div>
            <h2 className='font-bold text-orange-700'>Efood</h2>
          </div>
          <div className='hidden space-x-4 h-full md:flex items-center'>
            <ActiveLink to={'/'}>Home</ActiveLink>
            <ActiveLink to={'/cart'}>Cart</ActiveLink>
            <ActiveLink to={'/review'}>Reviews</ActiveLink>
            <ActiveLink to={'/about'}>About</ActiveLink>
            <ActiveLink to={'/account'}>Login</ActiveLink>
          </div>
          <button className='md:hidden' onClick={() => setMenu(!menu)}>
            <CgMenuLeft className='text-xl'></CgMenuLeft>
          </button>
        </div>
      </div>

      <div className={`${!menu && 'hidden'} h-full backdrop-blur-2xl w-full fixed top-14 md:hidden z-20`}>
        <div className='flex flex-col items-center gap-y-8 mt-20 font-medium'>
          <Link to={'/'}>Home</Link>
          <Link to={'/cart'}>Cart</Link>
          <Link to={'/review'}>Reviews</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/account'}>Login</Link>
        </div>

      </div>

      <div className='w-4/5 mx-auto'>
        {children}
      </div>


    </>
  )
}

export default Navbar