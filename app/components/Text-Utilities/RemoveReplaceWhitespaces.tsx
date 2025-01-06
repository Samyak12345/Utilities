import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import { toast } from "react-toastify";

export default function RemoveReplaceWhitespaces() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleRemoveWhitespaces = () => {
    if (!text.trim()) {
      toast.error("Input text cannot be empty");
      return;
    }
    setResult(text.replace(/\s+/g, ""));
  };

  const handleReplaceWhitespaces = () => {
    if (!text.trim()) {
      toast.error("Input text cannot be empty");
      return;
    }
    setResult(text.replace(/\s+/g, "-"));
  };

  return (
    <div>
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." />
      <div className="flex gap-4 mb-4 flex-wrap">
        <Button onClick={handleRemoveWhitespaces}>Remove Whitespaces</Button>
        <Button onClick={handleReplaceWhitespaces}>Replace Whitespaces with "-"</Button>
      </div>
      <OutputBox value={result} placeholder="Result will appear here..." />
      <CopyToClipboard text={result} />
    </div>
  );
}