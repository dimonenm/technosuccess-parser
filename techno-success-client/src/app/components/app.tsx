'use client'
import { useEffect, useState } from 'react'
import IProductUnit from '../interfaces/iProductUnit'
import FilterInput from './filterInput'
import SearchInput from './searchInput'
import TableComp from './tableComp'
import Spinner from '@/components/ui/spiner'

export default function App() {
  const [products, setProducts] = useState<IProductUnit[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  console.log('products count ', products?.length)

  useEffect(() => {
    setLoading(false)
  }, [products])

  return (
    <div className='flex flex-col justify-center w-3xl mx-auto'>
      <SearchInput setProducts={setProducts} setLoading={setLoading} />
      <FilterInput />
      {loading ? <Spinner /> : <TableComp products={products} />}
      {/* <TableComp products={products} /> */}
    </div>
  )
}
