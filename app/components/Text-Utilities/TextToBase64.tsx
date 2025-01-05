import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";

export default function TextToBase64() {
  const [text, setText] = useState("");
  const [base64, setBase64] = useState("");

  const handleConvert = () => {
    setBase64(btoa(text));
  };

  return (
    <div>
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text here..." />
      <Button onClick={handleConvert}>Convert to Base64</Button>
      <OutputBox value={base64} placeholder="Base64 output will appear here..." />
    </div>
  );
}