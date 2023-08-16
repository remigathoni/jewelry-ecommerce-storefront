import { product } from "../../lib/types/product.type";
import getHandle from "../../utils/generateHandle";
import LinkButton from "../linkButton/LinkButton";
import ProductCard from "../productCard/ProductCard";
import styles from "./discover.module.scss";

type discover = product[]

export default function Discover({discover}:{discover: discover}) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>DISCOVER</h1>
        <h2 id="shop">The Bloom Collection</h2>
      </div>
      <ul className={styles.collection} role="list">
        {discover.map((data, index) => {
          return (
            <ProductCard key={index} title ={data.product}  price={(data.price).toString()} link={`/products/${getHandle(data.product)}/?productid=${data.id}`} image={data.image}/>
          )
        })}
      </ul>
      <LinkButton link={`collection/${discover[0].collection}`} text="SHOP BLOOM" background="#F1EEE4"/>
    </section>
  )
}
