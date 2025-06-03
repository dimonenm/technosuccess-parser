'use client'
import { useEffect, useState } from 'react'
import IProductUnit from '../interfaces/iProductUnit'
import FilterInput from './filterInput'
import SearchInput from './searchInput'

export default function App() {
  const [products, setProducts] = useState<IProductUnit[]>([])
  console.log('products count ', products?.length)

	return (
    <div className='flex flex-col justify-center w-3xl mx-auto'>
			<SearchInput setProducts={setProducts} />
			<FilterInput />

    </div>
  )
}
