import Button from "../button/Button"
import ProductCard from "../productCard/ProductCard"
import styles from "./basics.module.scss"
export default function Basics() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>TRENDING</h1>
        <h2>Our everyday basics</h2>
      </div>
      <ul className={styles.collection} role="list">
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/trend1.jpg" image2="/trend1.jpg"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/trend2.png" image2="/trend2.png"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/trend3.jpg" image2="/trend3.jpg"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/trend4.png" image2="/trend4.png"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/trend7.jpg" image2="/trend7.jpg"/>
        <ProductCard description="Jade earrings" price="Ksh 210" link="/" image1="/trend6.jpg" image2="/trend6.jpg"/>
      </ul>
      <Button text="SHOP BASICS" background="#F1EEE4"/>
    </section>
  )
}
