
import styles from "./subscription.module.scss"
export default function Subscription() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <p>Stay up to date with special offers, jewelry wearing tips, and more.</p>
      </div>
      <div className={styles.right}>
        <div className={styles.inputgroup}>
          <input type="email" placeholder="Your email" aria-label="Your email"/>
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  )
}
