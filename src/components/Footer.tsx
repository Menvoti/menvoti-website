import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Linke Spalte – Branding */}
          <div>
            <span className="text-xl font-semibold tracking-[-0.03em] text-black">MENVOTI</span>
            <p className="mt-4 text-sm leading-7 text-black/60">
              Professionelle Dienstleistungen für Köln und Umgebung.
            </p>
            <p className="mt-1 text-sm font-medium text-black/80">
              Zuverlässig. Schnell. Sorgfältig.
            </p>
          </div>

          {/* Mittlere Spalte – Kontakt */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Kontakt</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="tel:+4917662792171"
                  className="flex flex-col text-sm text-black/70 transition-colors duration-150 hover:text-black"
                >
                  <span className="text-xs font-medium text-black/40">Telefon</span>
                  +49 176 62792171
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@menvoti.de"
                  className="flex flex-col text-sm text-black/70 transition-colors duration-150 hover:text-black"
                >
                  <span className="text-xs font-medium text-black/40">E-Mail</span>
                  info@menvoti.de
                </a>
              </li>
              <li className="flex flex-col text-sm text-black/70">
                <span className="text-xs font-medium text-black/40">Einsatzgebiet</span>
                Köln &amp; Umgebung (bis 60 km)
              </li>
            </ul>
          </div>

          {/* Rechte Spalte – Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Navigation</p>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: 'Startseite', href: '/' },
                { label: 'Leistungen', href: '/#leistungen' },
                { label: 'Möbelmontage', href: '/services/moebelmontage' },
                { label: 'Transporte', href: '/services/transporte' },
                { label: 'Umzugshilfe', href: '/services/umzughilfe' },
                { label: 'Gartenarbeit', href: '/services/gartenarbeit' },
                { label: 'Kontakt', href: '/#kontakt' },
                { label: 'Impressum', href: '/impressum' },
                { label: 'Datenschutz', href: '/datenschutz' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-black/60 transition-colors duration-150 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-sm text-black/45">© 2026 MENVOTI. Alle Rechte vorbehalten.</p>
          <p className="text-sm text-black/45">Professionelle Dienstleistungen für Köln und Umgebung.</p>
        </div>
      </div>
    </footer>
  );
}
