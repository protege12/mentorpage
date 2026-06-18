import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const points = [
  {
    title: "They’re looking now.",
    body: "In a survey of local student creatives, 56% want a mentor and only 8% have found one.",
  },
  {
    title: "You’re early.",
    body: "As one of the first mentors, your profile gets seen, not buried.",
  },
  {
    title: "On your schedule.",
    body: "Defined sessions at your price, on your time.",
  },
  {
    title: "You keep 92.5%.",
    body: "Pricing is yours to set. We take a small cut, you keep the rest.",
  },
];

export default function WhyJoin() {
  return (
    <section className="border-t border-dark/10 px-6 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-3xl">
        <Reveal>
          <Eyebrow>Why join</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            The demand is already here.
          </h2>
        </Reveal>

        <ul className="mt-10 space-y-6">
          {points.map((point, i) => (
            <Reveal as="li" key={point.title} delay={i * 70} className="flex gap-4">
              <span
                aria-hidden
                className="mt-2.5 h-px w-6 flex-none bg-orange"
              />
              <p className="text-lg leading-relaxed text-dark/80">
                <span className="font-bold text-dark">{point.title}</span>{" "}
                {point.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
