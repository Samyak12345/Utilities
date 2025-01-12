import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";
import { toast } from "react-toastify";

export default function FindReplaceText() {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [result, setResult] = useState("");

  const handleFindReplace = () => {
    if (!find) {
      toast.error("Find text cannot be empty");
      return;
    }
    setResult(text.replace(new RegExp(find, "g"), replace));
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
        <InputBox value={find} onChange={(e) => setFind(e.target.value)} placeholder="Find..." rows={1} />
        <InputBox value={replace} onChange={(e) => setReplace(e.target.value)} placeholder="Replace with..." rows={1} />
      </div>
      <Button onClick={handleFindReplace} className="mb-4">
        Find and Replace
      </Button>
      <OutputBox value={result} placeholder="Result will appear here..." className="text-center mb-4" />
      <CopyToClipboard text={result} />
      <DownloadButton data={result} filename="output.txt" mimeType="text/plain" />
    </div>
  );
}