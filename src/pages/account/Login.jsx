import React from 'react'
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='sm:w-3/5 md:w-1/2 xl:w-1/4 mx-auto space-y-4 p-4'>
      {/* email */}
      <div className='flex flex-col space-y-2'>
        <label htmlFor="email">Email Address</label>
        <input className='h-9 px-2 border border-amber-600 rounded focus:outline-amber-600 focus:bg-orange-100 transition-colors duration-300 ease-linear' type="email" id='email' placeholder='enter email address' name='email' {...register('email', {
          required: 'you need to give email',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email"
          }
        })} />
        <p>{errors.email?.message}</p>
      </div>

      {/* password */}
      <div className='flex flex-col space-y-2'>
        <label htmlFor="password">Email Address</label>
        <input className='h-9 px-2 border border-amber-600 rounded focus:outline-amber-600 focus:bg-orange-100 transition-colors duration-300 ease-linear' type="password" id='password' placeholder='enter password' name='email' {...register('password', {
          required: 'you need to give password',
        })} />
        <p>{errors.password?.message}</p>
      </div>

      {/* login button */}
      <div>
        <button className='w-full bg-orange-800 text-white font-medium h-9 rounded'>Login</button>
      </div>

      {/* register */}
      <button onClick={() => navigate('/account/register', {
        // state: location.state,
        // replace: true
      })} className='underline mt-4 block w-fit mx-auto'>create an account</button>
      <button className='flex items-center gap-x-2 w-full h-9 rounded justify-center border-2 border-zinc-400'>
        <FcGoogle className='text-xl' />
        <span>Sign with google</span>
      </button>
    </form>
  )
}

export default Login