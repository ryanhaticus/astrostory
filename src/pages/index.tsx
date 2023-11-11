// pages/index.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import StoryInput from '../components/StoryInput';
import StoryDisplay from '../components/StoryDisplay';

const Home = () => {
  // State for storing the text prompt
  const [textPrompt, setTextPrompt] = useState('');

  // State for storing the uploaded images
  const [uploadedImages, setUploadedImages] = useState<FileList | null>(null);

  // Handler for when the user submits a text prompt
  const handleTextSubmit = (text: string) => {
    console.log('Text submitted:', text);
    setTextPrompt(text);
  };

  // Handler for when the user submits images
  const handleImagesSubmit = (images: FileList | null) => {
    console.log('Images submitted:', images);
    setUploadedImages(images);
  };

  return (
    <>
      <Header 
        title="AstroClassify" 
        subtitle="Embark on a journey through the cosmos and create your own space tales."
      />
      <StoryInput 
        onTextSubmit={handleTextSubmit} 
        onImagesSubmit={handleImagesSubmit} 
      />
      <StoryDisplay 
        textPrompt={textPrompt} 
        uploadedImages={uploadedImages} 
      />
    </>
  );
};

export default Home;
