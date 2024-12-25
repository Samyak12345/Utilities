import { useState } from "react";

export default function CountWordsCharacters() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleCount = () => {
    setWordCount(text.trim().split(/\s+/).length);
    setCharCount(text.length);
  };

  return (
    <div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleCount}>
        Count Words and Characters
      </button>
      <div className="mb-4">
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
    </div>
  );
}