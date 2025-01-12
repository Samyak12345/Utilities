import TextToBase64 from "~/components/Text-Utilities/TextToBase64";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Text to Base64 Converter - Convertify Tools",
  description: "Convert text to Base64 with the Text to Base64 Converter tool. Perfect for quick text encoding.",
  keywords: "text to base64, base64 converter, text encoding, text tools",
  "og:title": "Text to Base64 Converter - Convertify Tools",
  "og:description": "Convert text to Base64 with the Text to Base64 Converter tool. Perfect for quick text encoding.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/text-to-base64",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function TextToBase64Route() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Text to Base64 Converter</h1>
        <p className="text-lg">
          Convert text to Base64 with the Text to Base64 Converter tool. Perfect for quick text encoding.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Text to Base64 Converter tool allows you to quickly convert text to Base64 encoding. Simply enter your text, and the tool will provide the Base64 encoded result.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for developers, data analysts, and anyone who needs to encode text in Base64 format. It helps in encoding text for data transmission, storage, and other applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool takes the input text and converts it to Base64 encoding using JavaScript's <code>btoa</code> function. The resulting Base64 encoded text is then displayed, and you can copy it to the clipboard or download it as a file.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Data Transmission:</strong> Use the tool to encode text in Base64 for safe transmission over networks.
          </li>
          <li>
            <strong>Storage:</strong> Encode text in Base64 for storage in databases or files.
          </li>
          <li>
            <strong>Web Development:</strong> Encode text in Base64 for use in web development and APIs.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <TextToBase64 />
      </section>
    </div>
  );
}