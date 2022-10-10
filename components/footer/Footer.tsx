import Image from "next/image"
import Link from "next/link"
import Logo from "../logo/Logo"
import styles from "./footer.module.scss"
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        
        <Logo/>
        <ul role="list">
          <li>
            <Link href="/">
              <a>Help</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Privacy & Terms</a>
            </Link>
          </li>
        </ul>
        <div>
          <a href="/">
            <Image src="/facebook.svg" alt="" width={20} height={20}/>
          </a>    
          <a href="/"> 
            <Image src="/twitter.svg" alt="" width={20} height={20}/></a>   
          <a href="/"> 
            <Image src="/instagram.svg" alt="" width={20} height={20}/>
          </a>   
        </div>
      </footer>
    </>
  )
}
