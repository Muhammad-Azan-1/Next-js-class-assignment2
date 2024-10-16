import styles from './page.module.css'

import Header from '../Components/Header/page'
import Footer from '../Components/Footer/page'

const AboutUs = () => {
  return (
<>
    <Header />
    <div className={styles.aboutUsContainer}>
      <h1 className={styles.aboutUsTitle}>About Us</h1>
      <p className={styles.aboutUsDescription}>
        We are a dedicated team passionate about delivering innovative solutions tailored to your needs. 
        Our focus is on quality, reliability, and customer satisfaction.
      </p>
    </div>
   
    <Footer />
    </>
  );
};

export default AboutUs;
