import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import { toast } from "react-toastify";

export default function ReverseText() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleReverse = () => {
    if (!text.trim()) {
      toast.error("Input text cannot be empty");
      return;
    }
    setResult(text.split("").reverse().join(""));
  };

  return (
    <div>
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." />
      <Button onClick={handleReverse}>Reverse Text</Button>
      <OutputBox value={result} placeholder="Result will appear here..." />
      <CopyToClipboard text={result} />
    </div>
  );
}