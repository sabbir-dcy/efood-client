import React from 'react'

function Item({ item }) {
  const { name, price, img, ingredients, details, _id } = item
  return (
    <div className='rounded-lg max-w-sm overflow-hidden shadow-md shadow-zinc-200 hover:shadow-lg hover:scale-105 transition-all duration-300'>
      <div>
        <img className='object-cover h-48 w-full' src={img} alt="item" />
        <div className='px-10 py-5 space-y-2'>
          <p className='text-lg font-bold'>{name}</p>
          <p className='text-sm text-zinc-500'>{details}</p>
          <h2 className='text-2xl font-bold text-zinc-600 '>$ {price}</h2>
        </div>
      </div>
      <div className='mb-6'>
        <button className='w-24 rounded-full mx-auto block bg-orange-100 text-amber-700 font-medium h-10 hover:bg-orange-200 transition-colors'>add</button>
      </div>
    </div>
  )
}

export default Item