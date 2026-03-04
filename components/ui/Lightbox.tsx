"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl"
        >
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white hover:text-accent-cyan transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-96 md:h-[32rem]">
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-cover rounded-lg"
              onError={(e) => {
                const img = e.currentTarget;
                img.style.display = "none";
              }}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-accent-cyan text-dark-bg rounded hover:bg-accent-teal transition-colors"
            >
              ← Previous
            </button>
            <span className="text-white text-sm">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-accent-cyan text-dark-bg rounded hover:bg-accent-teal transition-colors"
            >
              Next →
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
