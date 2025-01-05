import RandomColorGenerator from "~/components/Color-Design-Tools/RandomColorGenerator";

export default function RandomColorGeneratorRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Random Color Generator</h2>
      <RandomColorGenerator />
    </div>
  );
}