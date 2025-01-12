import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Button({ onClick, children, className = "" }: ButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}