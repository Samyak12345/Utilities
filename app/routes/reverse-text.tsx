import ReverseText from "~/components/Text-Utilities/ReverseText";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Reverse Text - Convertify Tools",
  description: "Reverse text with the Reverse Text tool. Perfect for quick text transformations.",
  keywords: "reverse text, text converter, text tools, text editing",
  "og:title": "Reverse Text - Convertify Tools",
  "og:description": "Reverse text with the Reverse Text tool. Perfect for quick text transformations.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/reverse-text",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function ReverseTextRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Reverse Text</h1>
        <p className="text-lg">
          Reverse text with the Reverse Text tool. Perfect for quick text transformations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Reverse Text tool allows you to quickly reverse the order of characters in your text. Simply enter your text, and the tool will provide the reversed text.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for writers, editors, and anyone who needs to transform text quickly. It helps in creating interesting text effects and can be used in various writing and editing tasks.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool takes the input text and reverses the order of characters. The resulting text is then displayed, and you can copy it to the clipboard or download it as a file.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Writing:</strong> Use the tool to create interesting text effects in your writing.
          </li>
          <li>
            <strong>Editing:</strong> Reverse text for creative editing purposes.
          </li>
          <li>
            <strong>Programming:</strong> Reverse text for use in programming tasks and scripts.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <ReverseText />
      </section>
    </div>
  );
}