import Image from "next/image"
import Link from "next/link"
import styles from "./productcard.module.scss"
interface iProps {
  title: string
  link: string
  price: string,
  image: string,
}
export default function ProductCard({title, image, link, price}:iProps) {
  return (
    <li className={styles.card} role="listitem">
      
      <div className={styles.header}>
        <Image src={image} alt="" layout="fill" objectFit="cover" objectPosition="center"/>
      </div>
      <div className={styles.header}>        
        <Image src={image} alt="" layout="fill" objectFit="cover" objectPosition="center"/>
      </div> 
      
      <div className={styles.content}>
        <small>
          <Link href={link}>
            <a className={styles.action}>{title}</a>
          </Link>
        </small>
        <small>Ksh. {price}</small>
      </div>  
    </li>
  )
}
