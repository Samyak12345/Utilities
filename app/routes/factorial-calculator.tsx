import FactorialCalculator from "~/components/Math-Calculators/FactorialCalculator";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Factorial Calculator - Convertify Tools",
  description: "Calculate factorials with the Factorial Calculator tool. Perfect for quick mathematical calculations.",
  keywords: "factorial calculator, math tools, mathematical calculations, factorials",
  "og:title": "Factorial Calculator - Convertify Tools",
  "og:description": "Calculate factorials with the Factorial Calculator tool. Perfect for quick mathematical calculations.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/factorial-calculator",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function FactorialCalculatorRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Factorial Calculator</h1>
        <p className="text-lg">
          Calculate factorials with the Factorial Calculator tool. Perfect for quick mathematical calculations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Factorial Calculator tool allows you to quickly calculate the factorial of a given number. Simply enter a number, and the tool will provide the factorial result.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for students, teachers, and anyone who needs to perform quick mathematical calculations. It helps in understanding the concept of factorials and can be used in various mathematical problems and programming tasks.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool uses a recursive function to calculate the factorial of a given number. When you enter a number, the tool calculates the factorial by multiplying the number by the factorial of the number minus one, until it reaches one.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Education:</strong> Use the tool to help students understand the concept of factorials and solve mathematical problems.
          </li>
          <li>
            <strong>Programming:</strong> Calculate factorials in programming tasks and algorithms.
          </li>
          <li>
            <strong>Mathematical Research:</strong> Perform quick factorial calculations for mathematical research and analysis.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <FactorialCalculator />
      </section>
    </div>
  );
}