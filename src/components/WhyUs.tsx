'use client';

import { motion } from 'framer-motion';
import { Clock3, MapPin, ShieldCheck, Truck } from 'lucide-react';

const points = [
  {
    title: 'Zuverlässig',
    text: 'Pünktlich, sorgfältig und respektvoll – wir behandeln Ihr Zuhause wie unser eigenes.',
    icon: ShieldCheck,
  },
  {
    title: 'Schnelle Termine',
    text: 'Kurze Reaktionszeiten und flexible Terminvergabe.',
    icon: Clock3,
  },
  {
    title: 'Alles aus einer Hand',
    text: 'Möbelmontage, Transporte, Umzugshilfe und Gartenarbeiten aus einer Hand.',
    icon: Truck,
  },
  {
    title: 'Regional',
    text: 'In Köln und bis 60 km Umgebung schnell für Sie im Einsatz.',
    icon: MapPin,
  },
];

export default function WhyUs() {
  return (
    <section id="warum-wir" className="relative overflow-hidden bg-[#fafafa] px-6 py-24 text-[#111111] sm:px-8 lg:px-10 lg:py-28">
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/50">WARUM MENVOTI</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
            Warum Kunden
            <br />
            MENVOTI vertrauen.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/65 lg:mx-0">
            Wir stehen für zuverlässige Arbeit, transparente Kommunikation und sorgfältige Ausführung – vom ersten Kontakt bis zum abgeschlossenen Auftrag.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                whileHover={{ y: -10, scale: 1.01, boxShadow: '0 24px 70px rgba(0,0,0,0.08)' }}
                className="group rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition-shadow duration-300 sm:p-9"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.02em] text-black">{point.title}</h3>
                <p className="mt-3 max-w-md text-base leading-8 text-black/65">{point.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
