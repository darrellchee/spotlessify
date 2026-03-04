"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Lightbox } from "@/components/ui/Lightbox";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const galleryImages = [
  "/ai/gallery-1.png",
  "/ai/gallery-2.png",
  "/ai/gallery-3.png",
  "/ai/gallery-4.png",
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-spacing bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Before & <span className="text-gradient">After Gallery</span>
          </h2>
          <p className="text-lg text-text-secondary">
            See the transformation we bring to every property
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(i)}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
            >
              <Image
                src={image}
                alt={`Gallery image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <p className="text-sm font-semibold">View Image</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </section>
  );
}
