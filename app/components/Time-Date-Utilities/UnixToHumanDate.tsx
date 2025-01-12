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

  return (
    <div className="flex flex-col items-center">
      <InputBox value={timestamp} onChange={(e) => setTimestamp(e.target.value)} placeholder="Enter Unix timestamp here..." />
      <Button onClick={handleConvert} className="mb-4">
        Convert to Human-Readable Date
      </Button>
      <OutputBox value={date} placeholder="Date output will appear here..." className="text-center mb-4" />
      <CopyToClipboard text={date} />
    </div>
  );
}