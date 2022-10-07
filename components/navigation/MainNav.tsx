import Image from "next/image";
import Link from "next/link";
import Logo from "../logo/Logo";
import styles from "./mainnav.module.scss"
export default function MainNav() {
  return (
    <nav className={styles.container}>
      <Logo/>
      <ul>
        <li>
          <Link href="/">
            <a>NECKLACES</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>EARRINGS</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>JEWELRY CARE</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ABOUT</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <button aria-label="search">     
            <Image src="/search.svg" alt="search" width={24} height={24}/>
          </button>
        </li>
        <li>
          <button aria-label="account">     
            <Image src="/account.svg" alt="account" width={24} height={24}/>
          </button>
        </li>
        <li>
          <button aria-label="cart">    
            <Image src="/cart.svg" alt="cart" width={24} height={24}/>
          </button>
        </li>
      </ul>
    </nav>
  )
}
