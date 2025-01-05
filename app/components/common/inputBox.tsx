import React from "react";

interface InputBoxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  placeholder: string;
  rows?: number;
  readOnly?: boolean;
}

export default function InputBox({ value, onChange, placeholder, rows = 5, readOnly = false }: InputBoxProps) {
  return (
    <textarea
      className="w-full p-2 border border-gray-300 rounded mb-4 resize-y"
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
    />
  );
}