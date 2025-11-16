"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, CheckSquare, Trophy, Code, Database, FileCode, Globe } from "lucide-react";

const experiences = [
  {
    title: "Data Science Intern",
    organization: "Wildrex IT SOLUTIONS PVT LTD, Aahilynagar",
    period: "July 2025 - October 2025",
    description: "Developed detection models for different projects. Created AI assistants for various projects to enhance automation and improve user experience. Worked on NEXT.js Fullstack government project, developing scalable web applications with modern technologies.",
    technologies: [
      { name: "Python", icon: Code },
      { name: "Next.js", icon: Globe },
      
    ],
    achievements: [
      "Developed multiple detection models",
      "Created AI assistants for automation",
      "Built scalable government web applications",
    ],
  },
  {
    title: "Digital Marketing Intern",
    organization: "Webfries IT Solutions PVT Ltd, Nashik",
    period: "2024",
    description: "Built a Marketing plan and strategies for a client and optimized it for SEO and digital marketing.",
    technologies: [
     
      { name: "SEO", icon: Globe },
      { name: "Screaming Frog SEO Spider", icon: Globe },
      { name: "Digital Marketing", icon: Code },
    ],
    achievements: [
      "Built a Marketing plan and strategies for a client",
      "Optimized it for SEO and digital marketing",
    ],
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My projects and work experience
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-dark-card rounded-xl p-6 border border-dark-border card-glow-hover"
              >
                <div className="flex gap-6">
                  {/* Purple Icon Square */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-white w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    {/* Job Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 text-white text-sm sm:text-base mb-2">
                      <Building2 size={16} className="text-white" />
                      <span>{exp.organization}</span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    {/* Description */}
                    <div className="flex items-start gap-2 text-gray-300 text-sm sm:text-base mb-4">
                      <CheckSquare size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                      <p className="leading-relaxed">{exp.description}</p>
                    </div>

                    {/* Technologies */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => {
                          const TechIcon = tech.icon;
                          return (
                            <span
                              key={techIndex}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500 rounded-lg text-white text-xs sm:text-sm font-medium"
                            >
                              <TechIcon size={14} />
                              {tech.name}
                            </span>
                          );
                        })}
                      </div>
                    )}

                    {/* Achievements */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                            <Trophy size={16} className="text-purple-400 flex-shrink-0" />
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
