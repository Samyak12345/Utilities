import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";
import { toast } from "react-toastify";

export default function MinifyJson() {
  const [json, setJson] = useState("");
  const [minifiedJson, setMinifiedJson] = useState("");

  const handleMinify = () => {
    try {
      const jsonObject = JSON.parse(json);
      setMinifiedJson(JSON.stringify(jsonObject));
    } catch (error) {
      toast.error("Invalid JSON");
    }
  };

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setJson(e.target.result as string);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <FileUpload onFileSelect={handleFileSelect} />
      <InputBox value={json} onChange={(e) => setJson(e.target.value)} placeholder="Enter JSON here..." />
      <Button onClick={handleMinify}>Minify JSON</Button>
      <OutputBox value={minifiedJson} placeholder="Minified JSON will appear here..." />
      <CopyToClipboard text={minifiedJson} />
      <DownloadButton data={minifiedJson} filename="minified.json" mimeType="application/json" />
    </div>
  );
}