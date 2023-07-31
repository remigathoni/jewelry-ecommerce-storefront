import axios from "axios";
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import supabase from "../../lib/supabase/supabase";
import styles from "./checkout.module.scss";

function Checkout() {
  const [shippingInfo, setShippingInfo] = useState("")
  const { cartItems } = useCartContext();

  const checkoutHandler = async () => {
    console.log("HERE")
    if (!shippingInfo) {
      console.log("Please select your shipping address");
      return
    }
    if(!cartItems) {
      console.log("Add items")
      return
    }
    // move to stripe checkoutpage
    try {
      
      const {data:{user}, error} = await supabase.auth.getUser() 
      const { data } = await axios.post(
        "http://localhost:3000/api/orders/checkout",
        {
          items: cartItems,
          shippingInfo,
          user
        }
      );

      console.log(data)
      // if(data.url) window.location.href = data.url;
    } catch (error:any) {
      console.log(error.response);
    }
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault()
    await checkoutHandler()
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>CHECKOUT</h1>
        <small>Kindly fill in your personal information and complete the payment.</small>
      </div>
      <form onSubmit={handleSubmit}>
        <section className={styles.shippingsection}>
          <div className={styles.inputRowFull}>
            <label htmlFor="deliveryaddress">Delivery address</label>
            <input required type="text" name="delivery address" id="deliveryaddress" value={shippingInfo} onChange={(e) => setShippingInfo(e.target.value)}/>
          </div>

        </section>
        <button type="submit" className={styles.button}>Proceed to Payment</button>

      </form>
      
    </div>
  )
}

export default Checkout