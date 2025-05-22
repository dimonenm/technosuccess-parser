import Image from 'next/image'
import styles from './styles/page.module.css'
import Buttons from './ui/buttons'
import MainTable from './ui/table'
import IProductUnit from './interfaces/iProductUnit'
import App from './components/app'

async function GetProducts() {
  const data = await fetch('http://localhost:3000/get-data').then(response =>
    response.json()
  )
  return data
}

export default async function Home() {

  let count = 0

  setInterval(() => {
    console.log('Home count', count)
  }, 5000)
  

  return (
    <App count={count} />
    // <div className='container mx-auto'>
    //   <Buttons />
    //   <MainTable products={products} />
    // </div>
  )
}
