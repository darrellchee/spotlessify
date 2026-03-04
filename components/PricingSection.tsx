"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function PricingSection() {
  return (
    <section id="pricing" className="section-spacing bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-text-secondary">
            No hidden fees, all inclusive cleaning packages
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {siteConfig.pricing.map((tier, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`rounded-lg p-8 transition-all ${
                tier.popular
                  ? "border-2 border-accent-cyan bg-white ring-2 ring-accent-cyan/20 scale-105 md:scale-110 shadow-lg"
                  : "border border-gray-200 bg-white"
              }`}
            >
              {tier.popular && (
                <div className="inline-block bg-gradient-to-r from-accent-cyan to-accent-teal text-dark-bg px-4 py-1 rounded-full text-sm font-bold mb-4">
                  ★ Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{tier.tier}</h3>
              <p className="text-text-secondary text-sm mb-6">{tier.subtitle}</p>

              <div className="mb-8">
                <span className="text-5xl font-bold text-accent-cyan">
                  ${tier.price}
                </span>
                <span className="text-text-secondary ml-2">per service</span>
              </div>

              <Button
                variant={tier.popular ? "primary" : "outline"}
                className="w-full mb-8"
              >
                {tier.cta}
              </Button>

              <ul className="space-y-4">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
