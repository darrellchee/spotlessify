"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % siteConfig.reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="section-spacing">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Real stories from satisfied customers across Sydney
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Current Review */}
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="glass-effect p-8 rounded-lg text-center mb-8"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: siteConfig.reviews[current].rating }).map(
                (_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent-cyan text-accent-cyan"
                  />
                )
              )}
            </div>

            {/* Review Text */}
            <p className="text-lg text-text-secondary mb-6 italic">
              "{siteConfig.reviews[current].text}"
            </p>

            {/* Author */}
            <div>
              <p className="font-bold text-white">
                {siteConfig.reviews[current].name}
              </p>
              <p className="text-sm text-accent-cyan">
                {siteConfig.reviews[current].suburb}
              </p>
            </div>
          </motion.div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3">
            {siteConfig.reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-accent-cyan w-8"
                    : "bg-white/20 w-2 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
