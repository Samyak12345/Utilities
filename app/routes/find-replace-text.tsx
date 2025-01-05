import FindReplaceText from "~/components/Text-Utilities/FindReplaceText";

export default function FindReplaceTextRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Find and Replace Text</h2>
      <FindReplaceText />
    </div>
  );
}