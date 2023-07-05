import { product } from "../../lib/types/product.type";
import getHandle from "../../utils/generateHandle";
import Button from "../button/Button";
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
            <ProductCard key={index} title={data.product} price={(data.price).toString()} link={`${getHandle(data.product)}?productid=${data.id}`} image={data.image}/>
          )
        })}
      </ul>

      <Button text="SHOP BASICS" background="#F1EEE4"/>
    </section>
  )
}
