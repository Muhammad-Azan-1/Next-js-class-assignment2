
import styles from './page.module.css'


const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.footerContent}>
        <p className={styles.p}>&copy; 2024 Your Company Name. All rights reserved.</p>
    <ul className={styles.footerlinks}>
      <li><a href="/privacy-policy">Privacy Policy</a></li>
      <li><a href="/terms-of-service">Terms of Service</a></li>
      <li><a href="/contact">Contact Us</a></li>
    </ul>
    </div>
    </div>
  )
}

export default page