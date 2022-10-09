import Button from "../button/Button"
import ProductCard from "../productCard/ProductCard"
import styles from "./discover.module.scss"
export default function Discover() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>DISCOVER</h1>
        <h2>The Bloom Collection</h2>
      </div>
      <ul className={styles.collection} role="list">
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/bloom1.jpg" image2="/bloom2.jpg"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/bloom5.jpg" image2="/bloom6.jpg"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/bloom3.jpg" image2="/bloom4.jpg"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/bloom7.jpg" image2="/bloom8.jpg"/>

      </ul>
      <Button text="SHOP BLOOM" background="#F1EEE4"/>
    </section>
  )
}
