import fs from "fs";
import wheelPresets from "../src/config/wheelPresets.js";

const baseUrl = "https://sillywheel.com";

function generateSitemap() {
  const paths = [
    "", // homepage
    "/404", // error page
  ];

  // Add all preset paths
  Object.keys(wheelPresets).forEach((presetKey) => {
    paths.push(`/${presetKey}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${paths
    .map((path) => {
      return `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${path === "" ? "daily" : "weekly"}</changefreq>
      <priority>${path === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

  fs.writeFileSync("./public/sitemap.xml", sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap();
