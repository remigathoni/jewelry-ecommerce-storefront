/* eslint-disable @typescript-eslint/restrict-template-expressions */
import LinkButton from "../linkButton/LinkButton"
import styles from "./hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.container}>
      <section className={styles.left}>
        <div className={styles.content}>
          <h1>Best of statement</h1>
          <h1>jewelery.</h1>
          <LinkButton text="SHOP NOW" background="#fff" link={"/#shop"}></LinkButton>
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
