import UnixToHumanDate from "~/components/Time-Date-Utilities/UnixToHumanDate";

export default function UnixToHumanDateRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Unix Timestamp to Human-Readable Date Converter</h2>
      <UnixToHumanDate />
    </div>
  );
}