'use client'
import Image from 'next/image'
import styles from './styles/page.module.css'
import Buttons from './../ui/buttons'
import MainTable from './../ui/table'
import IProductUnit from './../interfaces/iProductUnit'
import { useState } from 'react'

interface AppProps {
  count: number
}

export default function App({ count }: AppProps) {
  const [products, setProducts] = useState<IProductUnit[]>()
  console.log('App count ',count = count + 10)

  return (
    <div className='container mx-auto'>
      <Buttons count={count} />
      {/* <MainTable products={products} /> */}
    </div>
  )
}
