import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";

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
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." />
      <Button onClick={handleCount}>Count Words and Characters</Button>
      <div className="mb-4">
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
    </div>
  );
}