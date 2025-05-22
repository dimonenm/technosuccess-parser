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

export default function App() {
  const [products, setProducts] = useState<IProductUnit[]>()

  return (
    <div className='container mx-auto'>
      <Buttons />
      {/* <MainTable products={products} /> */}
    </div>
  )
}
