import TextToBase64 from "~/components/Text-Utilities/TextToBase64";

export default function TextToBase64Route() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Text to Base64 Converter</h2>
      <TextToBase64 />
    </div>
  );
}