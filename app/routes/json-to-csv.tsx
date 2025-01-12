import JsonToCsv from "~/components/File-Conversions/JsonToCsv";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "JSON to CSV Converter - Convertify Tools",
  description: "Convert JSON to CSV with the JSON to CSV Converter tool. Perfect for quick data conversions.",
  keywords: "json to csv, json converter, csv converter, data conversion, json tools",
  "og:title": "JSON to CSV Converter - Convertify Tools",
  "og:description": "Convert JSON to CSV with the JSON to CSV Converter tool. Perfect for quick data conversions.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/json-to-csv",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function JsonToCsvRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">JSON to CSV Converter</h1>
        <p className="text-lg">
          Convert JSON to CSV with the JSON to CSV Converter tool. Perfect for quick data conversions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The JSON to CSV Converter tool allows you to quickly convert JSON data to CSV format. Simply enter your JSON data, and the tool will provide the equivalent CSV output.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for developers, data analysts, and anyone who needs to convert JSON data to CSV format for easier data manipulation and analysis. It helps in transforming complex JSON structures into a tabular format.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool parses the input JSON data and flattens nested objects. It then converts the flattened JSON data into CSV format by creating a header row with keys and corresponding rows with values.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Data Analysis:</strong> Convert JSON data to CSV for easier analysis in spreadsheet software like Excel or Google Sheets.
          </li>
          <li>
            <strong>Data Import:</strong> Use the tool to convert JSON data to CSV format for importing into databases or other applications.
          </li>
          <li>
            <strong>Reporting:</strong> Generate CSV reports from JSON data for sharing and presentation purposes.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <JsonToCsv />
      </section>
    </div>
  );
}