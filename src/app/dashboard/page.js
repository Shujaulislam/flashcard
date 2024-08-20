import { auth } from "@clerk/nextjs";
import { decks } from '../../data/decks';
import styles from './dashboard.module.css';

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    return <div>Please sign in to view the deck.</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> PG Diploma In Advanced Computing (PG-DAC)</h1>
      <h2 className={styles['title-content']}>PG-DAC is the most popular PG Diploma course of C-DAC.
        The course is targeted towards Engineering Graduates and
         MCA/MSc who wish to venture into the domain of advanced computing.
          The course aims to groom the students to enable them to work on
           current technology scenarios as well as prepare them to keep pace
            with the changing face of technology and the requirements of the
             growing IT industry. The entire course syllabus, courseware, teaching
              methodology and the course delivery have been derived from the rich
               research and development background of C-DAC.</h2>
      <div className={styles.grid}>
        {decks.map(deck => (
          <div 
            key={deck.id} 
            className={styles.card}
          >
            <h2 className={styles['card-title']}>{deck.title}</h2>
            {deck.description && <p className={styles['card-description']}>{deck.description}</p>}
            <a 
              href={`/decks/${deck.id}`} 
              className={styles['card-link']}
            >
              Start Deck
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
