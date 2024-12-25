import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Welcome to Utility Tools</h2>
      <p className="mb-4">Choose a tool from the list below:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li><Link to="/file-conversions" className="text-blue-500 hover:underline">File Conversions</Link></li>
        <li><Link to="/text-utilities" className="text-blue-500 hover:underline">Text Utilities</Link></li>
        <li><Link to="/time-date-utilities" className="text-blue-500 hover:underline">Time and Date Utilities</Link></li>
        <li><Link to="/math-calculators" className="text-blue-500 hover:underline">Mathematical Calculators</Link></li>
        <li><Link to="/unit-conversions" className="text-blue-500 hover:underline">Unit Conversions</Link></li>
        <li><Link to="/color-design-tools" className="text-blue-500 hover:underline">Color and Design Tools</Link></li>
        <li><Link to="/data-utilities" className="text-blue-500 hover:underline">Data Utilities</Link></li>
        <li><Link to="/programming-utilities" className="text-blue-500 hover:underline">Programming Utilities</Link></li>
      </ul>
    </div>
  );
}