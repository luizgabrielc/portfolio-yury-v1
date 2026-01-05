import Image from "next/image";
import Link from "next/link";
import MagnifyText from "./MagnifyText";

export default function GetInTouchSection() {
  return (
    <section className="relative min-h-screen px-6 py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/resources/media/bg.gif"
          alt="Background"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white mb-12 block">
          GET IN TOUCH
        </span>

        <div className="space-y-8">
          {/* Phone */}
          <Link href="tel:+5598985045688" className="block group">
            <div className="flex items-baseline gap-4">
              <MagnifyText 
                text="+55 98 98504-5688"
                className="font-roc-grotesk text-5xl md:text-7xl lg:text-8xl font-bold text-white"
              />
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white">
                CALL
              </span>
            </div>
          </Link>

          {/* Email */}
          <Link href="mailto:placeholder@email.com" className="block group">
            <div className="flex items-baseline gap-4">
              <MagnifyText 
                text="Got a brief?"
                className="font-roc-grotesk text-5xl md:text-7xl lg:text-8xl font-bold text-white"
              />
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white">
                MAIL
              </span>
            </div>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com/in/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex items-baseline gap-4">
              <MagnifyText 
                text="LinkedIn"
                className="font-roc-grotesk text-5xl md:text-7xl lg:text-8xl font-bold text-white"
              />
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white">
                CHAT
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
