import Reveal from "./Reveal";
import SignupCTA from "./SignupCTA";

export default function Signup() {
  return (
    <section
      id="signup"
      className="scroll-mt-24 border-t border-dark/10 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-2xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Protégé is just getting started in Indianapolis.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-dark/70">
            The first mentors set the tone for everything after. If you’ve got
            something to teach, this is the moment to get in.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <SignupCTA />
        </Reveal>
      </div>
    </section>
  );
}
