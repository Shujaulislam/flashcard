"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { decks } from '../../../data/decks';
import FlipCard from '@/components/flashcard';

export default function DeckPage({ params }) {
  const router = useRouter();
  const { id } = params;
  const deck = decks.find(deck => deck.id === id);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [noAnimation, setNoAnimation] = useState(false);

  if (!deck) {
    return <div>Deck not found</div>;
  }

  const handleSwipe = (direction) => {
    setNoAnimation(true);
    if (direction === 'right' && currentCardIndex < deck.cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else if (direction === 'left' && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
    setIsFlipped(false); // Reset flip state on swipe
    console.log(`Swiped ${direction}`);
    setTimeout(() => setNoAnimation(false), 0); // Re-enable animation after state update
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="deck-page text-center p-5">
      <h1 className="text-2xl mb-2">{deck.name}</h1>
      <h2 className="text-xl mb-5">Topic: {deck.topic}</h2>
      <div className="progress-indicator text-lg mb-5">
        Card {currentCardIndex + 1} of {deck.cards.length}
      </div>
      <div className="card-container inline-block cursor-pointer mb-5" onClick={handleCardClick}>
        <FlipCard card={deck.cards[currentCardIndex]} isFlipped={isFlipped} noAnimation={noAnimation} />
      </div>
      <div className="navigation-buttons flex justify-center gap-2">
        <button 
          className="nav-button px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors" 
          onClick={() => handleSwipe('left')} 
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>
        <button 
          className="nav-button px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors" 
          onClick={() => handleSwipe('right')} 
          disabled={currentCardIndex === deck.cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}