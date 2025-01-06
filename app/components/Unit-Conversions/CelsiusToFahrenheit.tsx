import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import { toast } from "react-toastify";

export default function CelsiusToFahrenheit() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleConvert = () => {
    const celsiusValue = parseFloat(celsius);
    if (isNaN(celsiusValue)) {
      toast.error("Invalid input");
      return;
    }
    setFahrenheit(((celsiusValue * 9) / 5 + 32).toFixed(2));
  };

  return (
    <div>
      <InputBox value={celsius} onChange={(e) => setCelsius(e.target.value)} placeholder="Enter Celsius here..." />
      <Button onClick={handleConvert}>Convert to Fahrenheit</Button>
      <OutputBox value={fahrenheit} placeholder="Fahrenheit output will appear here..." />
      <CopyToClipboard text={fahrenheit} />
    </div>
  );
}