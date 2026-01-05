import Header from "../components/Header";
import BackgroundGif from "../components/BackgroundGif";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutStatsSection from "../components/AboutStatsSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import GetInTouchSection from "../components/GetInTouchSection";
import Footer from "../components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Background GIF - fixed behind all content */}
      <BackgroundGif />

      {/* Header - fixed on top */}
      <Header />

      {/* Main content */}
      <main className="relative z-10">
        <AboutHeroSection />

        {/* Spacer to show background GIF */}
        <div className="h-screen" />

        <AboutStatsSection />

        {/* Spacer to show background GIF */}
        <div className="h-screen" />

        <WorkExperienceSection />

        <GetInTouchSection />

        {/* Footer */}
        <footer className="relative z-10 px-6 py-8 bg-black text-white border-t border-white/20">
          <div className="flex items-center justify-between font-bootzy text-xs tracking-[0.15em] uppercase">
            <Link
              href="mailto:placeholder@email.com"
              className="hover:opacity-70 transition-opacity"
            >
              LET&apos;S CREATE TOGETHER
            </Link>
            <Link
              href="https://linkedin.com/in/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              JYUEBRIAN
            </Link>
            <span>MADE BY INÁCIO</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
