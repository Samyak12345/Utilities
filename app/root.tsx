import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { useState } from "react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;700&display=swap" },
];

export const meta: MetaFunction = () => [
  { name: "charset", content: "utf-8" },
  { name: "title", content: "Convertify Tools - Your One-Stop Solution for All Utilities" },
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "description", content: "Convertify Tools offers a wide range of tools for file conversions, text utilities, date and time utilities, and more." },
  { name: "keywords", content: "Convertify tools, file conversions, text utilities, date utilities, time utilities, seo" },
  { property: "og:title", content: "Convertify Tools - Your One-Stop Solution for All Conversions" },
  { property: "og:description", content: "Convertify Tools offers a wide range of tools for file conversions, text utilities, date and time utilities, and more." },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://www.convertifytools.com/" },
  { property: "og:image", content: "https://www.convertifytools.com/og-image.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Utility Tools - Your One-Stop Solution for All Utilities" },
  { name: "twitter:description", content: "Utility Tools offers a wide range of tools for file conversions, text utilities, date and time utilities, and more." },
  { name: "twitter:image", content: "https://www.convertifytools.com/twitter-image.jpg" },
];

export default function App() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleSubmenuClick = () => {
    setActiveMenu(null);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans bg-secondary-dark text-primary-light">
        <header className="bg-secondary-dark text-primary-light p-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-extrabold tracking-tight">
              <Link to="/" className="transition-colors duration-300">Convertify Tools</Link>
            </h1>
            <nav>
              <ul className="flex space-x-4 relative">
                {[
                  { title: "File Conversions", link: "/file-conversions", submenu: [] },
                  { title: "Text Utilities", link: "/text-utilities", submenu: [
                    { title: "Upper/Lower Case", link: "/upper-lower-case" },
                    { title: "Remove/Replace Whitespaces", link: "/remove-replace-whitespaces" },
                    { title: "Find and Replace Text", link: "/find-replace-text" },
                    { title: "Count Words and Characters", link: "/count-words-characters" },
                    { title: "Reverse Text", link: "/reverse-text" },
                  ]},
                  { title: "Time and Date Utilities", link: "/time-date-utilities", submenu: [] },
                  { title: "Math Calculators", link: "/math-calculators", submenu: [] },
                  { title: "Unit Conversions", link: "/unit-conversions", submenu: [] },
                  { title: "Color & Design Tools", link: "/color-design-tools", submenu: [] },
                  { title: "Data Utilities", link: "/data-utilities", submenu: [] },
                  { title: "Programming Utilities", link: "/programming-utilities", submenu: [] },
                ].map(({ title, link, submenu }) => (
                  <li className="group relative" key={title}>
                  <button
                    onClick={() => handleMenuClick(title)}
                    className={`px-4 py-2 rounded text-sm ${location.pathname.startsWith(link) ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    {title}
                  </button>
                  <ul className="absolute left-0 top-full mt-2 bg-secondary-dark text-primary-light shadow-lg rounded-md w-56 group-hover:block hidden">
                    {submenu.map((item) => (
                      <li key={typeof item === "string" ? item : item.title} className="border-b border-secondary-light last:border-none">
                        <Link
                          to={typeof item === "string" ? item : item.link}
                          className="block px-4 py-2 text-sm hover:bg-primary-dark hover:text-white"
                        >
                          {typeof item === "string" ? item : item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto p-4 prose prose-invert">
          <Outlet />
        </main>
        <footer className="bg-secondary-dark text-primary-light p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Convertify Tools. All rights reserved.</p>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}