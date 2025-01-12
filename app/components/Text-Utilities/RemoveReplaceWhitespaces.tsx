import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";
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
    <div className="flex flex-col items-center">
      <FileUpload onFileSelect={handleFileSelect} />
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your text here..." />
      <div className="flex gap-4 mb-4 flex-wrap">
        <Button onClick={handleRemoveWhitespaces}>Remove Whitespaces</Button>
        <Button onClick={handleReplaceWhitespaces}>Replace Whitespaces with "-"</Button>
      </div>
      <OutputBox value={result} placeholder="Result will appear here..." className="text-center mb-4" />
      <CopyToClipboard text={result} />
      <DownloadButton data={result} filename="output.txt" mimeType="text/plain" />
    </div>
  );
}