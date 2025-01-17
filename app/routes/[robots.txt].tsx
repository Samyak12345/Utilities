import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const robots = `
    User-agent: *
    Allow: /
    Sitemap: https://www.convertifytools.com/sitemap.xml
  `;
  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};