"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { Accordion } from "@/components/ui/Accordion";
import { fadeInUp } from "@/lib/motion";

export function FaqSection() {
  const accordionItems = siteConfig.faq.map((item, i) => ({
    id: `faq-${i}`,
    title: item.question,
    content: item.answer,
  }));

  return (
    <section id="faq" className="section-spacing">
      <div className="container-max max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about our service
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion items={accordionItems} />
        </motion.div>
      </div>
    </section>
  );
}
