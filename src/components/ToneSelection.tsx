import React, { useState } from "react";

interface ToneSelectionProps {
  onToneSelect: (tone: string) => void;
}

const tones = [
  "Dark Sci-Fi",
  "Cosmic Comedy",
  "Epic Adventure",
  "Romantic Space Opera",
  "Cosmic Horror",
  "Space Fantasy",
  "Time Travel Paradox",
];

const ToneSelection: React.FC<ToneSelectionProps> = ({ onToneSelect }) => {
  return (
    <div className="mt-8">
      <label
        htmlFor="tone"
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        Tone
      </label>
      <select
        id="tone"
        name="tone"
        className="bg-gray-800 text-white mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-gray-700 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue={tones[0]}
        onSelect={(e) => onToneSelect(e.currentTarget.value)}
      >
        {tones.map((tone) => (
          <option key={tone}>{tone}</option>
        ))}
      </select>
    </div>
  );
};

export default ToneSelection;
