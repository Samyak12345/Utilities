import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";

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
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." />
      <div className="flex gap-4 mb-4 flex-wrap">
        <InputBox value={find} onChange={(e) => setFind(e.target.value)} placeholder="Find..." rows={1} />
        <InputBox value={replace} onChange={(e) => setReplace(e.target.value)} placeholder="Replace with..." rows={1} />
      </div>
      <Button onClick={handleFindReplace}>Find and Replace</Button>
      <OutputBox value={result} placeholder="Result will appear here..." />
    </div>
  );
}