"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
      href: "https://github.com/SakshiVarkhede",
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sakshi-varkhede/",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:sakshivarkhede22@gmail.com",
    color: "hover:text-orange-primary",
  },
];

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-dark-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 text-center md:text-left"
          >
            <p>&copy; {new Date().getFullYear()} Sakshi Varkhede. All rights reserved.</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-primary transition-colors duration-300"
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

