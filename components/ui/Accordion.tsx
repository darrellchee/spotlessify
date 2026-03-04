"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

export function Accordion({ items }: AccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-white/10 rounded-lg overflow-hidden glass-effect"
        >
          <button
            onClick={() =>
              setActiveId(activeId === item.id ? null : item.id)
            }
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
          >
            <span className="text-left font-semibold">{item.title}</span>
            <motion.div
              animate={{ rotate: activeId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-accent-cyan" />
            </motion.div>
          </button>
          <AnimatePresence>
            {activeId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 text-text-secondary border-t border-white/10">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
