import Image from "next/image";

const experiences = [
  {
    role: "Creative Art Director",
    company: "VML",
    period: "2024 — NOW",
  },
  {
    role: "Creative Art Director",
    company: "VML Y&R",
    period: "2022 — 2024",
  },
  {
    role: "Junior Art Director",
    company: "HEADS PROPAGANDA",
    period: "2021 — 2022",
  },
  {
    role: "Art Assistant",
    company: "HEADS PROPAGANDA",
    period: "2021",
  },
  {
    role: "Art and Audiovisual Intern",
    company: "AGENCIA PRATICA - UNIT",
    period: "2019 — 2020",
  },
  {
    role: "Art and Audiovisual Intern",
    company: "SALESIANO ARACAJU",
    period: "2019",
  },
];

export default function WorkExperienceSection() {
  return (
    <section className="relative px-6 py-24 bg-black text-white border-t border-white/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column - Work experience list */}
        <div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-roc-grotesk font-bold tracking-tight mb-12">
            WORK EXPERIENCE
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="border-b border-white/20 pb-8">
                <h3 className="font-roc-grotesk text-xl md:text-2xl font-bold mb-2">
                  {exp.role}
                </h3>
                <p className="font-bootzy text-sm tracking-[0.15em] uppercase mb-2">
                  ({exp.company})
                </p>
                <p className="font-bootzy text-sm text-white/70">
                  {exp.period}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Decorative images */}
        <div className="grid grid-cols-2 gap-4 auto-rows-[200px]">
          <div className="relative row-span-2 overflow-hidden rounded">
            <Image
              src="/resources/Work 2/SJGJ-1.png"
              alt="Work sample"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded">
            <Image
              src="/resources/Work 4/licor-garrafa.png"
              alt="Work sample"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
