"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  const headline = siteConfig.hero.headline.split(" ");
  const subheadline = siteConfig.hero.subheadline;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <Image
        src="/ai/hero-1.png"
        alt="Professional cleaning service"
        fill
        className="object-cover absolute inset-0"
        priority
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container-max text-center max-w-3xl"
      >
        {/* Headline */}
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              transition={{ delay: 0.05 * i }}
              className={i === 2 ? "text-gradient" : ""}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-text-secondary mb-8"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" variant="primary" className="group">
            {siteConfig.hero.cta1}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="group">
            <Phone className="w-5 h-5" />
            {siteConfig.hero.cta2}
          </Button>
        </motion.div>

        {/* Trust Stats Row */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {siteConfig.trustStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="glass-effect p-4 rounded-lg"
            >
              <div className="text-2xl font-bold text-accent-cyan mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
