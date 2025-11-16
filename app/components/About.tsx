"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const [imageError, setImageError] = useState(false);
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white">
            About Me
          </h2>

          {/* Centered Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex justify-center"
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
                      onError={() => setImageError(true)}
                    />
                </div>
              ) : (
                <div className="w-80 h-80 bg-gradient-to-br from-orange-primary/20 to-dark-card flex items-center justify-center text-5xl sm:text-6xl font-bold text-gradient">
                  SV
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
              Sakshi Varkhede
            </h3>
            <h4 className="text-xl sm:text-2xl text-orange-primary font-semibold mb-6">
              Full-Stack Developer
            </h4>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-dark-card rounded-2xl p-8 sm:p-10 border border-dark-border"
          >
            <div className="prose prose-invert max-w-none text-center">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm <span className="text-orange-primary font-semibold">Sakshi Varkhede</span>, a passionate 
                Full-Stack Developer and AI/ML Engineer currently pursuing my B.Tech in AI & Data Science. 
                I specialize in building modern web applications using Next.js and developing intelligent systems 
                powered by machine learning and deep learning.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                My expertise spans across the full technology stack—from crafting responsive frontends with Next.js 
                and Tailwind CSS to implementing complex AI/ML models using PyTorch, TensorFlow, and various data 
                science libraries. I'm proficient in working with Large Language Models (LLMs) and have hands-on 
                experience with cutting-edge AI tools. I'm very good at prompting in a professional way, crafting 
                effective prompts that maximize AI model performance and deliver precise, high-quality results.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm driven by the intersection of artificial intelligence and practical applications, constantly 
                exploring new ways to solve real-world problems through innovative technology solutions.
              </p>

              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-orange-primary text-white font-semibold rounded-lg hover:bg-orange-light transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-primary/50"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
