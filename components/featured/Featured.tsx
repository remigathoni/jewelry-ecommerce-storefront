import Image from "next/image";
import Link from "next/link";
import styles from "./featured.module.scss"
export default function Featured() {
  return (
    <section  className={styles.container}>
      <div className={styles.image}>
        <Image src='/featured.png' alt="" layout="fill" objectFit="contain" objectPosition="center"/>
      </div>
      <div >
        <div className={styles.content}>
          <h1>FEATURED</h1>
          <h2>
            Dainty blue porcelain huggies 
          </h2>
          <small>Ksh. 700</small>
          <button className={styles.buttonoutline} aria-label="Add to cart">
            ADD TO CART
          </button>
          <button className={styles.button} aria-label="Add to cart">
            CHECKOUT        
          </button>
          <Link href="/">
            <a className={styles.link}>View product details</a>
          </Link>
        </div>
      </div>
    </section>
  )
}
