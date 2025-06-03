'use client'
import Image from 'next/image'
import Buttons from './../ui/buttons'
import MainTable from './../ui/table'
import IProductUnit from './../interfaces/iProductUnit'
import { useEffect, useState } from 'react'
import { GetProducts } from './../actions/getProducts'
import SearchInput from './searchinput'
import FilterInput from './filterInput'

interface AppProps {
  count: number
}

export default function App() {
  const [products, setProducts] = useState<IProductUnit[]>([])
  console.log('products count ', products?.length)

  useEffect(() => {
    const getData = async () => {
      setProducts(await GetProducts())
    }
    // getData()
  }, [])

  return (
    <div className='block h-full w-dvw'>
      <div className='flex flex-col justify-center w-1/2'>
        <div className='flex w-4/12'>1</div>
        <SearchInput setProducts={setProducts} />
        <FilterInput />
        <MainTable products={products} />
      </div>
    </div>
    // <div className='container mx-auto'>
    //   <Buttons setProducts={setProducts} />
    //   <MainTable products={products} />
    // </div>
  )
}
