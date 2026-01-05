export default function AboutHeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-between px-6 py-12 bg-black text-white">
      {/* Hero text */}
      <div className="flex-1 flex items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-roc-grotesk font-bold leading-tight tracking-tight max-w-6xl">
          COLLABORATED WITH BRANDS LIKE GUARANÁ JESUS, NESTLÉ, LICOR 43, BECK&apos;S, SPLENDA AND MORE.
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="flex items-center gap-2 font-bootzy text-xs tracking-[0.15em] uppercase">
        <span>SCROLL TO VIEW MORE</span>
        <span>↓</span>
      </div>
    </section>
  );
}
