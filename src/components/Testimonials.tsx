'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    icon: '⭐',
    title: 'Persönlicher Service',
    text: 'Wir nehmen uns Zeit für jede Anfrage und beraten individuell.',
  },
  {
    icon: '🛠',
    title: 'Sorgfältige Ausführung',
    text: 'Wir arbeiten zuverlässig, sauber und mit höchstem Qualitätsanspruch.',
  },
  {
    icon: '📞',
    title: 'Schnelle Kommunikation',
    text: 'In der Regel erhalten Sie innerhalb von 24 Stunden eine Rückmeldung.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fafafa] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/40">
            Kundenbewertungen
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">
            Vertrauen, das überzeugt.
          </h2>
          <p className="mt-5 text-lg leading-8 text-black/60">
            Jeder Auftrag ist für uns eine Empfehlung wert.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_24px_64px_rgba(0,0,0,0.09)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/8 bg-[#f5f5f5] text-xl">
                {card.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-black">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/60">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] border border-black/5 bg-white px-8 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] sm:flex-row"
        >
          <p className="text-sm text-black/50">
            Google-Bewertungen werden nach den ersten abgeschlossenen Aufträgen veröffentlicht.
          </p>
          <a
            href="#ai-assistant"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black/85"
          >
            Jetzt kostenlos anfragen
          </a>
        </motion.div>

      </div>
    </section>
  );
}
