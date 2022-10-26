import Button from "../button/Button"
import ProductCard from "../productCard/ProductCard"
import styles from "./basics.module.scss"
type images =  {
          url: string;
          altText: string;
      }[];

type product = {
  id: string,
  title: string
  handle: string,
  price: string,
  images: images
}
type basics = product[]

export default function Basics({basics}:{basics: basics}) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>TRENDING</h1>
        <h2>Our everyday basics</h2>
      </div>
      <ul className={styles.collection} role="list">
        {basics.map((basic, index) => {
          return (
            <ProductCard key={index} description={basic.title} price={basic.price} link={`/${basic.handle}`} image1={basic.images[0].url} image2={basic.images[0].url}/>
          )
        })}
      </ul>

      <Button text="SHOP BASICS" background="#F1EEE4"/>
    </section>
  )
}
