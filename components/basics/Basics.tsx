import { product } from "../../lib/types/product.type";
import getHandle from "../../utils/generateHandle";
import LinkButton from "../linkButton/LinkButton";
import ProductCard from "../productCard/ProductCard";
import styles from "./basics.module.scss";

type basics = product[]

export default function Basics({basics}:{basics: basics}) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>TRENDING</h1>
        <h2>Our everyday basics</h2>
      </div>
      <ul className={styles.collection} role="list">
        {basics.map((data, index) => {
          return (
            <ProductCard key={index} title={data.product} price={(data.price).toString()} link={`/products/${getHandle(data.product)}/?productid=${data.id}`} image={data.image}/>
          )
        })}
      </ul>

      <LinkButton link={`collection/${basics[0].collection}`} text={`SHOP ${(basics[0].collection).toUpperCase()}`} background="#F1EEE4"/>
    </section>
  )
}
