import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";

export default function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
      setResult("Invalid input");
      return;
    }
    const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
    setResult(factorial(num).toString());
  };

  return (
    <div>
      <InputBox value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter a number here..." />
      <Button onClick={handleCalculate}>Calculate Factorial</Button>
      <OutputBox value={result} placeholder="Factorial result will appear here..." />
    </div>
  );
}