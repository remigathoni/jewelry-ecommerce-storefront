import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCartContext } from "../../context/cartContext";
import supabase from "../../lib/supabase/supabase";
import styles from "./checkout.module.scss";

function Checkout() {
  const [shippingInfo, setShippingInfo] = useState("")
  const { cartItems } = useCartContext();
  const [user, setuser] = useState(null)
  const router = useRouter()
  useEffect( () => {
    async function getUser() {
      
      const {data, error} = await supabase.auth.getUser()
      console.log(data)
      if(!data.user) {
        router.push("/auth/login")
      }
      setuser(data.user)
    }
    void getUser()
  }, [router])
  
  const checkoutHandler = async () => {
    console.log("HERE")
    if (!shippingInfo) {
      console.log("Please select your shipping address");
      return
    }
    if(!cartItems) {
      return
    }
    // move to stripe checkoutpage
    try {
      

      const { data } = await axios.post(
        `${process.env.API_URL}/api/orders/checkout`,
        {
          items: cartItems,
          shippingInfo,
          user
        }
      );

      if(data.url) window.location.href = data.url;
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