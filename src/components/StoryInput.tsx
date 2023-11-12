// components/StoryInput.tsx
import React, { useState } from "react";

interface StoryInputProps {
  onTextSubmit: (text: string) => void;
  onImagesSubmit: (images: FileList | null) => void;
}

const StoryInput: React.FC<StoryInputProps> = ({
  onTextSubmit,
  onImagesSubmit,
}) => {
  const [inputType, setInputType] = useState<"text" | "images">("images");
  const [textPrompt, setTextPrompt] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleSubmit = () => {
    if (inputType === "text") {
      onTextSubmit(textPrompt);
    } else {
      onImagesSubmit(selectedFiles);
    }
  };

  return (
    <div className="mt-4">
      <label
        htmlFor="tone"
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        How would you like to generate your story?
      </label>
      <div className="mt-2 flex gap-4">
        <button
          type="button"
          onClick={() => setInputType("images")}
          className={`w-36 rounded-md ${
            inputType === "images" ? "bg-indigo-600" : "bg-gray-800"
          } px-3 py-2 text-sm font-semibold text-white shadow-sm ${
            inputType === "images" ? "hover:bg-indigo-600" : "hover:bg-gray-700"
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          Using Images
        </button>
        <button
          type="button"
          onClick={() => setInputType("text")}
          className={`w-36 rounded-md ${
            inputType === "text" ? "bg-indigo-600" : "bg-gray-800"
          } px-3 py-2 text-sm font-semibold text-white shadow-sm ${
            inputType === "text" ? "hover:bg-indigo-600" : "hover:bg-gray-700"
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          Using Text
        </button>
      </div>
      <div className="mt-4">
        {inputType === "text" ? (
          <div>
            <div className="mt-2">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="bg-gray-800 block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="I want a story about Jupiter's storms, a beauitufl space station, and a terrifying black hole."
                defaultValue={""}
              />
            </div>
          </div>
        ) : (
          <input
            type="file"
            className="bg-gray-800 block w-full rounded-md border-0 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setSelectedFiles(e.target.files)}
            multiple
          />
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="mt-8 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Generate story
        </button>
      </div>
    </div>
  );
};

export default StoryInput;
