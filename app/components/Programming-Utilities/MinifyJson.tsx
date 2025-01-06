import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
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

  return (
    <div>
      <InputBox value={json} onChange={(e) => setJson(e.target.value)} placeholder="Enter JSON here..." />
      <Button onClick={handleMinify}>Minify JSON</Button>
      <OutputBox value={minifiedJson} placeholder="Minified JSON will appear here..." />
      <CopyToClipboard text={minifiedJson} />
    </div>
  );
}