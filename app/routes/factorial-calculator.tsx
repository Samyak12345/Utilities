import FactorialCalculator from "~/components/Math-Calculators/FactorialCalculator";

export default function FactorialCalculatorRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Factorial Calculator</h2>
      <FactorialCalculator />
    </div>
  );
}