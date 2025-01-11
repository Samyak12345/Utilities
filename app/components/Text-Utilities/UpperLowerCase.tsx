import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";
import { toast } from "react-toastify";

export default function UpperLowerCase() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleUppercase = () => {
    if (!text.trim()) {
      toast.error("Input text cannot be empty");
      return;
    }
    setResult(text.toUpperCase());
  };

  const handleLowercase = () => {
    if (!text.trim()) {
      toast.error("Input text cannot be empty");
      return;
    }
    setResult(text.toLowerCase());
  };

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setText(e.target.result as string);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <FileUpload onFileSelect={handleFileSelect} />
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." />
      <div className="flex gap-4 mb-4 flex-wrap">
        <Button onClick={handleUppercase}>Convert to Uppercase</Button>
        <Button onClick={handleLowercase}>Convert to Lowercase</Button>
      </div>
      <OutputBox value={result} placeholder="Result will appear here..." />
      <CopyToClipboard text={result} />
      <DownloadButton data={result} filename="output.txt" mimeType="text/plain" />
    </div>
  );
}