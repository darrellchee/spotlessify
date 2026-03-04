"use client";

import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Waves,
  Zap,
  Home,
} from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const iconMap: Record<string, ReactNode> = {
  Sparkles: <Sparkles className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Waves: <Waves className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
};

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="services" className="section-spacing">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Comprehensive cleaning solutions for every need
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {siteConfig.services.map((service) => {
            const icon = iconMap[service.icon];
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="glass-effect p-6 rounded-lg hover:border-accent-cyan/50 transition-all cursor-pointer"
                onClick={() =>
                  setExpandedId(isExpanded ? null : service.id)
                }
              >
                <div className="flex items-start gap-4 mb-4">
                  {icon && (
                    <div className="text-accent-cyan">
                      {icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-text-secondary">
                      {service.description}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    isExpanded
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm font-semibold mb-2 text-accent-cyan">
                      What's Included:
                    </p>
                    <ul className="space-y-2">
                      {service.included.map((item, i) => (
                        <li key={i} className="text-sm text-text-secondary flex gap-2">
                          <span className="text-accent-cyan">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
