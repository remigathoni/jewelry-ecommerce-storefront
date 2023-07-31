import axios from "axios";
import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import LinkButton from "../linkButton/LinkButton";
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
    // move to stripe checkoutpage
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/orders/checkout",
        {
          items: cartItems,
          shippingInfo,
        }
      );

      console.log(data)
      if(data.url) window.location.href = data.url;
    } catch (error:any) {
      console.log(error.response);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>CHECKOUT</h1>
        <small>Kindly fill in your personal information and complete the payment.</small>
      </div>
      <section className={styles.shippingsection}>
        {/* <div className={styles.inputSection}>
          <div className={styles.inputRow}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="first name" id="firstname"/>
          </div>
          <div className={styles.inputRow}>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="last name" id="lastname"/>
          </div>
        </div>

        <div className={styles.inputSection}>
          <div className={styles.inputRow}>
            <label htmlFor="phonenumber">Phone number</label>
            <input type="tel" name="phone number" id="phone number"/>
          </div>
          <div className={styles.inputRow}>
            <label htmlFor="lastname">Email</label>
            <input type="text" name="last name" id="lastname"/>
          </div>
        </div> */}

        <div className={styles.inputRowFull}>
          <label htmlFor="deliveryaddress">Delivery address</label>
          <input type="text" name="delivery address" id="deliveryaddress" value={shippingInfo} onChange={(e) => setShippingInfo(e.target.value)}/>
        </div>

      </section>
      <button onClick={checkoutHandler}>Go to checkout </button>
      <LinkButton text={"Proceed to payment"} background={"#eee"} link={"/"} />
    </div>
  )
}

export default Checkout