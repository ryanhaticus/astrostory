// components/StoryInput.tsx
import React, { useState } from 'react';

interface StoryInputProps {
  onTextSubmit: (text: string) => void;
  onImagesSubmit: (images: FileList | null) => void;
}

const StoryInput: React.FC<StoryInputProps> = ({ onTextSubmit, onImagesSubmit }) => {
  const [inputType, setInputType] = useState<'text' | 'image'>('text');
  const [textPrompt, setTextPrompt] = useState('');
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleSubmit = () => {
    if (inputType === 'text') {
      onTextSubmit(textPrompt);
    } else {
      onImagesSubmit(selectedFiles);
    }
  };

  return (
    <div className="my-8">
      <div className="flex justify-center gap-4">
        <button
          className={`px-4 py-2 rounded ${inputType === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setInputType('text')}
        >
          Text Prompt
        </button>
        <button
          className={`px-4 py-2 rounded ${inputType === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setInputType('image')}
        >
          Upload Image
        </button>
      </div>
      <div className="mt-4">
        {inputType === 'text' ? (
          <textarea
            className="border-2 border-gray-300 rounded p-2 w-full"
            placeholder="Enter your space story prompt here..."
            value={textPrompt}
            onChange={(e) => setTextPrompt(e.target.value)}
          ></textarea>
        ) : (
          <input
            type="file"
            className="border-2 border-gray-300 rounded p-2 w-full"
            onChange={(e) => setSelectedFiles(e.target.files)}
            multiple
          />
        )}
        <button
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          onClick={handleSubmit}
        >
          Generate Story
        </button>
      </div>
    </div>
  );
};

export default StoryInput;
