export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <h2 className="text-2xl font-bold tracking-tight">
            MENVOTI
          </h2>

          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#">Leistungen</a>
            <a href="#">Über uns</a>
            <a href="#">Kontakt</a>
          </nav>

          <button className="rounded-full bg-black px-6 py-3 text-sm text-white hover:bg-gray-800 transition">
            Angebot anfragen
          </button>

        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8 pt-32">

        <div className="max-w-2xl">

          <p className="mb-4 uppercase tracking-[0.35em] text-sm text-gray-500">
            MENVOTI
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Professionelle Dienstleistungen.
            <br />
            Einfach erledigt.
          </h1>

          <p className="mt-8 text-lg text-gray-600">
            Möbelmontage, Umzugshilfe, Transporte,
            Entrümpelung und Gartenarbeit –
            zuverlässig in Köln und Umgebung.
          </p>

          <div className="mt-10 flex gap-4">

            <button className="rounded-full bg-black px-8 py-4 text-white hover:bg-gray-800 transition">
              Kostenloses Angebot
            </button>

            <button className="rounded-full border border-black px-8 py-4 hover:bg-black hover:text-white transition">
              Jetzt anrufen
            </button>

          </div>

        </div>

        <div className="hidden lg:flex h-[600px] w-[500px] items-center justify-center rounded-3xl bg-gray-100">
          <p className="text-gray-400">
            Hier kommt dein Hero-Bild
          </p>
        </div>

      </section>

    </main>
  );
}