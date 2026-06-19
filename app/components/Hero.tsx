import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen flex-col justify-center px-6 pt-16">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            The creatives you’d want to help are already looking.
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-dark/70 sm:text-xl">
            Protégé connects working creatives in Indianapolis with young people
            who actually want mentorship. You post what you offer, set your
            price, and approve who you take.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href="#signup"
            className="mt-10 inline-block rounded-full bg-orange px-7 py-3.5 text-base font-bold text-white transition-transform duration-200 hover:scale-[1.03]"
          >
            Become a mentor
          </a>
        </Reveal>
      </div>
    </section>
  );
}
