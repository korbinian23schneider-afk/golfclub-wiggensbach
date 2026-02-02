import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gc-gold/20 bg-gc-dark-green text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gc-gold">Golfclub Waldegg-Wiggensbach</p>
            <p className="mt-1 text-sm text-white/70">
              Golf auf höchstem Niveau in den Allgäuer Alpen
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-gc-gold">
              Start
            </Link>
            <Link href="/course" className="hover:text-gc-gold">
              Platz
            </Link>
            <Link href="/gastronomie" className="hover:text-gc-gold">
              Gastronomie
            </Link>
            <Link href="/golfschule" className="hover:text-gc-gold">
              Golfschule
            </Link>
          </nav>
        </div>
        <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Golfclub Waldegg-Wiggensbach
        </div>
      </div>
    </footer>
  );
}
