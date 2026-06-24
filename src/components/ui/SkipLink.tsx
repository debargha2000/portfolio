export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed top-4 left-4 z-[200] bg-[var(--acid)] text-[var(--bg)] px-4 py-2 font-mono text-xs uppercase tracking-widest"
    >
      Skip to content →
    </a>
  );
}
