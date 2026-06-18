import type { Metadata } from "next";
import "@fontsource/open-sauce-one/400.css";
import "@fontsource/open-sauce-one/700.css";
import "@fontsource/open-sauce-one/900.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Become a mentor — Protégé",
  description:
    "Protégé connects working creatives in Indianapolis with young people who actually want mentorship. Post what you offer, set your price, and approve who you take.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full bg-cream font-sans text-dark antialiased">
        {children}
      </body>
    </html>
  );
}
