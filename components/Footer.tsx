import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gc-gold/20 bg-gradient-to-br from-gc-dark-green to-[#0f2418] text-white/90 shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.15)]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gc-gold text-lg">Golfclub Waldegg-Wiggensbach</p>
            <p className="mt-1 text-sm text-white/80 leading-relaxed">
              Golf auf höchstem Niveau in den Allgäuer Alpen
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="transition-all duration-300 hover:text-gc-gold hover:underline underline-offset-4">
              Start
            </Link>
            <Link href="/course" className="transition-all duration-300 hover:text-gc-gold hover:underline underline-offset-4">
              Platz
            </Link>
            <Link href="/gastronomie" className="transition-all duration-300 hover:text-gc-gold hover:underline underline-offset-4">
              Gastronomie
            </Link>
            <Link href="/academy" className="transition-all duration-300 hover:text-gc-gold hover:underline underline-offset-4">
              Golfschule
            </Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} Golfclub Waldegg-Wiggensbach
            </p>
            <nav className="flex flex-wrap justify-center gap-4 text-xs">
              <Link href="/impressum" className="text-white/60 transition-all duration-300 hover:text-gc-gold hover:underline underline-offset-4">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-white/60 transition-all duration-300 hover:text-gc-gold hover:underline underline-offset-4">
                Datenschutz
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
