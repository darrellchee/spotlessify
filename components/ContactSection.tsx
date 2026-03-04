"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/motion";

interface FormData {
  name: string;
  phone: string;
  email: string;
  suburb: string;
  serviceType: string;
  bedrooms: string;
  notes: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    serviceType: "",
    bedrooms: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          suburb: "",
          serviceType: "",
          bedrooms: "",
          notes: "",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Free <span className="text-gradient">Quote</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Tell us about your property and we'll provide a transparent quote
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Form */}
          <motion.div variants={fadeInUp}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center glass-effect p-8 rounded-lg"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
                  <Check className="w-16 h-16 text-accent-cyan" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Quote Submitted!</h3>
                <p className="text-text-secondary mb-6">
                  Thanks for reaching out. We'll contact you within 24 hours with
                  your personalized quote.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
                <input
                  type="text"
                  name="suburb"
                  placeholder="Suburb/Area"
                  value={formData.suburb}
                  onChange={handleChange}
                  className="w-full"
                />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full"
                >
                  <option value="">Select Service Type</option>
                  {siteConfig.services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <select
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  required
                  className="w-full"
                >
                  <option value="">Number of Bedrooms</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select>
                <textarea
                  name="notes"
                  placeholder="Additional Notes (optional)"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full"
                />
                <Button
                  variant="primary"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get Your Quote"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a
                    href={`tel:${siteConfig.phoneShort}`}
                    className="text-accent-cyan hover:text-accent-teal transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-accent-cyan hover:text-accent-teal transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-text-secondary">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-cyan/5 to-accent-teal/5 border border-accent-cyan/20 p-6 rounded-lg">
              <p className="text-sm text-text-secondary">
                Available for emergency same-day bookings. For urgent cleaning
                needs, call us directly and we'll fit you in.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
