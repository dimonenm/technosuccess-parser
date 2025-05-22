import Image from 'next/image'
import styles from './styles/page.module.css'
import Buttons from './ui/buttons'
import MainTable from './ui/table'
import IProductUnit from './interfaces/iProductUnit'

async function GetProducts() {
  const data = await fetch('http://localhost:3000/get-data').then(
    response => response.json()
  )
  return data
}

export default async function Home() {
  const products: IProductUnit[] = await GetProducts()

  return (
    <div className='container mx-auto'>
      <Buttons />
      <MainTable products={products} />
    </div>
  )
}
