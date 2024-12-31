import CountWordsCharacters from "~/components/Text-Utilities/CountWordsCharacters";

export default function CountWordsCharactersRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Count Words and Characters</h2>
      <CountWordsCharacters />
    </div>
  );
}