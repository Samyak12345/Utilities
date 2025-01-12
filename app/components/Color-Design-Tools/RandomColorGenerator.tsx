import { useState, useEffect } from "react";
import Button from "~/components/common/button";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";

export default function RandomColorGenerator() {
  const [color, setColor] = useState("");

  const handleGenerate = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  useEffect(() => {
    handleGenerate();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Button onClick={handleGenerate} className="mb-4">
        Generate Random Color
      </Button>
      <OutputBox value={color} placeholder="Random color will appear here..." className="text-center mb-4" />
      <div style={{ backgroundColor: color, height: "100px", width: "100px", marginTop: "10px", borderRadius: "8px" }}></div>
      <div className="mt-4">
        <CopyToClipboard text={color} />
      </div>
    </div>
  );
}