"use client";

import React, { useEffect, useRef, useState, memo } from "react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

// Optimized dotted glow background - only draws when visible
const DottedGlowBackground = memo(function DottedGlowBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = canvasRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const ctx = el.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stopped = false;
    let isVisible = false;

    const gap = 16; // Increased gap for fewer dots
    const radius = 1;
    const opacity = 0.4;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      el.width = Math.floor(width);
      el.height = Math.floor(height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    // Intersection observer - only animate when visible
    const io = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? false;
        if (isVisible && !raf) {
          raf = requestAnimationFrame(draw);
        }
      },
      { threshold: 0.1 }
    );
    io.observe(container);

    let dots: { x: number; y: number; phase: number }[] = [];

    const regenDots = () => {
      dots = [];
      const { width, height } = container.getBoundingClientRect();
      const cols = Math.ceil(width / gap) + 1;
      const rows = Math.ceil(height / gap) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gap;
          const y = j * gap;
          const phase = Math.random() * Math.PI * 2;
          dots.push({ x, y, phase });
        }
      }
    };

    regenDots();

    const draw = (now: number) => {
      if (stopped || !isVisible) {
        raf = 0;
        return;
      }
      
      const { width, height } = container.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#3b82f6";

      const time = now / 2000; // Slower animation
      for (const d of dots) {
        const mod = (time + d.phase) % 2;
        const lin = mod < 1 ? mod : 2 - mod;
        const a = 0.1 + 0.5 * lin;

        ctx.globalAlpha = a * opacity;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "absolute", inset: 0 }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
});

// Simple CSS-based flipping email
function FlippingEmail({ email }: { email: string }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <a
      href={`mailto:${email}`}
      className="relative inline-block cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      data-cursor-hover
    >
      <div
        className="relative preserve-3d transition-transform duration-300"
        style={{
          transform: isFlipped ? "rotateX(180deg)" : "rotateX(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="font-nohemi text-lg md:text-xl text-white/60 hover:text-white transition-colors backface-hidden"
        >
          Email Me →
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 font-nohemi text-lg md:text-xl text-white backface-hidden"
          style={{ transform: "rotateX(180deg)" }}
        >
          {email}
        </div>
      </div>
    </a>
  );
}

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/anasraheemdev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anasraheem/" },
  { label: "Website", href: "https://obrixlabs.com/" },
] as const;

export function FooterSection() {
  const email = "anasraheem48@gmail.com";

  return (
    <footer
      id="contact"
      className="relative w-full bg-black"
    >
      {/* Dotted glow background */}
      <DottedGlowBackground className="pointer-events-none opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]" />

      {/* Gradient glow from center */}
      <div className="absolute inset-0 bg-gradient-radial from-accent-blue/10 via-transparent to-transparent pointer-events-none" />

      <div className="swiss-container relative z-10 py-20 md:py-32">
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Section label */}
          <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-8">
            Let&apos;s Connect
          </span>

          {/* Big CTA headline - Massive Harmond Typography */}
          <h2 className="font-harmond text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[12vw] font-bold tracking-tight text-white leading-[0.8] mb-8"
            style={{
              textShadow: "0 0 100px rgba(59,130,246,0.3), 0 0 200px rgba(139,92,246,0.2)",
            }}
          >
            LET&apos;S
            <br />
            TALK
          </h2>

          {/* Subtext */}
          <p className="font-nohemi text-lg md:text-xl text-white/50 max-w-lg mb-4">
            Based in Islamabad, Pakistan. Open to AI automation, full-stack, and
            product leadership collaborations.
          </p>
          <p className="font-nohemi text-sm text-white/40 mb-12">
            <a
              href="tel:+923462440356"
              className="hover:text-white/70 transition-colors"
              data-cursor-hover
            >
              +92 346 244 0356
            </a>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* CTA Button with Magnetic Effect */}
            <MagneticButton
              as="a"
              href={`mailto:${email}`}
              strength={0.4}
              className="group"
            >
              <span className={cn(
                "inline-flex items-center gap-3 px-8 py-4 rounded-full",
                "bg-white text-black font-nohemi text-base font-semibold uppercase tracking-wide",
                "transition-all duration-300",
                "group-hover:bg-accent-blue group-hover:text-white",
                "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
              )}>
                Email Me
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/resume.pdf"
              strength={0.4}
              className="group"
            >
              <span
                className={cn(
                  "inline-flex items-center gap-3 px-8 py-4 rounded-full",
                  "border border-white/20 text-white font-nohemi text-base font-semibold uppercase tracking-wide",
                  "transition-all duration-300",
                  "group-hover:border-accent-blue group-hover:bg-white/5"
                )}
              >
                Download Resume
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </span>
            </MagneticButton>
          </div>

          {/* Email flip */}
          <div className="mt-12">
            <FlippingEmail email={email} />
          </div>

          {/* Social links with magnetic effect */}
          <div className="mt-16 flex items-center gap-6 flex-wrap justify-center">
            {SOCIAL_LINKS.map((social) => (
              <MagneticButton
                key={social.label}
                as="a"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                strength={0.5}
              >
                <span className="font-nohemi text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-200 px-2 py-1">
                  {social.label}
                </span>
              </MagneticButton>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full py-8 border-t border-white/10">
        <div className="swiss-container">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="font-nohemi text-xs text-white/40">
              © {new Date().getFullYear()} Muhammad Anas Raheem. All rights
              reserved.
            </p>
            <p className="font-nohemi text-xs text-white/40">
              <a
                href="https://github.com/anasraheemdev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/60 transition-colors"
              >
                GitHub: anasraheemdev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
