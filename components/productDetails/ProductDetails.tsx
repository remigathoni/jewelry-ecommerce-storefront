import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";
import { product } from "../../lib/types/product.type";
import styles from "./Productdetails.module.scss";

export default function ProductDetails({ product }:{product:product}) {
  const [checkout, setCheckout] = useState(false);
  const [exists, setExists] = useState(false);
  // const cartItems  = [{id: "", name: "", price: ""}] // what to store temporarily
  const { cartItems, addToCart, removeFromCart } = useCartContext();
 
  useEffect(() => {
    const inCart = cartItems.find((item:product) => item.id === product.id);

    if (inCart) {
      setExists(true);
    } else {
      setExists(false);
    }
  }, [cartItems, product.id]);
  
  

  type updateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => void

  
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
  console.log(cartItems)
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
            height={600}
          />
        </div>
        <div className={styles.content}>
          <span>
            <h2>{product.product}</h2>
            <h3>Ksh. {product.price}</h3>
          </span>
         
          {          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          }  
          
          {exists?<button className={styles.cartbtn} onClick={() => removeFromCart(product)}>Remove from Cart</button>:<button className={styles.cartbtn} onClick={() => addToCart(product)}>
            Add to Cart
          </button>}

        </div>
      </div>
    </div>
  );
}