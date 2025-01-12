import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import { toast } from "react-toastify";

export default function FactorialCalculator() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
      toast.error("Invalid input");
      return;
    }
    const factorial = (n: number): number => (n <= 1 ? 1 : n * factorial(n - 1));
    setResult(factorial(num).toString());
  };

  return (
    <div className="flex flex-col items-center">
      <InputBox value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter a number here..." />
      <Button onClick={handleCalculate} className="mb-4">
        Calculate Factorial
      </Button>
      <OutputBox value={result} placeholder="Factorial result will appear here..." className="text-center mb-4" />
      <CopyToClipboard text={result} />
    </div>
  );
}