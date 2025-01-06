import React from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './toast.css'; // Import the custom toast styles

interface CopyToClipboardProps {
  text: string;
}

export default function CopyToClipboard({ text }: CopyToClipboardProps) {
  const handleCopy = () => {
    if (text.trim() === "") {
      toast.error("Nothing to copy!");
      return;
    }

    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Copied to clipboard!");
      },
      (err) => {
        toast.error("Failed to copy text: " + err);
      }
    );
  };

  return (
    <>
      <button
        className="bg-primary-dark text-white px-4 py-2 rounded mb-4 border-none cursor-pointer transition-colors duration-300 hover:bg-primary-light hover:text-primary-dark"
        onClick={handleCopy}
      >
        Copy to Clipboard
      </button>
      <ToastContainer />
    </>
  );
}