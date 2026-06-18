import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Build your profile.",
    body: "Show students who you are and what you cover. This is what they see first.",
  },
  {
    n: "02",
    title: "Post your offerings.",
    body: "A portfolio review, a skill session, career direction, whatever you want to offer. You set the scope, length, and price on each one.",
  },
  {
    n: "03",
    title: "Approve who you take.",
    body: "Students send requests. You decide which ones you accept. Nobody books your time without your yes.",
  },
  {
    n: "04",
    title: "Meet and get paid.",
    body: "You meet in a public space, run the session, and payment processes automatically. You keep 92.5% of what you charge.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-t border-dark/10 px-6 py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Four steps, fully on your terms.
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 80}
              className="group rounded-2xl border border-dark/10 bg-white/40 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange/40 hover:bg-white/70 hover:shadow-sm"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-black text-orange">{step.n}</span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="mt-3 leading-relaxed text-dark/70">{step.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
