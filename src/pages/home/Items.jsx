import React from 'react'
import { useItems } from '../../hooks/useItems'
import Item from './Item'

function Items() {
  const { items, refetch, isLoading } = useItems()
  if (isLoading) return
  return <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 justify-items-center'>
    {
      items.map(item => <Item item={item} key={item._id}></Item>)
    }
  </div>
}

export default Items