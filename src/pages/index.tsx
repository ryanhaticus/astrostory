import React, { useState } from 'react';
import Header from '../components/Header';
import StoryInput from '../components/StoryInput';
import StoryDisplay from '../components/StoryDisplay';
import ToneSelection from '../components/ToneSelection'; // Import the ToneSelection component

const Home = () => {
  const [textPrompt, setTextPrompt] = useState('');
  const [uploadedImages, setUploadedImages] = useState<FileList | null>(null);
  const [selectedTone, setSelectedTone] = useState('');

  const handleTextSubmit = (text: string) => {
    console.log('Text submitted:', text);
    setTextPrompt(text);
  };

  const handleImagesSubmit = (images: FileList | null) => {
    console.log('Images submitted:', images);
    setUploadedImages(images);
  };

  const handleToneSelect = (tone: string) => {
    console.log('Tone selected:', tone);
    setSelectedTone(tone);
  };

  return (
    <>
      <Header 
        title="AstroClassify" 
        subtitle="Embark on a journey through the cosmos and create your own space tales."
      />

      {/* Integrate the ToneSelection component */}
      <ToneSelection onToneSelect={handleToneSelect} />

      <StoryInput 
        onTextSubmit={handleTextSubmit} 
        onImagesSubmit={handleImagesSubmit} 
      />
      <StoryDisplay 
        textPrompt={textPrompt} 
        uploadedImages={uploadedImages} 
        selectedTone={selectedTone} // Pass the selected tone to StoryDisplay
      />
    </>
  );
};

export default Home;
