import { useState } from "react";

export default function ReverseText() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleReverse = () => {
    setResult(text.split("").reverse().join(""));
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
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4" onClick={handleReverse}>
        Reverse Text
      </button>
      <textarea
        className="w-full p-2 border border-gray-300 rounded"
        rows={5}
        value={result}
        readOnly
        placeholder="Result will appear here..."
      />
    </div>
  );
}