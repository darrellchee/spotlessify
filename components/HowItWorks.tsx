"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-spacing bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Three simple steps to a spotless property
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-20 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan to-accent-teal" />

          {siteConfig.howItWorks.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`flex gap-8 mb-12 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>

              {/* Circle Number */}
              <div className="flex-shrink-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-teal flex items-center justify-center font-bold text-2xl text-dark-bg shadow-lg shadow-accent-cyan/50 relative z-10"
                >
                  {item.step}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
