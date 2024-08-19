import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      
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

{/* --------------------------------------------------------------------------------------- */}

 {/* Second Header Section */}
 <section className={styles.secondHeader}>
        <div className={styles.container2}>
          <h2 className={styles.containerTitle}>Key Features</h2>
          <div className={styles.cardContainer}>

            <div className={styles.card}>
              <Link href="/dashboard">
                <i className={`fa-solid fa-star ${styles.icon}`}></i>
              </Link>
              <h2>Favourite Cards</h2>
              <p>
                Your most cherished flashcards, handpicked and readily available. Keep your top study aids just a click away, so you can quickly review the content that matters most to you.
              </p>
              <Link href="/dashboard" className={styles.learnMore}>Learn More</Link>
            </div>

            <div className={styles.card}>
              <Link href="">
                <i className={`fa-solid fa-box-archive ${styles.icon}`}></i>
              </Link>
              <h2>Archived Sets</h2>
              <p>
                Store and organize your flashcards for future use. Whether you’ve mastered them or just want to keep them handy, your archived sets are safely stashed away, ready for when you need them.
              </p>
              <Link href="/customcard" className={styles.learnMore}>Learn More</Link>
            </div>

          </div>
        </div>
      </section>

      {/* Third Header Section */}
      <section className={styles.thirdHeader}>
        <div className={styles.container2}>
          <h2 className={styles.containerTitle}>Our Vision</h2>
          <div className={styles.cardContainer}>

            <div className={styles.card}>
              <Link href="/power-up-learning">
                <i className={`fa-solid fa-lightbulb ${styles.icon}`}></i>
              </Link>
              <h2>Power Up Your Learning</h2>
              <p>
                Research shows that digital flashcards supercharge retention and performance, making your CDAC CCEE exam prep more effective than ever.
              </p>
            </div>

            <div className={styles.card}>
              <Link href="/study-smart">
                <i className={`fa-solid fa-laptop ${styles.icon}`}></i>
              </Link>
              <h2>Study Smart, Anytime, Anywhere</h2>
              <p>
                Students love the convenience of digital flashcards. Our platform is designed to keep you engaged and on track, wherever you are.
              </p>

            </div>

            <div className={styles.card}>
              <Link href="/go-green">
                <i className={`fa-solid fa-seedling ${styles.icon}`}></i>
              </Link>
              <h2>Go Green, Study Clean</h2>
              <p>
                Ditch the paper and embrace sustainability. Our digital flashcards offer an eco-friendly way to master your studies without harming the environment.
              </p>

            </div>

          </div>
        </div>
      </section>


    </>
  );
}
