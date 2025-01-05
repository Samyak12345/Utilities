import CelsiusToFahrenheit from "~/components/Unit-Conversions/CelsiusToFahrenheit";

export default function CelsiusToFahrenheitRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Celsius to Fahrenheit Converter</h2>
      <CelsiusToFahrenheit />
    </div>
  );
}