import Image from "next/image";
import styles from "./page.module.css";
import Header from './Components/Header/page';
import Footer from './Components/Footer/page';
import Hero from './Components/Hero/page';




export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Footer/>
    
    </>
  );
}
