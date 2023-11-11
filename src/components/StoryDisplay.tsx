// components/StoryDisplay.tsx
import React from 'react';

interface StoryDisplayProps {
    textPrompt: string;
    uploadedImages: FileList | null;
  }

const StoryDisplay: React.FC<StoryDisplayProps> = ({ textPrompt, uploadedImages }) => {
  // If there's no story, you can return null or some default UI
  if (!textPrompt) {
    return <div className="text-center text-gray-500">No story to display. Please generate one.</div>;
  }

  // If there is a story, display it
  return (
    <div className="story-display-container">
      {/* Render text prompt */}
      <div className="text-prompt">{textPrompt}</div>

      {/* Render uploaded images if any */}
      {uploadedImages && (
        <div className="uploaded-images">
          {/* Render images */}
        </div>
      )}
    </div>
  );
};

export default StoryDisplay;
