"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building, Trophy, Award, User, Settings } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Engineering in Artificial Intelligence & Data Science",
    institution: "Savitribai Phule Pune University | Matoshri College of Engineering, Nashik (Maharashtra)",
    duration: "July 2022 - Jun 2025",
    performance: "CGPA: 8.76/10",
    achievements: ["Dean's List", "Technical & MarketingClub Member"],
    icon: Settings,
  },
  {
    degree: "HSC",
    institution: "Janta English School and  Jr. college, Saikheda (Maharashtra)",
    duration: "July 2019 - Jun 2021",
    performance: "Percentage: 85%",
    achievements: ["Academic Excellence Award"],
    icon: GraduationCap,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Education
          </h2>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-dark-card rounded-xl p-6 border border-dark-border card-glow-hover"
              >
                <div className="flex gap-6">
                  {/* Purple Icon Square */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Icon className="text-white w-8 h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    {/* Degree Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-white text-sm sm:text-base mb-4">
                      {edu.institution}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-2">
                      <Building size={16} />
                      <span>{edu.duration}</span>
                    </div>

                    {/* Performance */}
                    <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
                      <Trophy size={16} />
                      <span>{edu.performance}</span>
                    </div>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-white text-xs sm:text-sm"
                        >
                          <Award size={12} />
                          {achievement}
                        </span>
                      ))}
                    </div>
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

