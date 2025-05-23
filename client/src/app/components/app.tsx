'use client'
import Image from 'next/image'
import styles from './styles/page.module.css'
import Buttons from './../ui/buttons'
import MainTable from './../ui/table'
import IProductUnit from './../interfaces/iProductUnit'
import { useEffect, useState } from 'react'
import { GetProducts } from './../actions/getProducts'

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
    <div className='container mx-auto'>
      <Buttons setProducts={setProducts} />
      <MainTable products={products} />
    </div>
  )
}
