import Link from "next/link"
import styles from "./button.module.scss"
export default function LinkButton({text, background, link}:{text:string, background:string, link:string}) {
  return (
    <Link href={link}>
      <button  className={styles.button} aria-label="Shop now" style={{backgroundColor: `${background}`}}>
        <span>{text}</span>
        <div>
          <svg width="45" height="9" viewBox="0 0 45 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.2108 4.85355C44.406 4.65829 44.406 4.34171 44.2108 4.14645L41.0288 0.964466C40.8335 0.769204 40.5169 0.769204 40.3217 0.964466C40.1264 1.15973 40.1264 1.47631 40.3217 1.67157L43.1501 4.5L40.3217 7.32843C40.1264 7.52369 40.1264 7.84027 40.3217 8.03553C40.5169 8.2308 40.8335 8.2308 41.0288 8.03553L44.2108 4.85355ZM0.81073 5H43.8572V4H0.81073V5Z" fill="black"/>
          </svg>
        </div>    
      </button></Link>
  )
}
