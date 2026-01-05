import Link from "next/link";
import MagnifyText from "./MagnifyText";

export default function GetInTouchLanding() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 py-16 z-10">
      <div>
        <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white mb-12 block">
          GET IN TOUCH
        </span>
        <div className="space-y-6">
          <Link href="tel:+5598985045688" className="block group">
            <div className="flex items-baseline gap-4">
              <MagnifyText 
                text="+55 98 98504-5688"
                className="font-roc-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-white"
              />
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white">
                CALL
              </span>
            </div>
          </Link>
          <Link href="mailto:placeholder@email.com" className="block group">
            <div className="flex items-baseline gap-4">
              <MagnifyText 
                text="Got a brief?"
                className="font-roc-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-white"
              />
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white">
                MAIL
              </span>
            </div>
          </Link>
          <Link
            href="https://linkedin.com/in/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex items-baseline gap-4">
              <MagnifyText 
                text="LinkedIn"
                className="font-roc-grotesk text-4xl md:text-6xl lg:text-7xl font-bold text-white"
              />
              <span className="font-bootzy text-xs tracking-[0.15em] uppercase text-white">
                CHAT
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-8 border-t border-white/20 mt-16">
        <div className="flex items-center justify-between font-bootzy text-xs tracking-[0.15em] uppercase text-white">
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
            LINKEDIN
          </Link>
          <span>©{currentYear}</span>
        </div>
      </footer>
    </section>
  );
}
