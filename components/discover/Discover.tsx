import Button from "../button/Button"
import ProductCard from "../productCard/ProductCard"
import styles from "./discover.module.scss"
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
type discover = product[]

export default function Discover({discover}:{discover: discover}) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>DISCOVER</h1>
        <h2>The Bloom Collection</h2>
      </div>
      <ul className={styles.collection} role="list">
      {discover.map((product, index) => {
          return (
            <ProductCard key={index} description={product.title} price={product.price} link={`/${product.handle}`} image1={product.images[0].url} image2={product.images[0].url}/>
          )
        })}
      </ul>
      <Button text="SHOP BLOOM" background="#F1EEE4"/>
    </section>
  )
}
