import RandomColorGenerator from "~/components/Color-Design-Tools/RandomColorGenerator";
import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{
  title: "Random Color Generator - Convertify Tools",
  description: "Generate random colors with the Random Color Generator tool. Perfect for designers and developers looking for color inspiration.",
  keywords: "random color generator, color inspiration, design tools, color palettes, web design",
  "og:title": "Random Color Generator - Convertify Tools",
  "og:description": "Generate random colors with the Random Color Generator tool. Perfect for designers and developers looking for color inspiration.",
  "og:type": "website",
  "og:url": "https://www.convertifytools.com/random-color-generator",
  //"og:image": "https://www.convertifytools.com/og-image.jpg",
}];

export default function RandomColorGeneratorRoute() {
  return (
    <div className="bg-secondary-dark p-6 rounded-lg shadow-md prose prose-invert mt-8">
      <section className="mb-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Random Color Generator</h1>
        <p className="text-lg">
          Generate random colors with the Random Color Generator tool. Perfect for designers and developers looking for color inspiration.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">What the Tool Does</h2>
        <p>
          The Random Color Generator tool generates a random color each time you click the "Generate Random Color" button. It displays the generated color in a box and provides the hexadecimal code for the color.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Why It's Useful</h2>
        <p>
          This tool is useful for designers, developers, and anyone who needs inspiration for color schemes. It helps in quickly generating random colors that can be used in various design projects, websites, and applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p>
          The tool uses JavaScript to generate a random hexadecimal color code. When the "Generate Random Color" button is clicked, a new random color is generated and displayed. The hexadecimal code of the color is also shown, and you can copy it to the clipboard for easy use.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-3xl font-bold mb-4">Specific Use Cases</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Design Inspiration:</strong> Use the tool to generate random colors for your design projects, such as website themes, graphic designs, and UI elements.
          </li>
          <li>
            <strong>Color Palettes:</strong> Quickly generate colors to create unique color palettes for branding and marketing materials.
          </li>
          <li>
            <strong>Random Backgrounds:</strong> Use the generated colors as random backgrounds for web pages, presentations, or digital art.
          </li>
        </ul>
      </section>

      <section className="mb-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Try It Out</h2>
        <RandomColorGenerator />
      </section>
    </div>
  );
}