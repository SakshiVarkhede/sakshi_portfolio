"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
const roles = [
  "AI Engineer",
  "ML Engineer",
  "Full Stack Enthusiast",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < role.length) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === role.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(role.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-orange-primary/20 via-dark-bg to-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">HELLO!</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
                <span className="text-gradient">I'm Sakshi Varkhede</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-2xl sm:text-3xl text-orange-primary font-semibold">
                {displayText || "Full-Stack Developer"}
                <span className="animate-pulse text-orange-primary">|</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                A versatile developer specializing in AI/ML solutions and a Full stack Enthusiast. Experienced in building intelligent applications and modern web systems, with a strong focus on  machine learning ,Deep Learning , and professional prompt engineering. Skilled in crafting effective prompts that maximize AI model performance and deliver precise, high-quality results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-8"
            >
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 flex gap-4"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-orange-primary text-white font-semibold rounded-lg hover:bg-orange-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-primary/50"
              >
                Let's Connect
              </a>
              <a
                href="/resume.pdf"
                download="Sakshi_Varkhede__resume.pdf"
                className="inline-block px-8 py-4 bg-transparent border-2 border-orange-primary text-orange-primary font-semibold rounded-lg hover:bg-orange-primary hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-primary/50"
              >
                <Download size={20} className="inline mr-2" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {!imageError ? (
                <div className="relative">
                    <Image
                      src="/profile.jpg"
                      alt="Sakshi Varkhede"
                      width={400}
                      height={480}
                      className="w-auto h-[400px] sm:h-[480px] object-contain profile-image-style"
                      priority
                      onError={() => setImageError(true)}
                    />
                </div>
              ) : (
                <div className="w-96 h-96 bg-gradient-to-br from-orange-primary/20 to-dark-card flex items-center justify-center text-6xl sm:text-7xl font-bold text-gradient">
                  SV
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
