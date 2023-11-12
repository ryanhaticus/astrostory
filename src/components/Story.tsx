import React, { useState } from "react";

interface StoryInputProps {
  story: {
    image: string;
    text: string;
  }[];
}

const Story: React.FC<StoryInputProps> = ({ story }) => {
  if (!story) {
    return null;
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        {story.map((story, index) => (
          <div
            key={index}
            className="rounded-xl w-full flex flex-col md:flex-row gap-4 rounded-md bg-gray-800 p-4 text-sm font-semibold text-white shadow-sm"
          >
            <img className="rounded-xl w-64" src={story.image} />
            <p className="text-lg">{story.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
