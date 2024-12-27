import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" },
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
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1635371757353656" crossOrigin="anonymous"></script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Utility Tools",
              "url": "https://www.convertifytools.com/",
              "description": "Convertify Tools offers a wide range of tools for file conversions, text utilities, date and time utilities, and more.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.convertifytools.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body className="font-sans bg-secondary-dark text-white">
        <header className="bg-primary-dark text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-extrabold tracking-tight"><Link to="/" className="transition-colors duration-300">Convertify Tools</Link></h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Home</Link></li>
                <li><Link to="/file-conversions" className="text-base font-medium hover:text-primary-light transition-colors duration-300">File Conversions</Link></li>
                <li><Link to="/text-utilities" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Text Utilities</Link></li>
                <li><Link to="/time-date-utilities" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Time and Date Utilities</Link></li>
                <li><Link to="/math-calculators" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Math Calculators</Link></li>
                <li><Link to="/unit-conversions" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Unit Conversions</Link></li>
                <li><Link to="/color-design-tools" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Color & Design Tools</Link></li>
                <li><Link to="/data-utilities" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Data Utilities</Link></li>
                <li><Link to="/programming-utilities" className="text-base font-medium hover:text-primary-light transition-colors duration-300">Programming Utilities</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-4">
          <Outlet />
        </main>
        <footer className="bg-primary-dark text-white p-4 mt-8">
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