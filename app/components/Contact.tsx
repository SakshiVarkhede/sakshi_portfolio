"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Send, Mail, MessageSquare, User, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Contact
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Have a project in mind? Let's collaborate!
          </p>

          {/* Social Media Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center items-center gap-4 mb-8"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-orange-primary flex items-center justify-center text-white hover:bg-orange-light transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-varkhede"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-orange-primary flex items-center justify-center text-white hover:bg-orange-light transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-dark-card rounded-2xl p-8 sm:p-10 border border-dark-border card-glow">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <User size={16} className="inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <Mail size={16} className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  <MessageSquare size={16} className="inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-primary focus:ring-2 focus:ring-orange-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-orange-primary text-white font-semibold rounded-lg hover:bg-orange-light hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500 text-green-400"
                      : "bg-red-500/20 border border-red-500 text-red-400"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

