import { useState } from "react";
import Button from "~/components/common/button";
import InputBox from "~/components/common/inputBox";
import OutputBox from "~/components/common/outputBox";
import CopyToClipboard from "~/components/common/copyToClipboard";
import FileUpload from "~/components/common/fileUpload";
import DownloadButton from "~/components/common/downloadButton";
import { toast } from "react-toastify";

// Utility to flatten nested objects
const flattenObject = (obj: any, parentKey = "", result: { [key: string]: any } = {}) => {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenObject(obj[key], newKey, result);
    } else if (Array.isArray(obj[key])) {
      result[newKey] = obj[key].map((item) => (typeof item === "object" ? JSON.stringify(item) : item)).join(" | ");
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

// Recursively process any JSON type
const processJsonToArray = (input: any) => {
  if (Array.isArray(input)) {
    return input.map((item) => flattenObject(item));
  } else if (typeof input === "object" && input !== null) {
    if (Object.keys(input).length === 1 && Array.isArray(input[Object.keys(input)[0]])) {
      // If object contains a single array, process it
      return input[Object.keys(input)[0]].map((item: any) => flattenObject(item));
    }
    // If object has multiple keys, return the single flattened object
    return [flattenObject(input)];
  } else {
    throw new Error("Invalid JSON input. Provide an array or object.");
  }
};

// Convert flattened JSON array to CSV
interface FlattenedObject {
  [key: string]: any;
}

const convertToCsv = (flattenedArray: FlattenedObject[]): string => {
  if (!flattenedArray.length) return "";
  const keys = Array.from(new Set(flattenedArray.flatMap((item) => Object.keys(item))));
  const csvRows = [
    keys.join(","), // Header row
    ...flattenedArray.map((row: FlattenedObject) => keys.map((key) => (row[key] !== undefined ? row[key] : "")).join(",")),
  ];
  return csvRows.join("\n");
};

export default function JsonToCsv() {
  const [json, setJson] = useState("");
  const [csv, setCsv] = useState("");

  const handleConvert = () => {
    try {
      const parsedJson = JSON.parse(json);
      const flattenedArray = processJsonToArray(parsedJson);
      const csvData = convertToCsv(flattenedArray);
      setCsv(csvData);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Invalid JSON: ${error.message}`);
      } else {
        toast.error("Invalid JSON: An unknown error occurred.");
      }
    }
  };

  const handleFileSelect = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) {
        setJson(e.target.result as string);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <FileUpload onFileSelect={handleFileSelect} />
      <InputBox
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder="Enter JSON here..."
      />
      <Button onClick={handleConvert}>Convert to CSV</Button>
      <OutputBox value={csv} placeholder="CSV output will appear here..." />
      <CopyToClipboard text={csv} />
      <DownloadButton data={csv} filename="output.csv" mimeType="text/csv" />
    </div>
  );
}