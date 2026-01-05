import Header from "./components/Header";
import BackgroundGif from "./components/BackgroundGif";
import HeroSection from "./components/HeroSection";
import SelectedWork from "./components/SelectedWork";
import AboutSection from "./components/AboutSection";
import GetInTouchLanding from "./components/GetInTouchLanding";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Background GIF - fixed behind all content */}
      <BackgroundGif />
      
      {/* Header - fixed on top */}
      <Header />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        
        {/* Spacer to show background GIF */}
        <div className="h-screen" />
        
        <SelectedWork />
        <AboutSection />
        <GetInTouchLanding />
      </main>
    </div>
  );
}
