import { useState } from "react";
import RemoveReplaceWhitespaces from "~/components/Text-Utilities/RemoveReplaceWhitespaces";
import FindReplaceText from "~/components/Text-Utilities/FindReplaceText";
import CountWordsCharacters from "~/components/Text-Utilities/CountWordsCharacters";
import ReverseText from "~/components/Text-Utilities/ReverseText";
import UpperLowerCase from "~/components/Text-Utilities/UpperLowerCase";

const tabs = [
  { name: "Upper/Lower Case", component: UpperLowerCase },
  { name: "Remove/Replace Whitespaces", component: RemoveReplaceWhitespaces },
  { name: "Find and Replace Text", component: FindReplaceText },
  { name: "Count Words and Characters", component: CountWordsCharacters },
  { name: "Reverse Text", component: ReverseText },
];

export default function TextUtilities() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  const ActiveComponent = tabs.find(tab => tab.name === activeTab)?.component;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Text Utilities</h2>
      <div className="mb-4">
        <nav className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.name}
              className={`px-4 py-2 rounded ${activeTab === tab.name ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
      <div>
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
}