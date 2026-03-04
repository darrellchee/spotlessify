"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(newPosition, 100)));
  };

  return (
    <section id="before-after" className="section-spacing">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-gradient">Spotlessify</span> Difference
          </h2>
          <p className="text-lg text-text-secondary">
            Drag the slider to see the transformation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative w-full max-w-3xl mx-auto rounded-lg overflow-hidden bg-gray-200 h-96 md:h-[28rem] cursor-col-resize group"
        >
          {/* After Image (Background) */}
          <Image
            src="/ai/after.png"
            alt="After professional cleaning"
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Before Image (Overlay with clip-path) */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              width: `${position}%`,
              overflow: "hidden",
            }}
          >
            <Image
              src="/ai/before.png"
              alt="Before professional cleaning"
              fill
              className="object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Divider Line */}
          <div
            style={{
              position: "absolute",
              left: `${position}%`,
              top: 0,
              bottom: 0,
              width: "3px",
              backgroundColor: "#0ea5e9",
              transform: "translateX(-50%)",
              transition: "box-shadow 0.2s",
            }}
            className="group-hover:shadow-lg group-hover:shadow-accent-cyan"
          >
            {/* Handle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-cyan text-dark-bg w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
              ◀ ▶
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow">
            <p className="text-sm font-semibold text-accent-cyan">BEFORE</p>
          </div>
          <div className="absolute top-6 right-6 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow">
            <p className="text-sm font-semibold text-accent-teal">AFTER</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
