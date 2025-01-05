import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";

export default function UnixToHumanDate() {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");

  const handleConvert = () => {
    const dateObj = new Date(parseInt(timestamp) * 1000);
    const options = { timeZone: "UTC", timeZoneName: "short" }; // Change "UTC" to your desired time zone
    setDate(dateObj.toLocaleString(undefined, options));
  };

  return (
    <div>
      <InputBox value={timestamp} onChange={(e) => setTimestamp(e.target.value)} placeholder="Enter Unix timestamp here..." />
      <Button onClick={handleConvert}>Convert to Human-Readable Date</Button>
      <OutputBox value={date} placeholder="Date output will appear here..." />
    </div>
  );
}