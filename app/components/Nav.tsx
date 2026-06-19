import Image from "next/image";

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="inline-flex items-center gap-6 rounded-full border border-dark/10 bg-cream/80 py-2.5 pl-5 pr-2.5 shadow-sm backdrop-blur-md">
        <a href="#top" aria-label="Protégé — home" className="flex items-center">
          <Image
            src="/Wordmark%20Black.png"
            alt="Protégé"
            width={967}
            height={279}
            priority
            className="h-5 w-auto"
          />
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href="#how-it-works"
            className="hidden rounded-full px-3 py-1.5 text-sm text-dark/70 transition-colors hover:text-dark sm:inline-block"
          >
            How it works
          </a>
          <a
            href="#trust"
            className="hidden rounded-full px-3 py-1.5 text-sm text-dark/70 transition-colors hover:text-dark sm:inline-block"
          >
            Safety
          </a>
          <a
            href="#signup"
            className="rounded-full bg-orange px-4 py-2 text-sm font-bold text-white transition-transform duration-200 hover:scale-[1.03]"
          >
            Become a mentor
          </a>
        </div>
      </nav>
    </header>
  );
}
