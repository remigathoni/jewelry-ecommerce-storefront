import Button from "../button/Button"
import styles from "./hero.module.scss"
export default function Hero() {
  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <div className={styles.content}>
          <h1>Best of statement</h1>
          <h1>jewelery.</h1>
          <Button text="SHOP NOW"/>
        </div>
      </section>
      <section className={styles.right}>
        <div className={styles.top}>
          
        </div>
        <div className={styles.bottom}></div>
      </section>

    </section>
  )
}
