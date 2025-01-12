import RemoveReplaceWhitespaces from "~/components/Text-Utilities/RemoveReplaceWhitespaces";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Remove/Replace Whitespaces - Convertify Tools",
  description: "Remove or replace whitespaces in text with the Remove/Replace Whitespaces tool. Perfect for quick text transformations.",
  keywords: "remove whitespaces, replace whitespaces, text converter, text tools",
  "og:title": "Remove/Replace Whitespaces - Convertify Tools",
  "og:description": "Remove or replace whitespaces in text with the Remove/Replace Whitespaces tool. Perfect for quick text transformations.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/remove-replace-whitespaces",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function RemoveReplaceWhitespacesRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Remove/Replace Whitespaces</h1>
        <p className="text-lg">
          Remove or replace whitespaces in text with the Remove/Replace Whitespaces tool. Perfect for quick text transformations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Remove/Replace Whitespaces tool allows you to quickly remove or replace whitespaces in your text. Simply enter your text, and the tool will provide the transformed text.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for writers, editors, and anyone who needs to clean up text quickly. It helps in standardizing text formats and can be used in various writing and editing tasks.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool takes the input text and either removes all whitespaces or replaces them with a specified character (e.g., a hyphen). The resulting text is then displayed, and you can copy it to the clipboard or download it as a file.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Writing:</strong> Use the tool to remove or replace whitespaces in text for writing and editing purposes.
          </li>
          <li>
            <strong>Editing:</strong> Clean up text formats in documents and articles.
          </li>
          <li>
            <strong>Programming:</strong> Remove or replace whitespaces in text for use in programming tasks and scripts.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <RemoveReplaceWhitespaces />
      </section>
    </div>
  );
}