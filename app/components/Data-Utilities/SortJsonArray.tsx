import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
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

  return (
    <div>
      <InputBox value={json} onChange={(e) => setJson(e.target.value)} placeholder="Enter JSON array here..." />
      <Button onClick={handleSort}>Sort JSON Array</Button>
      <OutputBox value={sortedJson} placeholder="Sorted JSON will appear here..." />
      <CopyToClipboard text={sortedJson} />
    </div>
  );
}