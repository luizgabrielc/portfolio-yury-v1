import Image from "next/image";
import Footer from "./Footer";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] flex flex-col justify-between pt-24 pb-6 px-6 z-10 bg-[#f6f3ec]">
      {/* Hero content */}
      <div className="flex flex-col justify-center flex-1">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bootzy-ttf font-bold leading-none tracking-[12px] flex items-center gap-4">
          <span>ART</span>
          <span className="relative inline-block w-20 h-16 md:w-28 md:h-24 lg:w-36 lg:h-32 mb-3">
            <Image
              src="/resources/media/tiger.gif"
              alt="Tiger animation"
              fill
              className="object-contain"
              unoptimized
            />
          </span>
          <span>DIRECTOR</span>
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bootzy-ttf font-bold leading-none mt-2 tracking-[12px]">
          FLUENT IN SOCIAL
        </h2>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bootzy-ttf font-bold leading-none tracking-[12px]">
          & CONCEPT FREAK
        </h2>
      </div>

      {/* Footer */}
      <Footer variant="hero" />
    </section>
  );
}
