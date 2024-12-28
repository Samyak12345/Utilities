import { useState } from "react";

export default function RemoveReplaceWhitespaces() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleRemoveWhitespaces = () => {
    setResult(text.replace(/\s+/g, ""));
  };

  const handleReplaceWhitespaces = () => {
    setResult(text.replace(/\s+/g, "-"));
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
        <button className="bg-primary-dark text-white px-4 py-2 rounded mb-4 border-none cursor-pointer transition-colors duration-300 hover:bg-primary-light hover:text-primary-dark" onClick={handleRemoveWhitespaces}>
          Remove Whitespaces
        </button>
        <button className="bg-primary-dark text-white px-4 py-2 rounded mb-4 border-none cursor-pointer transition-colors duration-300 hover:bg-primary-light hover:text-primary-dark" onClick={handleReplaceWhitespaces}>
          Replace Whitespaces with "-"
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