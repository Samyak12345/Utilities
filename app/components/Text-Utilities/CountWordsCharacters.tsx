import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";

export default function CountWordsCharacters() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const handleCount = () => {
    setWordCount(text.trim().split(/\s+/).length);
    setCharCount(text.length);
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
      <Button onClick={handleCount}>Count Words and Characters</Button>
      <div className="mb-4">
        <p>Word Count: {wordCount}</p>
        <p>Character Count: {charCount}</p>
      </div>
      <DownloadButton data={`Word Count: ${wordCount}\nCharacter Count: ${charCount}`} filename="count.txt" mimeType="text/plain" />
    </div>
  );
}