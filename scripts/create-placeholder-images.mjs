import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = join(__dirname, "..", "public", "ai");
mkdirSync(outputDir, { recursive: true });

// Create simple PNG placeholder images
// This is a minimal valid PNG 1x1 white pixel
const createPNG = (color = "ffffff") => {
  // Create a gradient PNG using raw binary data
  const width = 1200;
  const height = 800;
  
  // Simple PNG header + minimal data for demonstration
  // Since we can't easily create valid PNGs, we'll create SVG and convert
  const svgData = {
    "hero-1.png": '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800"><rect fill="#e8f0f7" width="1200" height="800"/><text x="600" y="400" font-size="48" text-anchor="middle" fill="#0891b2" font-family="Arial" font-weight="bold">Sydney Luxury Apartment</text></svg>',
    "gallery-1.png": '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="#f5f7fa" width="800" height="600"/><text x="400" y="300" font-size="36" text-anchor="middle" fill="#0891b2" font-family="Arial">Premium Kitchen</text></svg>',
    "gallery-2.png": '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="#f5f7fa" width="800" height="600"/><text x="400" y="300" font-size="36" text-anchor="middle" fill="#0891b2" font-family="Arial">Pristine Bathroom</text></svg>',
    "gallery-3.png": '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="#f5f7fa" width="800" height="600"/><text x="400" y="300" font-size="36" text-anchor="middle" fill="#0891b2" font-family="Arial">Clean Living Room</text></svg>',
    "gallery-4.png": '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="#f5f7fa" width="800" height="600"/><text x="400" y="300" font-size="36" text-anchor="middle" fill="#0891b2" font-family="Arial">Fresh Bedroom</text></svg>',
    "before.png": '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700"><rect fill="#d4b5a0" width="1000" height="700"/><text x="500" y="350" font-size="48" text-anchor="middle" fill="#666" font-family="Arial" font-weight="bold">BEFORE - Needs Cleaning</text></svg>',
    "after.png": '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="700"><rect fill="#e8f5f0" width="1000" height="700"/><text x="500" y="350" font-size="48" text-anchor="middle" fill="#0d9488" font-family="Arial" font-weight="bold">AFTER - Spotlessly Clean</text></svg>',
    "cta-bg.png": '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#f0f9ff;stop-opacity:1" /><stop offset="100%" style="stop-color:#e0f2fe;stop-opacity:1" /></linearGradient></defs><rect fill="url(#grad)" width="1600" height="900"/><circle cx="200" cy="200" r="100" fill="#0891b2" opacity="0.1"/><circle cx="1400" cy="700" r="150" fill="#0d9488" opacity="0.1"/></svg>',
  };

  return svgData;
};

const svgImages = createPNG();

// Write SVG files (which will be served as images)
for (const [filename, svgContent] of Object.entries(svgImages)) {
  const filePath = join(outputDir, filename);
  writeFileSync(filePath, svgContent, 'utf-8');
  console.log(`✓ Created placeholder ${filename}`);
}

// Create manifest
const manifest = {
  generatedAt: new Date().toISOString(),
  images: Object.keys(svgImages),
  note: "Placeholder images - replace with actual AI-generated images using npm run gen:images with valid GOOGLE_API_KEY"
};

const manifestPath = join(outputDir, "manifest.json");
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`\n✓ Created ${Object.keys(svgImages).length} placeholder images`);
console.log(`✓ Manifest saved`);
console.log("\nTo generate actual images, run: GOOGLE_API_KEY=your_key npm run gen:images");
