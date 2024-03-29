"use client"
import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "../../context/cartContext";
import Logo from "../logo/Logo";
import styles from "./mainnav.module.scss";
export default function MainNav() {
  const { cartItems } = useCartContext();

  return (
    <>
      <nav className={styles.container}>
        <Logo/>
        <ul className={styles.links}>
          <li>
            <Link href="/">
              NECKLACES
            </Link>
          </li>
          <li>
            <Link href="/">
              EARRINGS
            </Link>
          </li>
          {/* <li>
            <Link href="/">
             JEWELRY CARE
            </Link>
          </li> */}
          <li>
            <Link href="/">
              ABOUT
            </Link>
          </li>
        </ul>
        <ul>
          {/* <li>
            <button aria-label="search">     
              <Image src="/search.svg" alt="search" width={24} height={24}/>
            </button>
          </li>
          <li>
            <button aria-label="account">     
              <Image src="/account.svg" alt="account" width={24} height={24}/>
            </button>
          </li> */}
          <li>
            <Link href="/cart">
              <button aria-label="cart" className={styles.cartbtn}>    
                <Image src="/cart.svg" alt="cart" width={24} height={24}/>
                {cartItems.length?<div>{cartItems.length}</div>:""}
              </button>
            </Link>

          </li>
          <li className={styles.menu}>
            <button aria-label="menu">    
              <Image src="/menu.svg" alt="" width={24} height={24}/>
            </button>
          </li>
        </ul>

      </nav>
      <nav className={styles.mobile}>
        <ul >
          <li>
            <Link href="/">
             NECKLACES
            </Link>
          </li>
          <li>
            <Link href="/">
             EARRINGS
            </Link>
          </li>
          <li>
            <Link href="/">
             JEWELRY CARE
            </Link>
          </li>
          <li>
            <Link href="/">
             ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
