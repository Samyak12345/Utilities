import CountWordsCharacters from "~/components/Text-Utilities/CountWordsCharacters";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Count Words and Characters - Convertify Tools",
  description: "Count words and characters in your text with the Count Words and Characters tool. Perfect for quick text analysis.",
  keywords: "count words, count characters, text analysis, text tools",
  "og:title": "Count Words and Characters - Convertify Tools",
  "og:description": "Count words and characters in your text with the Count Words and Characters tool. Perfect for quick text analysis.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/count-words-characters",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function CountWordsCharactersRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Count Words and Characters</h1>
        <p className="text-lg">
          Count words and characters in your text with the Count Words and Characters tool. Perfect for quick text analysis.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Count Words and Characters tool allows you to quickly count the number of words and characters in your text. Simply enter your text, and the tool will provide the word and character counts.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for writers, editors, and anyone who needs to analyze text quickly. It helps in understanding the length and structure of your text and can be used in various writing and editing tasks.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool takes the input text and counts the number of words and characters. The resulting counts are then displayed, and you can copy them to the clipboard or download them as a file.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Writing:</strong> Use the tool to count words and characters in your text for writing and editing purposes.
          </li>
          <li>
            <strong>Editing:</strong> Analyze the length and structure of your text in documents and articles.
          </li>
          <li>
            <strong>Education:</strong> Help students understand the length and structure of their writing assignments.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <CountWordsCharacters />
      </section>
    </div>
  );
}