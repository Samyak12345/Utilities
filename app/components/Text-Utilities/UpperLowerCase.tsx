import { useState } from "react";

export default function UpperLowerCase() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleUppercase = () => {
    setResult(text.toUpperCase());
  };

  const handleLowercase = () => {
    setResult(text.toLowerCase());
  };

  return (
    <div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4 resize-y"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div className="flex gap-4 mb-4 flex-wrap">
        <button className="bg-primary-dark text-white px-4 py-2 rounded mb-4 border-none cursor-pointer transition-colors duration-300 hover:bg-primary-light hover:text-primary-dark" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="bg-primary-dark text-white px-4 py-2 rounded mb-4 border-none cursor-pointer transition-colors duration-300 hover:bg-primary-light hover:text-primary-dark" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
      </div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4 resize-y"
        rows={5}
        value={result}
        readOnly
        placeholder="Result will appear here..."
      />
    </div>
  );
}