"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800 py-12">
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-teal rounded-full" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Professional end-of-lease cleaning in Sydney, Surry Hills, Newtown,
              Glebe, and surrounding suburbs. Bond-back guarantee on all services.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <a
                  href={`tel:${siteConfig.phoneShort}`}
                  className="hover:text-accent-cyan transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent-cyan transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>{siteConfig.address}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400"
        >
          <p className="mb-4">
            © {currentYear} {siteConfig.name}. All rights reserved. Professional
            end-of-lease cleaning service across Sydney with bond-back guarantee.
          </p>
          <p>
            Trusted by renters in Sydney, Surry Hills, Newtown, Glebe, and beyond.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
