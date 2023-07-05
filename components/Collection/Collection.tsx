import { product } from "../../lib/types/product.type";
import getHandle from "../../utils/generateHandle";
import Footer from "../footer/Footer";
import ProductCard from "../productCard/ProductCard";
import styles from "./collection.module.scss";

type products = product[]

export default function Collection({products}:{products: products}) {
  return (
    <section>
      <section className={styles.container}>
        <div className={styles.header}>
          <h1>SHOP</h1>
          <h2>{`The ${products[0].collection}  Collection`}</h2>
        </div>
        <ul className={styles.collection} role="list">
          {products.map((data, index) => {
            return (
              <ProductCard key={index} title ={data.product}  price={(data.price).toString()} link={`/products/${getHandle(data.product)}/?productid=${data.id}`} image={data.image}/>
            )
          })}
        </ul>
      </section>
      <Footer/>
    </section>
  )
}
