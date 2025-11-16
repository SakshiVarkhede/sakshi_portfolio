"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Code, 
  Database, 
  FileCode, 
  Layers, 
  Terminal,
  Coffee,
  Cpu,
  FileText,
  Palette,
  BarChart3,
  Table
} from "lucide-react";

const skills = [
  { name: "TensorFlow", icon: Brain, color: "text-orange-500" },
  { name: "LLM", icon: Brain, color: "text-teal-400" },
  { name: "RAG", icon: Layers, color: "text-purple-400" },
  { name: "Prompt Engineer", icon: FileText, color: "text-green-400" },
  { name: "NLP", icon: Brain, color: "text-pink-400" },

  { name: "DBMS", icon: Database, color: "text-blue-500" },

  { name: "AI/ML", icon: Brain, color: "text-orange-500" },

  { name: "Tailwind CSS", icon: Layers, color: "text-cyan-400" },
  { name: "Next.js", icon: Code, color: "text-white" },
  
  { name: "TypeScript", icon: FileCode, color: "text-blue-500" },
  { name: "Python", icon: Code, color: "text-yellow-400" },
  { name: "Docker", icon: Terminal, color: "text-blue-300" },
  { name: "Power BI", icon: BarChart3, color: "text-yellow-500" },
  { name: "SQL", icon: Database, color: "text-blue-400" },
  { name: "Excel", icon: Table, color: "text-green-500" },
];

export default function Skills() {
  // Duplicate skills for infinite scroll
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-bg overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Skills
          </h2>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-skills-scroll w-fit">
              {duplicatedSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`${skill.name}-${index}`}
                    className="flex-shrink-0 mx-4 flex flex-col items-center group"
                  >
                    {/* Circular Icon Container */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-dark-card border border-dark-border flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-orange-primary transition-all duration-300">
                      <Icon className={`${skill.color} w-10 h-10 sm:w-12 sm:h-12`} />
                    </div>
                    {/* Label */}
                    <span className="text-white text-xs sm:text-sm text-center max-w-[100px] font-medium">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
