export default function AboutStatsSection() {
  return (
    <section className="relative px-6 py-24 bg-black text-white">
      {/* About text */}
      <div className="mb-16">
        <span className="font-bootzy text-xs tracking-[0.15em] uppercase mb-8 block">
          ABOUT
        </span>
        <p className="font-bootzy text-3xl md:text-4xl lg:text-5xl leading-relaxed max-w-5xl">
          I&apos;m Hyago Yury, an Art Director and Illustrator graduated from CEUMA University, based in São Luís, Maranhão, Brazil. I&apos;m passionate about creating visual narratives that blend art direction, illustration, and motion design to tell compelling stories. My work is driven by a deep love for Brazilian culture, contemporary trends, and the belief that great design should make people feel something real.
        </p>
      </div>

      {/* Stats grid */}
      <div className="space-y-12 border-t border-white/20 pt-12">
        {/* Stat 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-white/20 pb-12">
          <div>
            <span className="font-roc-grotesk text-7xl md:text-9xl font-bold">15+</span>
          </div>
          <div className="flex items-end">
            <p className="font-bootzy text-xl md:text-2xl leading-relaxed">
              Brands collaborated with including Guaraná Jesus, Nestlé, Beck&apos;s, Licor 43, Splenda, and various regional and national campaigns. My experience spans across food & beverage, lifestyle, events, and packaging design. I&apos;ve worked on everything from social media campaigns to large-scale brand activations, always bringing a unique blend of concept and craft to each project.
            </p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="font-roc-grotesk text-7xl md:text-9xl font-bold">6+</span>
          </div>
          <div className="flex items-end">
            <p className="font-bootzy text-xl md:text-2xl leading-relaxed">
              Years of experience creating social-first campaigns, branded content, and visual identities rooted in concept, culture, and current trends. I specialize in crafting work that lives at the intersection of art direction, illustration, and motion design. My process involves deep research into cultural moments, combined with a hands-on approach to visual craft that ensures every project feels fresh, authentic, and emotionally resonant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
