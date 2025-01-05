import JsonToCsv from "~/components/File-Conversions/JsonToCsv";

export default function JsonToCsvRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">JSON to CSV Converter</h2>
      <JsonToCsv />
    </div>
  );
}