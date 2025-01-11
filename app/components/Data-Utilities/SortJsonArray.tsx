import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";
import { toast } from "react-toastify";

export default function SortJsonArray() {
  const [json, setJson] = useState("");
  const [sortedJson, setSortedJson] = useState("");

  const handleSort = () => {
    try {
      const jsonArray = JSON.parse(json);
      const sortedArray = jsonArray.sort((a: any, b: any) => (a.name > b.name ? 1 : -1));
      setSortedJson(JSON.stringify(sortedArray, null, 2));
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
      <InputBox value={json} onChange={(e) => setJson(e.target.value)} placeholder="Enter JSON array here..." />
      <Button onClick={handleSort}>Sort JSON Array</Button>
      <OutputBox value={sortedJson} placeholder="Sorted JSON will appear here..." />
      <CopyToClipboard text={sortedJson} />
      <DownloadButton data={sortedJson} filename="sorted.json" mimeType="application/json" />
    </div>
  );
}