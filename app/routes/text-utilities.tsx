// import { Link } from "@remix-run/react";

// export default function TextUtilities() {
//   return (
//     <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
//       <h2 className="text-2xl font-bold mb-4">Text Utilities</h2>
//       <ul className="list-disc pl-5 space-y-2">
//         <li><Link to="/text-utilities/upper-lower-case" className="text-blue-500 hover:underline">Upper/Lower Case</Link></li>
//         <li><Link to="/text-utilities/remove-replace-whitespaces" className="text-blue-500 hover:underline">Remove/Replace Whitespaces</Link></li>
//         <li><Link to="/text-utilities/find-replace-text" className="text-blue-500 hover:underline">Find and Replace Text</Link></li>
//         <li><Link to="/text-utilities/count-words-characters" className="text-blue-500 hover:underline">Count Words and Characters</Link></li>
//         <li><Link to="/text-utilities/reverse-text" className="text-blue-500 hover:underline">Reverse Text</Link></li>
//       </ul>
//     </div>
//   );
// }


import { Outlet, Link } from "@remix-run/react";

export default function TextUtilities() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert">
      <h2 className="text-2xl font-bold mb-4">Text Utilities</h2>
      {/* <ul className="list-disc pl-5 space-y-2">
        <li><Link to="/text-utilities/upper-lower-case" className="text-blue-500 hover:underline">Upper/Lower Case</Link></li>
        <li><Link to="/text-utilities/remove-replace-whitespaces" className="text-blue-500 hover:underline">Remove/Replace Whitespaces</Link></li>
        <li><Link to="/text-utilities/find-replace-text" className="text-blue-500 hover:underline">Find and Replace Text</Link></li>
        <li><Link to="/text-utilities/count-words-characters" className="text-blue-500 hover:underline">Count Words and Characters</Link></li>
        <li><Link to="/text-utilities/reverse-text" className="text-blue-500 hover:underline">Reverse Text</Link></li>
      </ul> */}
      <Outlet />
    </div>
  );
}