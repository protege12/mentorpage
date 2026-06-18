import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function WhatItIs() {
  return (
    <section className="border-t border-dark/10 px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <Eyebrow>What it is</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Structured creative mentorship, built local.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dark/70">
            Students browse real offerings from working creatives and book the
            session that fits. Everything is defined up front, from scope to
            price. You give the kind of guidance you actually want to give, and
            nothing you don’t.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
