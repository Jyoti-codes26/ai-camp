"use client";

import SakuraEditorialPoster, {
  SakuraEditorialKeyword,
} from "@/components/ui/sakura-editorial-poster";

interface HeroSectionProps {
  name?: string;
  headline?: string;
  location?: string;
  previewMode?: boolean;
}

const PORTFOLIO_HERO_KEYWORDS: SakuraEditorialKeyword[] = [
  { label: "AI & ML" },
  { label: "CYBERSECURITY" },
  { label: "SYSTEMS C" },
];

export default function HeroSection({
  name = "JYOTIRMAYEE",
  headline = "Engineering Resilient Intelligence | AI & Cybersecurity Researcher",
  location = "Gunupur, Odisha, India",
  previewMode = false,
}: HeroSectionProps) {
  return (
    <div className="relative w-full overflow-hidden" id="hero">
      {/* Sakura Editorial Poster Hero Experience */}
      <SakuraEditorialPoster
        title={name}
        keywords={PORTFOLIO_HERO_KEYWORDS}
        headline={headline}
        body="Student at GIET University Gunupur pursuing CSE AI & ML. Building secure, robust algorithms and studying computing architecture from first principles."
        subheadline={`Based in ${location} · Open to Roles & Research Collaborations`}
        footerLeft="GIET University"
        footerCenter="CSE AI & ML"
        footerRight="Portfolio 2026"
        socialHandle="jio1jyoti@gmail.com"
        sceneSrc="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1920&q=80"
        foregroundSrc="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80"
        height="180vh"
        preview={previewMode}
        className="w-full"
      />
    </div>
  );
}
