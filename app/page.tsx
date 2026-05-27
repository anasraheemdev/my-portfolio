import { FloatingNav } from "@/components/ui/floating-navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorksSection } from "@/components/sections/works-section";
import { ProcessSection } from "@/components/sections/process-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { FooterSection } from "@/components/sections/footer-section";
import { CurtainRevealLayout } from "@/components/curtain-reveal-layout";
import { KineticMarquee } from "@/components/ui/kinetic-marquee";

export default function Home() {
  const navItems = [
    { name: "Work", link: "#work" },
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
  ];

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav navItems={navItems} />

      <CurtainRevealLayout footer={<FooterSection />}>
        {/* Hero Section - The Hook */}
        <HeroSection />

        {/* Kinetic Marquee - Breaking the grid */}
        <div className="relative z-0 overflow-visible py-2 md:py-3">
          <KineticMarquee 
            text="MUHAMMAD ANAS RAHEEM — AI & FULL-STACK — ISLAMABAD, PAKISTAN — AGENTIC AI — "
            baseVelocity={0.5}
            skewFactor={0.8}
          />
        </div>

        {/* About Section - The Pitch */}
        <AboutSection />

        {/* Selected Works - The Core */}
        <WorksSection />

        {/* Kinetic Marquee - Second instance */}
        <div className="relative z-0 overflow-visible py-2 md:py-3">
          <KineticMarquee 
            text="OPEN TO COLLABORATION — AI AUTOMATION — FULL-STACK BUILD — "
            baseVelocity={-0.4}
            skewFactor={0.6}
          />
        </div>

        {/* Process Section - Timeline */}
        <ProcessSection />

        {/* Skills & Services - Bento Grid */}
        <SkillsSection />
      </CurtainRevealLayout>
    </>
  );
}
