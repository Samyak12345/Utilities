import { useState } from "react";

export default function FindReplaceText() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [result, setResult] = useState("");

  const handleFindReplace = () => {
    setResult(text.replace(new RegExp(find, "g"), replace));
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
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4 resize-y flex-1 mb-0"
          value={find}
          onChange={(e) => setFind(e.target.value)}
          placeholder="Find..."
        />
        <input
          className="w-full p-2 border border-gray-300 rounded mb-4 resize-y flex-1 mb-0"
          value={replace}
          onChange={(e) => setReplace(e.target.value)}
          placeholder="Replace with..."
        />
      </div>
      <button className="bg-primary-dark text-white px-4 py-2 rounded mb-4 border-none cursor-pointer transition-colors duration-300 hover:bg-primary-light hover:text-primary-dark" onClick={handleFindReplace}>
        Find and Replace
      </button>
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