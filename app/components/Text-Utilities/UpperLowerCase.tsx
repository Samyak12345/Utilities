import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";

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
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." />
      <div className="flex gap-4 mb-4 flex-wrap">
        <Button onClick={handleUppercase}>Convert to Uppercase</Button>
        <Button onClick={handleLowercase}>Convert to Lowercase</Button>
      </div>
      <OutputBox value={result} placeholder="Result will appear here..." />
    </div>
  );
}