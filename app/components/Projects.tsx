"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "sign-language-recognition",
    title: "Sign Language Recognition & Interactive Communication System",
    description: "Deep learning–based system recognizing sign gestures & enabling interactive communication for the hearing impaired.",
    stack: ["CNN" , "OpenCV", "Python"],
    category: "AI/ML",
  },
  {
    id: "soil-crop-recommendation",
    title: "Soil-Based Crop Recommendation System Using Sensors",
    description: "IoT sensors detect NPK ratio and recommend the ideal crop for optimal agricultural yield using machine learning.",
    stack: ["Python", "ML", "IoT Sensors", "Random Forest"],
    category: "AI/ML & IoT",
  },
  {
    id: "ai-prompt-generator",
    title: "AI-Based Prompt Generator",
    description: "Generates optimized prompts for AI models using LLMs, helping users create better prompts for various AI applications.",
    stack: ["Next.js", "Tailwind", "OpenRouter/ChatGPT API"],
    category: "Full-Stack & AI/ML",
  },
  {
    id: "ai-budget-tracker",
    title: "AI-Based Budget Tracker",
    description: "Smart ML-powered budget assistant for expense classification & predictions, helping users manage finances intelligently.",
    stack: ["Next.js", "Python ML Models"],
    category: "Full-Stack & ML",
  },
  {
    id: "scriptify-ai",
    title: "Scriptify AI",
    description: "AI-powered content creation platform for influencers and creators. Built with Next.js, TypeScript, and GPT-4o to generate scripts for YouTube, Reels, and podcasts from uploaded research files.",
    stack: ["Next.js", "TypeScript", "GPT-4o", "Authentication"],
    category: "Full-Stack & AI/ML",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Showcasing my work in AI/ML and Full-Stack Development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="bg-dark-card rounded-xl p-6 border border-dark-border card-glow-hover h-full flex flex-col relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-primary/5 via-transparent to-orange-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 bg-orange-primary text-white text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink
                      size={20}
                      className="text-orange-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 mb-4 flex-grow leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-bg border border-dark-border rounded text-xs text-gray-300 hover:border-orange-primary hover:text-orange-primary transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center text-orange-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      <span>View Details</span>
                      <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

