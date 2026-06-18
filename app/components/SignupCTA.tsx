"use client";

import { useState } from "react";

/**
 * Placeholder mentor-signup CTA. Account signup is not built yet, so clicking
 * the button reveals a calm "coming soon" note in place rather than wiring to
 * any real form or external link.
 */
export default function SignupCTA() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => setRevealed(true)}
        aria-expanded={revealed}
        className="rounded-full bg-orange px-8 py-4 text-base font-bold text-white transition-transform duration-200 hover:scale-[1.03]"
      >
        Become a mentor
      </button>

      <div
        aria-hidden={!revealed}
        className={`overflow-hidden transition-all duration-500 ease-out ${
          revealed ? "mt-6 max-h-32 opacity-100" : "mt-0 max-h-0 opacity-0"
        }`}
      >
        <p className="rounded-2xl border border-dark/10 bg-white/50 px-6 py-4 text-base text-dark/70">
          Mentor signup opens soon. We’ll be in touch.
        </p>
      </div>
    </div>
  );
}
