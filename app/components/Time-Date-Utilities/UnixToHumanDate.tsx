import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import { toast } from "react-toastify";

export default function UnixToHumanDate() {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");

  const handleConvert = () => {
    const timestampValue = parseInt(timestamp);
    if (isNaN(timestampValue)) {
      toast.error("Invalid timestamp");
      return;
    }
    const dateObj = new Date(timestampValue * 1000);
    const options = { timeZone: "UTC", timeZoneName: "short" }; // Change "UTC" to your desired time zone
    setDate(dateObj.toLocaleString(undefined, options));
  };

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setTimestamp(e.target.result as string);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <InputBox value={timestamp} onChange={(e) => setTimestamp(e.target.value)} placeholder="Enter Unix timestamp here..." />
      <Button onClick={handleConvert}>Convert to Human-Readable Date</Button>
      <OutputBox value={date} placeholder="Date output will appear here..." />
      <CopyToClipboard text={date} />
    </div>
  );
}