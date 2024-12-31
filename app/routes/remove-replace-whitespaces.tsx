import RemoveReplaceWhitespaces from "~/components/Text-Utilities/RemoveReplaceWhitespaces";

export default function RemoveReplaceWhitespacesRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Remove/Replace Whitespaces</h2>
      <RemoveReplaceWhitespaces />
    </div>
  );
}