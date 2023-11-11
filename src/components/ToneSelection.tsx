// components/ToneSelection.tsx
import React, { useState } from 'react';

interface ToneSelectionProps {
  onToneSelect: (tone: string) => void;
}

const tones = [
  'Dark Sci-Fi',
  'Cosmic Comedy',
  'Epic Adventure',
  'Romantic Space Opera',
  'Cosmic Horror',
  'Space Fantasy',
  'Time Travel Paradox',
];

const ToneSelection: React.FC<ToneSelectionProps> = ({ onToneSelect }) => {
  const [selectedTone, setSelectedTone] = useState(tones[0]);

  return (
    <div className="my-8">
      <label htmlFor="tone-select" className="block text-sm font-medium text-gray-700">Choose a tone for your story:</label>
      <select
        id="tone-select"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        value={selectedTone}
        onChange={(e) => {
          const tone = e.target.value;
          setSelectedTone(tone);
          onToneSelect(tone);
        }}
      >
        {tones.map((tone, index) => (
          <option key={index} value={tone}>
            {tone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ToneSelection;
