import React, { useState } from "react";

interface StoryInputProps {
  onTextSubmit: (text: string) => void;
  onImagesSubmit: (images: FileList | null) => void;
  generating: boolean;
}

const StoryInput: React.FC<StoryInputProps> = ({
  onTextSubmit,
  onImagesSubmit,
  generating,
}) => {
  const [inputType, setInputType] = useState<"text" | "images">("images");
  const [textPrompt, setTextPrompt] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleSubmit = () => {
    if (generating) {
      return;
    }

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
                placeholder="I want a story about Jupiter's storms, a beautiful space station, and a terrifying black hole."
                defaultValue={""}
                onChange={(e) => setTextPrompt(e.target.value)}
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
          disabled={generating}
          className={`flex mt-8 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm ${
            generating ? "cursor-not-allowed" : "hover:bg-indigo-500"
          } focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          Generate story
          {generating ? (
            <svg
              className="animate-spin -ml-1 ml-2 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
        </button>
        <span className="mt-2 block text-sm font-medium leading-6 text-gray-300">
          It can take up to 1 minute to generate your full story!
        </span>
      </div>
    </div>
  );
};

export default StoryInput;
