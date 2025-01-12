import FindReplaceText from "~/components/Text-Utilities/FindReplaceText";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Find and Replace Text - Convertify Tools",
  description: "Find and replace text with the Find and Replace Text tool. Perfect for quick text transformations.",
  keywords: "find and replace text, text converter, text tools, text editing",
  "og:title": "Find and Replace Text - Convertify Tools",
  "og:description": "Find and replace text with the Find and Replace Text tool. Perfect for quick text transformations.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/find-replace-text",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function FindReplaceTextRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Find and Replace Text</h1>
        <p className="text-lg">
          Find and replace text with the Find and Replace Text tool. Perfect for quick text transformations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Find and Replace Text tool allows you to quickly find and replace specific text within a larger body of text. Simply enter your text, specify the text to find and the replacement text, and the tool will provide the transformed text.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for writers, editors, and anyone who needs to make quick text transformations. It helps in standardizing text formats and can be used in various writing and editing tasks.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool takes the input text and replaces all occurrences of the specified text with the replacement text. The resulting text is then displayed, and you can copy it to the clipboard or download it as a file.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Writing:</strong> Use the tool to find and replace text in documents and articles for writing and editing purposes.
          </li>
          <li>
            <strong>Editing:</strong> Standardize text formats and correct errors in large bodies of text.
          </li>
          <li>
            <strong>Programming:</strong> Find and replace text in code files for use in programming tasks and scripts.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <FindReplaceText />
      </section>
    </div>
  );
}