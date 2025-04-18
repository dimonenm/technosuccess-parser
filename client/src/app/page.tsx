import Image from "next/image";
import styles from "./page.module.css";
import Buttons from './buttons'

export default function Home() {
  return (
    <div className={styles.page}>
      <Buttons />
    </div>
  )
}
