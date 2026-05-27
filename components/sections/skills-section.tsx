"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  IconCode,
  IconPalette,
  IconDeviceLaptop,
  IconRocket,
  IconBrandThreejs,
  IconApiApp,
} from "@tabler/icons-react";

interface SkillCardProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Skill card with glowing border gradient effect
const SkillCard = memo(function SkillCard({
  area,
  icon,
  title,
  description,
}: SkillCardProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black-50">
        {/* Glowing border gradient effect */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />
        
        <div
          className={cn(
            "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8",
            "bg-gradient-to-br from-white/[0.03] to-transparent"
          )}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            {/* Icon */}
            <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-3">
              {icon}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="font-harmond text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="font-nohemi text-sm md:text-base text-white/50">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});

export function SkillsSection() {
  const skills = [
    {
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: <IconCode className="h-6 w-6 text-accent-blue" />,
      title: "Full-Stack Development",
      description:
        "Building end-to-end products with React, Node.js/Express, Flask/Laravel, and modern databases.",
    },
    {
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: <IconPalette className="h-6 w-6 text-accent-blue" />,
      title: "Product Delivery",
      description:
        "Leading cross-functional execution with Agile/Scrum, clear communication, and predictable delivery.",
    },
    {
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: <IconBrandThreejs className="h-6 w-6 text-accent-blue" />,
      title: "AI/ML Systems",
      description:
        "Designing and deploying ML solutions using TensorFlow, scikit-learn, and modern LLM tooling.",
    },
    {
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: <IconDeviceLaptop className="h-6 w-6 text-accent-blue" />,
      title: "Automation & Agents",
      description:
        "Building agentic workflows, RAG pipelines, and business automation that scale with your operations.",
    },
    {
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]",
      icon: <IconRocket className="h-6 w-6 text-accent-blue" />,
      title: "Computer Vision",
      description: "Delivering practical CV systems with OpenCV and deep learning (CNN/ResNet-based workflows).",
    },
    {
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
      icon: <IconApiApp className="h-6 w-6 text-accent-blue" />,
      title: "APIs & Data",
      description:
        "Integrating REST APIs, building dashboards/BI pipelines, and shipping data-driven features.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div>
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              Expertise
            </span>
            <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Skills & Services
            </h2>
            <p className="font-nohemi text-lg text-white/50 max-w-xl">
              A balanced skill set across AI, full-stack engineering, and project delivery, built through real product work.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[36rem] xl:grid-rows-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              area={skill.area}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
