import ReverseText from "~/components/Text-Utilities/ReverseText";

export default function ReverseTextRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Reverse Text</h2>
      <ReverseText />
    </div>
  );
}