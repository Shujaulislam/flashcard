// src/app/dashboard/page.js
// import { decks } from '../../data/decks';

// export default function Dashboard() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Your Flashcard Decks</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {decks.map(deck => (
//           <div 
//             key={deck.id} 
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <h2 className="text-xl text-black font-semibold mb-2">{deck.title}</h2>
//             {deck.description && <p className="text-gray-700 mb-4">{deck.description}</p>}
//             <a 
//               href={`/decks/${deck.id}`} 
//               className="inline-block px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors"
//             >
//               Start Deck
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





// import { decks } from '../../data/decks';
// import styles from './dashboard.module.css';

// export default function Dashboard() {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Prebuild Flashcard </h1>
//       <div className={styles.grid}>
//         {decks.map(deck => (
//           <div 
//             key={deck.id} 
//             className={styles.card}
//           >
//             <h2 className={styles['card-title']}>{deck.title}</h2>
//             {deck.description && <p className={styles['card-description']}>{deck.description}</p>}
//             <a 
//               href={`/decks/${deck.id}`} 
//               className={styles['card-link']}
//             >
//               Start Deck
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import Navbar from '@/components/navbar/navbar';
import { decks } from '../../data/decks';
import styles from './dashboard.module.css';
import Footer from '@/components/footer/footer';

export default function Dashboard() {
  return (
    <>
    <Navbar/>
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
            {/* Add image before the title */}
            {/* <img src={deck.image} alt={deck.title} className={styles['card-image']} /> */}
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
    <Footer/>
    </>
  );
}
