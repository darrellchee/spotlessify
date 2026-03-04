import genaiPkg from "@google/genai";
import { writeFileSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const { GoogleGenerativeAI } = genaiPkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiKey = process.env.GOOGLE_API_KEY;
if (!apiKey) {
  throw new Error("GOOGLE_API_KEY environment variable is not set");
}

const client = new GoogleGenerativeAI({ apiKey });
const outputDir = join(__dirname, "..", "public", "ai");

// Create output directory if it doesn't exist
mkdirSync(outputDir, { recursive: true });

const imagePrompts = [
  {
    filename: "hero-1.png",
    prompt:
      "A premium Sydney luxury apartment living room, wide angle shot, morning natural light streaming in through floor-to-ceiling windows, modern furniture, clean and tidy, city skyline in background, professional photography, 4k, high quality",
  },
  {
    filename: "gallery-1.png",
    prompt:
      "Spotless modern kitchen with white marble countertops, stainless steel appliances, gleaming surfaces, immaculately clean, professional product photography lighting, bright and pristine, 4k high quality",
  },
  {
    filename: "gallery-2.png",
    prompt:
      "Pristine modern bathroom with white tiles, glass shower enclosure, gleaming chrome fixtures, perfectly clean and organized, spa-like atmosphere, professional product photography, 4k",
  },
  {
    filename: "gallery-3.png",
    prompt:
      "Bright and airy living room after professional deep cleaning, spotless white walls, clean hardwood floors, minimalist furnishings, natural light, immaculate condition, 4k photography",
  },
  {
    filename: "gallery-4.png",
    prompt:
      "Freshly cleaned hotel-quality bedroom, pristine white bedding, spotless surfaces, organized and serene, soft warm lighting, professional photography, 4k high quality",
  },
  {
    filename: "before.png",
    prompt:
      "An apartment in realistic need of cleaning - visible dust on surfaces, some clutter visible, smudged walls and windows, worn carpet, signs of wear, realistic messy apartment, before photo style",
  },
  {
    filename: "after.png",
    prompt:
      "The same apartment completely transformed after professional cleaning - immaculate surfaces, spotless, fresh appearance, gleaming surfaces, perfectly organized, professional after photo, same angle as before",
  },
  {
    filename: "cta-bg.png",
    prompt:
      "Abstract premium minimal clean texture background, white and light gray tones with subtle teal/cyan accents, luxury feel, smooth surfaces, professional design, 4k, suitable as website hero background",
  },
];

async function generateImages() {
  console.log("Starting image generation...");
  console.log(`API Key present: ${apiKey ? "yes" : "no"}`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    images: [],
  };

  for (const imagePrompt of imagePrompts) {
    try {
      console.log(`Generating ${imagePrompt.filename}...`);

      const model = client.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });

      const response = await model.generateContent({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: imagePrompt.prompt,
              },
            ],
          },
        ],
      });

      // Extract image data from response
      if (response.response.candidates && response.response.candidates[0]) {
        const candidate = response.response.candidates[0];
        if (
          candidate.content &&
          candidate.content.parts &&
          candidate.content.parts[0]
        ) {
          const part = candidate.content.parts[0];
          if (part.inlineData) {
            const imageData = part.inlineData;
            if (imageData.data) {
              // Save image file
              const filePath = join(outputDir, imagePrompt.filename);
              const buffer = Buffer.from(imageData.data, "base64");
              writeFileSync(filePath, buffer);
              console.log(`✓ Saved ${imagePrompt.filename}`);
              manifest.images.push(imagePrompt.filename);
            }
          }
        }
      }
    } catch (error) {
      console.error(`✗ Failed to generate ${imagePrompt.filename}:`, error);
    }
  }

  // Write manifest
  const manifestPath = join(outputDir, "manifest.json");
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`\n✓ Generated ${manifest.images.length} images`);
  console.log(`✓ Manifest saved to ${manifestPath}`);
}

generateImages().catch((error) => {
  console.error("Image generation failed:", error);
  process.exit(1);
});
