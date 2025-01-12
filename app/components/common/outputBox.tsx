import React from "react";

interface OutputBoxProps {
  value: string;
  placeholder: string;
  rows?: number;
  className?: string;
}

export default function OutputBox({ value, placeholder, rows = 5, className = "" }: OutputBoxProps) {
  return (
    <textarea
      className={`w-full p-2 border border-gray-300 rounded mb-4 resize-y text-center ${className}`}
      rows={rows}
      value={value}
      readOnly
      placeholder={placeholder}
    />
  );
}