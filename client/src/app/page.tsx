import Image from "next/image";
import styles from "./styles/page.module.css";
import Buttons from './components/buttons'
import MainTable from './components/table'

export default function Home() {
  return (
    <div className={styles.page}>
      <Buttons />
      <MainTable />
    </div>
  )
}
