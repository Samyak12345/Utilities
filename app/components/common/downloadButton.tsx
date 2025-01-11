import React from "react";

interface DownloadButtonProps {
  data: string;
  filename: string;
  mimeType: string;
}

export default function DownloadButton({ data, filename, mimeType }: DownloadButtonProps) {
  const handleDownload = () => {
    const blob = new Blob([data], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      className="bg-primary-dark text-white px-4 py-2 rounded mb-4 border-none cursor-pointer transition-colors duration-300 hover:bg-primary-light hover:text-primary-dark"
      onClick={handleDownload}
    >
      Download
    </button>
  );
}