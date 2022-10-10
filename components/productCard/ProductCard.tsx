import Image from "next/image"
import Link from "next/link"
import styles from "./productcard.module.scss"
interface iProps {
  description: string
  link: string
  price: string,
  image1: string,
  image2: string
}
export default function ProductCard({image1, image2, description, link, price}:iProps) {
  return (
    <li className={styles.card} role="listitem">
      
      <div className={styles.header}>
        <Image src={image1} alt="" layout="fill" objectFit="cover" objectPosition="top"/>
      </div>
      <div className={styles.header}>        
        <Image src={image2} alt="" layout="fill" objectFit="cover" objectPosition="top"/>
      </div> 
      
      <div className={styles.content}>
        <small>
          <Link href={link}>
            <a className={styles.action}>{description}</a>
          </Link>
        </small>
        <small>{price}</small>
      </div>  
    </li>
  )
}
