import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
       <div className= {styles['home-left']}>
      <div className={styles['left-content']}>
      <h1 className={styles.heading}>Flashcards for CDAC students</h1>
        <p>
          CDAC Flashcards is an interactive study tool with pre-built and<br/>
           custom flashcards.Go digital, reduce your carbon footprint,<br/>
            and study sustainably for the CDAC Examination

          </p>
          <div className={styles.buttons}>
          <Link href="/register" className={styles.btn}>
          <button className={styles.button}>Register</button>
        </Link>
        
          </div>
      </div>
      </div>

      <div className={styles['home-right']}>

      </div>
       </div>
       
      <Footer />
    </>
  );
}
