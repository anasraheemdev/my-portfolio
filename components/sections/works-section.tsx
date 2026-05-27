"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

export function WorksSection() {
  const projects = [
    {
      title: "NeuroScout — Virtual CEO System",
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2340&auto=format&fit=crop",
      category: "Agentic AI",
      description:
        "Autonomous AI agent for startups: lead generation, customer research, and marketing strategy using a multi-agent framework.",
      link: "https://obrixlabs.com/",
    },
    {
      title: "Early Cancer Education Chatbot",
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2340&auto=format&fit=crop",
      category: "RAG · Flask · GROQ Llama 3",
      description:
        "AI chatbot for cancer education using RAG, LangChain, FAISS, and the Llama 3 API.",
      link: "https://github.com/anasraheemdev/Early-Cancer-Detection-RAG-Model",
    },
    {
      title: "Fake Job Posting Detector",
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2340&auto=format&fit=crop",
      category: "Machine Learning",
      description:
        "ML web app using Random Forest and TF-IDF to flag fraudulent job listings.",
      link: "https://github.com/anasraheemdev/fake-jobs-detector",
    },
    {
      title: "Facial Attendance System",
      src: "https://images.unsplash.com/photo-1504384308090-c54be3855836?q=80&w=2340&auto=format&fit=crop",
      category: "Computer Vision · Desktop",
      description:
        "Desktop app with real-time face recognition using OpenCV and a Tkinter GUI.",
      link: "https://github.com/anasraheemdev/facial-attendance-with-gui",
    },
    {
      title: "Automated Customer Research Robot",
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      category: "AI Automation",
      description:
        "Automation extracting contacts from LinkedIn, Facebook, and Instagram with relationship management and Excel export.",
    },
    {
      title: "Brain-Computer Interface Headset",
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=2340&auto=format&fit=crop",
      category: "Research Prototype",
      description:
        "Prototype interpreting brainwave signals into executable commands with bone conduction feedback.",
    },
    {
      title: "University Community App",
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2340&auto=format&fit=crop",
      category: "Full-Stack Platform",
      description:
        "Full-stack platform for student communication and collaboration (500+ users).",
    },
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Selected Works
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              AI systems, full-stack applications, and automation tools from
              research prototypes to production-ready builds.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Projects grid */}
        <FocusCards cards={projects} />

        {/* View all link */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/anasraheemdev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-nohemi text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            <span>View All on GitHub</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
