// import Footer from "@/components/footer/footer";
// import Navbar from "@/components/navbar/navbar";

// export default function Home() {
//   return (
//    <>
//    <Navbar/>
//      <div className="flex flex-col items-center justify-center h-screen">
    
//       <h1 className="text-4xl font-bold mb-4">Flashcards for CDAC students</h1>
//       <a href="/login" className="text-blue-500 mb-2">Login</a>
//       <a href="/dashboard" className="text-blue-500">Go to Prebuild Cards</a>
          
//     </div>
//     <Footer/>
//    </>
//   );
// }



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
          <Link href="/signup" className={styles.btn}>
          <button className={styles.button}>Signup</button>
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
