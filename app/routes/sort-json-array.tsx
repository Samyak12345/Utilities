import SortJsonArray from "~/components/Data-Utilities/SortJsonArray";

export default function SortJsonArrayRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Sort JSON Array</h2>
      <SortJsonArray />
    </div>
  );
}