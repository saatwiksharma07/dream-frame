import HeroSection from "./components/HeroSection";
import ScrollSequence from "./components/ScrollSequence";
import LogoMarquee from "./components/LogoMarquee";
import BentoGrid from "./components/BentoGrid";
import "./components/sections.css";

export default function Home() {
  return (
    <main className="relative bg-[#08080e] overflow-x-clip text-white min-h-screen">
      {/* 1. Existing Hero with Scroll Canvas Animation */}
      <ScrollSequence>
        <HeroSection />
      </ScrollSequence>

      {/* 2. Infinite Logo Carousel Section */}
      <LogoMarquee />

      {/* 3. Bento Grid Section matching reference architecture */}
      <BentoGrid />
    </main>
  );
}
