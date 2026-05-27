import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-black px-6 py-24">
      <div className="absolute inset-0 hero-grid-pattern opacity-40" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.75) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 swiss-container flex flex-col items-center text-center max-w-2xl">
        <p className="font-nohemi text-xs font-medium uppercase tracking-[0.35em] text-white/40 mb-6">
          Error 404
        </p>
        <h1 className="font-harmond text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white mb-4">
          Lost in the grid
        </h1>
        <p className="font-nohemi text-lg md:text-xl text-white/55 leading-relaxed mb-10">
          This page doesn&apos;t exist or was moved. Head back to the portfolio
          home.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-nohemi text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-accent-blue/60 hover:bg-white/10"
          data-cursor-hover
        >
          Back to home
          <svg
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
