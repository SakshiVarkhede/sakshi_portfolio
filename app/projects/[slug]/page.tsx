import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const projects: Record<
  string,
  {
    title: string;
    description: string;
    longDescription: string;
    stack: string[];
    category: string;
    features?: string[];
    githubUrl?: string;
    liveUrl?: string;
  }
> = {
  "sign-language-recognition": {
    title: "Sign Language Recognition & Interactive Communication System",
    description:
      "Deep learning–based system recognizing sign gestures & enabling interactive communication.",
    longDescription: `This project is a comprehensive deep learning-based system designed to recognize sign language gestures and enable interactive communication for the hearing impaired community. The system uses Convolutional Neural Networks (CNN) to accurately identify and translate sign language gestures in real-time.

The application processes video input through OpenCV, extracts meaningful features using advanced computer vision techniques, and employs TensorFlow-based CNN models to classify gestures. The system can recognize a wide range of sign language gestures and convert them into text or speech, facilitating seamless communication between sign language users and non-signers.

Key technical achievements include implementing real-time gesture recognition, optimizing model performance for low-latency inference, and creating an intuitive user interface for interaction. The project demonstrates expertise in deep learning, computer vision, and practical AI applications for social good.`,
    stack: ["CNN", "TensorFlow", "OpenCV", "Python", "Deep Learning", "Computer Vision"],
    category: "AI/ML",
    features: [
      "Real-time sign language gesture recognition",
      "CNN-based deep learning model for accurate classification",
      "Video processing and feature extraction using OpenCV",
      "Text and speech output for communication",
      "Support for multiple sign language gestures",
      "Optimized for low-latency real-time inference",
    ],
  },
  "soil-crop-recommendation": {
    title: "Soil-Based Crop Recommendation System Using Sensors",
    description:
      "IoT sensors detect NPK ratio and recommend the ideal crop for optimal agricultural yield.",
    longDescription: `This innovative IoT-based agricultural system combines sensor technology with machine learning to provide intelligent crop recommendations based on soil composition. The system uses IoT sensors to measure critical soil parameters, particularly the NPK (Nitrogen, Phosphorus, Potassium) ratio, along with other factors like pH, moisture, and temperature.

The collected sensor data is processed using machine learning algorithms, specifically Random Forest, to analyze soil conditions and recommend the most suitable crops for optimal yield. The system considers various factors including soil nutrient levels, environmental conditions, and historical crop performance data to make accurate recommendations.

This project showcases expertise in IoT integration, sensor data processing, machine learning model development, and creating practical solutions for agricultural challenges. The system helps farmers make data-driven decisions, optimize crop selection, and improve agricultural productivity.`,
    stack: [
      "Python",
      "Machine Learning",
      "IoT Sensors",
      "Random Forest",
      "Data Analysis",
      "Sensor Integration",
    ],
    category: "AI/ML & IoT",
    features: [
      "Real-time NPK ratio detection using IoT sensors",
      "Machine learning-based crop recommendation",
      "Multi-parameter soil analysis (NPK, pH, moisture, temperature)",
      "Random Forest algorithm for accurate predictions",
      "Data visualization and reporting",
      "User-friendly interface for farmers",
    ],
  },
  "ai-prompt-generator": {
    title: "AI-Based Prompt Generator",
    description:
      "Generates optimized prompts for AI models using LLMs, helping users create better prompts.",
    longDescription: `The AI-Based Prompt Generator is a sophisticated web application that leverages Large Language Models (LLMs) to help users create optimized prompts for various AI applications. Built with Next.js and modern web technologies, the application provides an intuitive interface for prompt generation and optimization.

The system uses advanced LLM APIs (OpenRouter/ChatGPT) to analyze user input and generate enhanced, contextually relevant prompts. It helps users improve their prompt engineering skills by suggesting optimizations, variations, and improvements to their original prompts. The application supports various use cases including creative writing, technical documentation, code generation, and more.

This project demonstrates full-stack development expertise, API integration, modern React patterns, and understanding of LLM capabilities. The clean, responsive UI built with Tailwind CSS ensures an excellent user experience across all devices.`,
    stack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "OpenRouter API",
      "ChatGPT API",
      "LLMs",
    ],
    category: "Full-Stack",
    features: [
      "AI-powered prompt generation and optimization",
      "Integration with multiple LLM APIs (OpenRouter, ChatGPT)",
      "Real-time prompt suggestions and improvements",
      "Modern, responsive UI with Tailwind CSS",
      "Prompt history and management",
      "Export and share functionality",
    ],
    githubUrl: "https://github.com/SakshiVarkhede/ai-prompt-generator",
  },
  "ai-budget-tracker": {
    title: "AI-Based Budget Tracker",
    description:
      "Smart ML-powered budget assistant for expense classification & predictions.",
    longDescription: `The AI-Based Budget Tracker is an intelligent financial management application that combines machine learning with modern web development to provide smart expense tracking and budget predictions. The application automatically classifies expenses using ML models, predicts future spending patterns, and provides actionable insights for better financial management.

Built with Next.js for the frontend and Python-based ML models for intelligent analysis, the system processes transaction data to identify spending patterns, categorize expenses automatically, and generate predictions about future financial needs. The ML models use historical data to learn user spending habits and provide personalized recommendations.

This project showcases expertise in full-stack development, machine learning integration, data processing, and creating practical applications that solve real-world problems. The application helps users gain better control over their finances through intelligent automation and predictive analytics.`,
    stack: [
      "Next.js",
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Expense Classification",
      "Predictive Analytics",
    ],
    category: "Full-Stack & ML",
    features: [
      "Automatic expense classification using ML models",
      "Spending pattern analysis and predictions",
      "Budget recommendations based on historical data",
      "Interactive dashboards and visualizations",
      "Real-time expense tracking",
      "Financial insights and reports",
    ],
    githubUrl: "https://github.com/SakshiVarkhede/ai-budget-tracker",
  },
  "scriptify-ai": {
    title: "Scriptify AI",
    description:
      "AI-powered content creation platform for influencers and creators. Built with Next.js, TypeScript, and GPT-4o to generate scripts for YouTube, Reels, and podcasts from uploaded research files.",
    longDescription: `Scriptify AI is a comprehensive AI-powered content creation platform designed specifically for influencers and content creators. The platform leverages the power of GPT-4o to transform research materials into engaging scripts for various content formats including YouTube videos, Instagram Reels, and podcasts.

Built with Next.js and TypeScript, Scriptify AI provides a robust and scalable solution for content creators who need to streamline their scriptwriting process. Users can upload research files in multiple formats including PDF, DOCX, and audio files, which the platform then processes using advanced AI to extract key information and generate tailored scripts.

The platform includes a suite of AI-powered helper tools designed to enhance content creation workflows. These include intelligent video hook generators that create compelling opening lines, hashtag generators that suggest relevant tags for maximum reach, content idea generators that spark creativity, and content calendar tools that help creators plan and organize their content strategy.

Scriptify AI features comprehensive user authentication and secure file management, ensuring that creators' work and research materials are protected. The platform also includes history tracking, allowing users to review past scripts, access previous research files, and maintain a complete record of their content creation journey.

This project demonstrates expertise in full-stack development, AI integration, file processing, user authentication, and creating practical solutions that address real-world needs in the content creation industry.`,
    stack: [
      "Next.js",
      "TypeScript",
      "GPT-4o",
      "PDF Processing",
      "DOCX Processing",
      "User Authentication",
      "File Management",
      "History Tracking",
    ],
    category: "Full-Stack & AI/ML",
    features: [
      "AI-powered script generation for YouTube, Reels, and podcasts",
      "Multi-format file upload support (PDF, DOCX, audio)",
      "AI helpers for video hooks, hashtags, and content ideas",
      "Content calendar planning and organization",
      "User authentication and secure file management",
      "Complete history tracking for scripts and research files",
      "GPT-4o integration for advanced content generation",
    ],
  },
};

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-orange-primary hover:text-orange-light transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-orange-primary text-white text-sm font-semibold rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gradient">{project.title}</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4 mb-8">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-dark-card border border-dark-border rounded-lg text-gray-300 hover:text-orange-primary hover:border-orange-primary transition-all duration-300"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                  <ExternalLink size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-primary text-white font-semibold rounded-lg hover:bg-orange-light hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] transition-all duration-300"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          )}

          {/* Long Description */}
          <div className="bg-dark-card rounded-2xl p-8 sm:p-10 border border-dark-border card-glow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-primary">About This Project</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="bg-dark-card rounded-2xl p-8 sm:p-10 border border-dark-border card-glow mb-8">
              <h2 className="text-2xl font-bold mb-6 text-orange-light">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-orange-primary mt-1">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="bg-dark-card rounded-2xl p-8 sm:p-10 border border-dark-border card-glow">
            <h2 className="text-2xl font-bold mb-6 text-orange-primary">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-gray-300 hover:border-orange-primary hover:text-orange-primary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

