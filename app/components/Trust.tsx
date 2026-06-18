import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const items = [
  "Every mentor is personally reviewed before they go live.",
  "Sessions happen in public spaces only, never private homes.",
  "You approve every request, so you’re always in control of who you work with.",
];

function Check() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-none text-orange"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Trust() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 bg-dark px-6 py-20 text-cream sm:py-28"
    >
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <Eyebrow>Trust</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Built to be taken seriously.
          </h2>
        </Reveal>

        <ul className="mt-10 space-y-5">
          {items.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 80} className="flex gap-4">
              <Check />
              <span className="text-lg leading-relaxed text-cream/85">
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
