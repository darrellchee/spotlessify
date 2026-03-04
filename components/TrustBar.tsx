"use client";

import { motion } from "framer-motion";
import { TrendingUp, Smile, CheckCircle, Award } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const iconComponents = {
  TrendingUp: TrendingUp,
  Smile: Smile,
  CheckCircle: CheckCircle,
  Award: Award,
};

export function TrustBar() {
  return (
    <section className="bg-dark-card py-8 border-y border-gray-200">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {siteConfig.trustStats.map((stat, i) => {
            const IconComponent = iconComponents[stat.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-3"
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-accent-cyan" />
                  )}
                </motion.div>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
