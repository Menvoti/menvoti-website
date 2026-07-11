import Link from "next/link";

const links = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Warum wir", href: "/#warum-wir" },
  { label: "KI-Assistent", href: "/#ai-assistant" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em] text-slate-900">
          MENVOTI
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/#ai-assistant"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Angebot anfragen
        </a>
      </div>
    </header>
  );
}
