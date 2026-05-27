"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const timelineData = [
    {
      title: "01",
      date: "Mar 2024 – Present",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Project Manager — Obrix Labs
          </h4>
          <p className="font-nohemi text-sm text-white/50">Islamabad, Pakistan</p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Led 5+ AI-driven product initiatives from concept to deployment
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Managed cross-functional teams of 8+ members
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Agile delivery practices improving efficiency by ~35%
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Stakeholder coordination for agentic AI systems serving 1000+ users
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "02",
      date: "Feb 2022 – Present",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Jr. Developer — Synovate Technologies
          </h4>
          <p className="font-nohemi text-sm text-white/50">Islamabad, Pakistan</p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Built 10+ full-stack web apps (MERN, Laravel, WordPress)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Integrated AI automation: chatbots and BI dashboards
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "03",
      date: "Jul 2023 – Jan 2024",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Website Developer — FI Consultancy
          </h4>
          <p className="font-nohemi text-sm text-white/50">Islamabad, Pakistan</p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Responsive sites with HTML, CSS, JavaScript, React.js
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              SEO strategy and REST API integrations
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "04",
      date: "Sep – Nov 2025",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Research Assistant (Medical AI) — FCPS Scholar Project
          </h4>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              AI system for cervical cancer detection using CNN and ResNet50
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "05",
      date: "Education",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Degrees
          </h4>
          <ul className="space-y-3 font-nohemi text-sm text-white/50">
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue mt-2 shrink-0" />
              <span>
                <span className="text-white/70">BS Artificial Intelligence</span>{" "}
                — Air University, Islamabad (2024–2028)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue mt-2 shrink-0" />
              <span>
                <span className="text-white/70">Intermediate in Computer Science</span>{" "}
                — Army Public School, Islamabad (2022–2024)
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "06",
      date: "Certifications",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Professional Learning
          </h4>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Deep Learning Specialization — Coursera / Stanford (2024)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              HTML, CSS, and JavaScript for Web Developers — Johns Hopkins (2023)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue shrink-0" />
              Prompt Engineering for Meta Llama — DeepLearning.AI (2025)
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div>
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              Background
            </span>
            <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Experience
            </h2>
            <p className="font-nohemi text-lg text-white/50 max-w-xl">
              Roles across AI product delivery, full-stack engineering, and
              research—plus formal education and certifications.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
