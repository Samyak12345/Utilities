import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";
import { toast } from "react-toastify";

export default function TextToBase64() {
  const [text, setText] = useState("");
  const [base64, setBase64] = useState("");

  const handleConvert = () => {
    if (!text.trim()) {
      toast.error("Input text cannot be empty");
      return;
    }
    setBase64(btoa(text));
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
      <InputBox value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text here..." />
      <Button onClick={handleConvert}>Convert to Base64</Button>
      <OutputBox value={base64} placeholder="Base64 output will appear here..." />
      <CopyToClipboard text={base64} />
      <DownloadButton data={base64} filename="output.txt" mimeType="text/plain" />
    </div>
  );
}