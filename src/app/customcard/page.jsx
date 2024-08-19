'use client';

import React, { useState } from 'react';
import FlipCard from '../../components/flashcard';

export default function CustomCardPage() {
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [previewCard, setPreviewCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCreateCard = () => {
    const newCard = {
      front: frontText,
      back: backText,
    };
    setPreviewCard(newCard);
    console.log('Card created:', newCard);
  };    

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Create Flashcard</h1>
        
        <div className="mb-6">
          <label htmlFor="frontText" className="block mb-2 text-sm font-medium text-gray-600">Front of the card</label>
          <textarea
            id="frontText"
            value={frontText}
            onChange={(e) => setFrontText(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            rows="3"
            placeholder="Enter front text..."
          />
        </div>

        <div className="mb-6">
          <label htmlFor="backText" className="block mb-2 text-sm font-medium text-gray-600">Back of the card</label>
          <textarea
            id="backText"
            value={backText}
            onChange={(e) => setBackText(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
            rows="3"
            placeholder="Enter back text..."
          />
        </div>

        <button
          onClick={handleCreateCard}
          className="w-full bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Create Card
        </button>

        {previewCard && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Preview</h2>
            <div onClick={() => setIsFlipped(!isFlipped)} className="cursor-pointer">
              <FlipCard card={previewCard} isFlipped={isFlipped} noAnimation={false} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}