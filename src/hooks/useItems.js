import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

export const useItems = (amount) => {
  const host = '192.168.1.105'
  const { data: items, isLoading, isError, refetch } = useQuery(['items', amount], () =>
    axios(`http://${host}:3000/items?amount=${amount}`).then(res => res.data))
  return { items, refetch, isLoading }
}
