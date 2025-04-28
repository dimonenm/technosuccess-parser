import Image from "next/image";
import styles from "./styles/page.module.css";
import Buttons from './ui/buttons'
import MainTable from './ui/table'

export default function Home() {
  return (
    // <div className={styles.page}>
    <div className='container mx-auto'>
      <Buttons />
      <MainTable />
    </div>
  )
}
