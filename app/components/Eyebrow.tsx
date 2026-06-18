export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange">
      {children}
    </p>
  );
}
