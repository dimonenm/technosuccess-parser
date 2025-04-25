import Image from 'next/image'
import styles from './styles/page.module.css'
import Buttons from './ui/buttons'
import MainTable from './ui/table'

export default function Home() {
  return (
    // <div className={styles.page}>
    <div className='container'>
      <div className='flex justify-center w-2/3'>
        <Buttons />
      </div>
      <div className='flex justify-center w-2/3'>
        <MainTable />
      </div>
    </div>
  )
}
