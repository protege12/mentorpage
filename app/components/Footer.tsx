import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-dark/10 px-6 py-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Image
          src="/Wordmark%20Black.png"
          alt="Protégé"
          width={967}
          height={279}
          className="h-5 w-auto"
        />
        <div className="flex items-center gap-5 text-sm text-dark/60">
          <span>Indianapolis</span>
          <a
            href="mailto:hello@joinprotege.app"
            className="transition-colors hover:text-dark"
          >
            hello@joinprotege.app
          </a>
        </div>
      </div>
    </footer>
  );
}
