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
        className="w-full p-2 border border-gray-300 rounded mb-4"
        rows={5}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div className="flex gap-4 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRemoveWhitespaces}>
          Remove Whitespaces
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleReplaceWhitespaces}>
          Replace Whitespaces with "-"
        </button>
      </div>
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