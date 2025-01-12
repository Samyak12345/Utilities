import UpperLowerCase from "~/components/Text-Utilities/UpperLowerCase";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Upper/Lower Case Converter - Convertify Tools",
  description: "Convert text to upper or lower case with the Upper/Lower Case Converter tool. Perfect for quick text transformations.",
  keywords: "upper case converter, lower case converter, text converter, text tools",
  "og:title": "Upper/Lower Case Converter - Convertify Tools",
  "og:description": "Convert text to upper or lower case with the Upper/Lower Case Converter tool. Perfect for quick text transformations.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/upper-lower-case",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function UpperLowerCaseRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Upper/Lower Case Converter</h1>
        <p className="text-lg">
          Convert text to upper or lower case with the Upper/Lower Case Converter tool. Perfect for quick text transformations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Upper/Lower Case Converter tool allows you to quickly convert text to either upper case or lower case. Simply enter your text, and the tool will provide the transformed text.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for writers, editors, and anyone who needs to transform text quickly. It helps in standardizing text formats and can be used in various writing and editing tasks.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool takes the input text and converts it to either upper case or lower case based on your selection. The resulting text is then displayed, and you can copy it to the clipboard or download it as a file.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Writing:</strong> Use the tool to convert text to upper or lower case for writing and editing purposes.
          </li>
          <li>
            <strong>Editing:</strong> Standardize text formats in documents and articles.
          </li>
          <li>
            <strong>Programming:</strong> Convert text to upper or lower case for use in programming tasks and scripts.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <UpperLowerCase />
      </section>
    </div>
  );
}