import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative z-10 bg-[#f6f3ec] px-6 py-16">
      {/* Section title */}
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-roc-grotesk font-bold tracking-tight mb-12 text-[#010103]">
        ABOUT HYAGO
      </h2>

      {/* Content grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Column 1: Photo */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/resources/media/icon.png"
            alt="Hyago Yury"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Column 2: First paragraph */}
        <div className="flex flex-col justify-start">
          <p className="font-bootzy text-xl md:text-2xl leading-relaxed uppercase tracking-wide text-[#010103]">
            I&apos;m an Art Director and Illustrator graduated from CEUMA University, based in São Luís, Maranhão, Brazil, shaped by creativity to craft something extraordinary.
          </p>
          <p className="font-bootzy text-xl md:text-2xl leading-relaxed uppercase tracking-wide text-[#010103] mt-6">
            With over 6 years of experience creating campaigns and content, I&apos;ve helped brands stay culturally sharp and creatively bold, working across industries from advertising to various collaborations.
          </p>
        </div>

        {/* Column 3: Second paragraph + Read More */}
        <div className="flex flex-col justify-between">
          <p className="font-bootzy text-xl md:text-2xl leading-relaxed uppercase tracking-wide text-[#010103]">
            My process is a blend of obsession with visual craft, illustration passion, and the belief that good work makes people feel something.
          </p>

          <Link
            href="/about"
            className="group inline-flex items-start gap-2 font-bootzy text-sm tracking-[0.15em] uppercase text-[#010103] hover:opacity-70 transition-opacity mt-8 md:mt-0"
          >
            <span className="rollover-container">
              <span className="rollover-text">
                <span className="rollover-item">READ MORE</span>
                <span className="rollover-item">READ MORE</span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
