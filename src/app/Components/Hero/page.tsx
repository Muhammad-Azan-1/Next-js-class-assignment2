"use client"
import styles from './home.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.main}>
        <div className={styles.text}>
        <h1 className={styles.title}> HI,</h1>
      <h1 className={styles.title}> I AM MUHAMMAD AZAN </h1>
      <h1 className={styles.title}>DEVELOPER FROM PAKISTAN</h1>
      </div>

      <Image 
      className={styles.image} 
      src='https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' 
      alt='pic'
      width='500' height='550'
      >
      </Image>

    </div>
  )
}

export default page