import CelsiusToFahrenheit from "~/components/Unit-Conversions/CelsiusToFahrenheit";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Celsius to Fahrenheit Converter - Convertify Tools",
  description: "Convert Celsius to Fahrenheit with the Celsius to Fahrenheit Converter tool. Perfect for quick temperature conversions.",
  keywords: "celsius to fahrenheit, temperature converter, unit conversions, temperature tools",
  "og:title": "Celsius to Fahrenheit Converter - Convertify Tools",
  "og:description": "Convert Celsius to Fahrenheit with the Celsius to Fahrenheit Converter tool. Perfect for quick temperature conversions.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/celsius-to-fahrenheit",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function CelsiusToFahrenheitRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Celsius to Fahrenheit Converter</h1>
        <p className="text-lg">
          Convert Celsius to Fahrenheit with the Celsius to Fahrenheit Converter tool. Perfect for quick temperature conversions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Celsius to Fahrenheit Converter tool allows you to quickly convert temperatures from Celsius to Fahrenheit. Simply enter the temperature in Celsius, and the tool will provide the equivalent temperature in Fahrenheit.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for anyone who needs to convert temperatures between Celsius and Fahrenheit. It is especially helpful for travelers, scientists, and students who frequently work with temperature measurements.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool uses a simple formula to convert Celsius to Fahrenheit: <code>(Celsius * 9/5) + 32</code>. When you enter a temperature in Celsius, the tool calculates the equivalent temperature in Fahrenheit and displays the result.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Travel:</strong> Use the tool to convert temperatures when traveling to countries that use different temperature units.
          </li>
          <li>
            <strong>Science:</strong> Convert temperatures for scientific experiments and research.
          </li>
          <li>
            <strong>Education:</strong> Help students understand temperature conversions in their studies.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <CelsiusToFahrenheit />
      </section>
    </div>
  );
}