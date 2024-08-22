"use client"; // This ensures the component is treated as a client component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import axios from 'axios';
export default function CustomCardPage() {
  const { user } = useUser();
  const [decks, setDecks] = useState([]);
  const [newDeckTitle, setNewDeckTitle] = useState('');
  const [newCards, setNewCards] = useState([{ front: '', back: '' }]);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/sign-in'); // Redirect to sign-in if not logged in
      return;
    }
  
  }, []);

  const handleAddCard = () => {
    setNewCards([...newCards, { front: '', back: '' }]);
  };

  const handleCardChange = (index, field, value) => {
    const updatedCards = [...newCards];
    updatedCards[index][field] = value;
    setNewCards(updatedCards);
  };

  const handleSubmit = () => {
    if (!user) return;
  
    const data = {
      title: newDeckTitle,
      cards: newCards
    };
  
    axios.post('/api/userdecks', data)
      .then(response => {
        setDecks([...decks, response.data]);
        setNewDeckTitle('');
        setNewCards([{ front: '', back: '' }]);
        console.log("the new deck installed", decks);
      })
      .catch(error => {
        console.error('Error saving deck:', error);
      });
  };
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl mb-6">Your Custom Decks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {decks.map(deck => (
          <div key={deck.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{deck.title}</h3>
            <Link href={`/decks/${deck.id}`} className="text-indigo-600 hover:text-indigo-800">
              View Deck
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl mb-4">Add a New Deck</h2>
        <input
          type="text"
          placeholder="Deck Title"
          value={newDeckTitle}
          onChange={(e) => setNewDeckTitle(e.target.value)}
          className="border p-2 mb-4"
        />
        <h3 className="text-xl mb-2">Cards</h3>
        {newCards.map((card, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              placeholder="Front"
              value={card.front}
              onChange={(e) => handleCardChange(index, 'front', e.target.value)}
              className="border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Back"
              value={card.back}
              onChange={(e) => handleCardChange(index, 'back', e.target.value)}
              className="border p-2"
            />
          </div>
        ))}
        <button onClick={handleAddCard} className="bg-blue-500 text-white p-2 rounded">
          Add Another Card
        </button>
        <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded ml-4">
          Submit Deck
        </button>
      </div>
    </div>
  );
}
