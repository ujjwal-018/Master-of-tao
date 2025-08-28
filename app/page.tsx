import styles from "./page.module.css";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/footer";
import Institute from "./components/Institute";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <Hero/>
      <div className={styles.spacer}></div>
      <About/>
      <div className={styles.spacer}></div>
      <Institute/>
      <div className={styles.spacer}></div>
      <Contact/>
      <div className={styles.spacer}></div>
      <Header/>
    </div>
  );
}
