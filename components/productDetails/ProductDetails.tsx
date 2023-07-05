import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { product } from "../../lib/types/product.type";
import styles from "./Productdetails.module.scss";
export default function ProductDetails({ product }:{product:product}) {
  const [quantity, setQuantity] = useState(1);
  const [checkout, setCheckout] = useState(false);
  
  
  type updateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => void

  const updateQuantity:updateQuantity = (e) => {
    setQuantity(Number(e.target.value));
    if (quantity == 0) setCheckout(false);
  };
  const handleAddToCart = async () => {
    // let cartId = sessionStorage.getItem("cartId");
    // if (quantity > 0) {
    //   if (cartId) {
    //     await updateCart(cartId, product.variants.edges[0].node.id, quantity);
    //     setCheckout(true);
    //   } else {
    //     let data = await addToCart(product.variants.edges[0].node.id, quantity);
    //     cartId = data.cartCreate.cart.id;
    //     sessionStorage.setItem("cartId", cartId);
    //     setCheckout(true);
    //   }
  }
  return (
    <div className={styles.wrapper}>
      {checkout ? (
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        <Link href={`/cart?cartid=${sessionStorage.getItem("cartId")}`}>
          Checkout
        </Link>
      ) : (
        <></>
      )}
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src={product.image}
            alt={product.product}
            width={600}
            height={800}
          />
        </div>
        <div className={styles.content}>
          <span>
            <h2>{product.product}</h2>
            <h3>Ksh. {Number(product.price) * quantity}</h3>
          </span>
          <input
            value={quantity}
            onChange={updateQuantity}
            type="number"
            min={1}
          />
          {          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          }          <button className={styles.cartbtn} onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}