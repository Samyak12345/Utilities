import { useState, useEffect } from "react";
import Button from "~/components/common/button";
import OutputBox from "~/components/common/outputBox";

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
    <div>
      <Button onClick={handleGenerate}>Generate Random Color</Button>
      <OutputBox value={color} placeholder="Random color will appear here..." />
      <div style={{ backgroundColor: color, height: "50px", width: "100px", marginTop: "10px" }}></div>
    </div>
  );
}