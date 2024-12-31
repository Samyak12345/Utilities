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
            <h1 className="text-xl font-extrabold tracking-tight"><Link to="/" className="transition-colors duration-300">Convertify Tools</Link></h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link
                    to="/file-conversions"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname === "/file-conversions" ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    File Conversions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/text-utilities"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname.startsWith("/text-utilities") ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    Text Utilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/time-date-utilities"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname === "/time-date-utilities" ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    Time and Date Utilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/math-calculators"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname === "/math-calculators" ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    Math Calculators
                  </Link>
                </li>
                <li>
                  <Link
                    to="/unit-conversions"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname === "/unit-conversions" ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    Unit Conversions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/color-design-tools"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname === "/color-design-tools" ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    Color & Design Tools
                  </Link>
                </li>
                <li>
                  <Link
                    to="/data-utilities"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname === "/data-utilities" ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    Data Utilities
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programming-utilities"
                    className={`px-3 py-1.5 rounded text-sm ${location.pathname === "/programming-utilities" ? "bg-primary-dark text-white" : "hover:bg-primary-light hover:text-primary-dark"}`}
                  >
                    Programming Utilities
                  </Link>
                </li>
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