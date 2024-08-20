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
    <div className="deck-page text-center bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen flex flex-col justify-center items-center p-5">
      <h1 className="text-4xl mb-4 font-bold text-gray-800 shadow-md">{deck.name}</h1>
      <h2 className="text-2xl text-gray-700 mb-5">Topic: {deck.topic}</h2>
      <div className="progress-indicator text-gray-600 text-lg mb-5">
        Card {currentCardIndex + 1} of {deck.cards.length}
      </div>
      <div
        className="card-container inline-block cursor-pointer mb-5 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg border border-white border-opacity-30 transition-transform transform hover:scale-105"
        onClick={handleCardClick}
      >
        <FlipCard card={deck.cards[currentCardIndex]} isFlipped={isFlipped} noAnimation={noAnimation} />
      </div>
      <div className="navigation-buttons flex justify-center gap-4">
        <button
          className="nav-button px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={() => handleSwipe('left')}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>
        <button
          className="nav-button px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={() => handleSwipe('right')}
          disabled={currentCardIndex === deck.cards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
