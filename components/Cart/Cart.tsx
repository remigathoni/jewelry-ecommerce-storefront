import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "../../context/cartContext";
import { product } from "../../lib/types/product.type";
import styles from "./Cart.module.scss";

function Cart() {
  const { cartItems, removeFromCart } = useCartContext();
  if(cartItems.length<1) return (
    <div className={styles.nocart}>No items in cart. <span className={styles.link}><Link href="/" >
      Go back to shopping
    </Link></span></div>
  )

  const getTotal = () => {
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    return totalPrice
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>CART</h1>
      </div>
      
      <div>
        {cartItems.map((item:product) => {
          return  (<div key={item.id} className={styles.cartItem}>
            <div className={styles.product}>
              <Image src={item.image} alt="ring" width={100} height={100}/>
              <h2>{item.product}</h2>
            </div>
            <div>Ksh. {item.price}</div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>)
        })}
        
      </div>

      <button className={styles.checkoutbtn}>{`GO TO CHECKOUT - TOTAL Ksh 
        ${getTotal()}`}</button>
    </div>
  )
}

export default Cart