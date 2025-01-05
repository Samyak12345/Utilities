import MinifyJson from "~/components/Programming-Utilities/MinifyJson";

export default function MinifyJsonRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Minify JSON</h2>
      <MinifyJson />
    </div>
  );
}