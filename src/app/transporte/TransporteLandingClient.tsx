'use client';


import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown, Phone } from 'lucide-react';
import { useState } from 'react';

export const metadata = {
  title: 'Transporte in Köln | MENVOTI',
  description: 'Schnelle und sichere Transporte in Köln und Umgebung. Möbel, Einkäufe, Baumaterialien und vieles mehr.',
};

const reasons = [
  {
    title: 'Sicherer Transport',
    text: 'Wertvolle Gegenstände werden sorgfältig und fachgerecht transportiert.',
  },
  {
    title: 'Pünktliche Lieferung',
    text: 'Wir arbeiten zuverlässig und halten unsere Zeitpläne ein.',
  },
  {
    title: 'Anhänger vorhanden',
    text: 'Für Möbel, Material und größere Transportaufträge direkt verfügbar.',
  },
  {
    title: 'Flexible Termine',
    text: 'Schnelle Terminvergabe und individuelle Anpassungen an Ihren Bedarf.',
  },
];

const transportItems = [
  {
    title: 'Möbel',
    text: 'Sicherer Transport von Einzelstücken bis hin zu kompletten Einrichtungssets.',
  },
  {
    title: 'Baumarkt-Einkäufe',
    text: 'Schneller Transport für große Einkäufe und Materiallieferungen.',
  },
  {
    title: 'IKEA',
    text: 'Transport und Abholung für IKEA-Einkäufe und komplette Küchen- oder Wohnbereiche.',
  },
  {
    title: 'Elektrogeräte',
    text: 'Behutsam und sicher für empfindliche Geräte und Haushaltsgegenstände.',
  },
  {
    title: 'Kartons',
    text: 'Kompakte und zuverlässige Beförderung von Umzugskartons und Paketen.',
  },
  {
    title: 'Sonstige Transporte',
    text: 'Auch für kurze Strecken, Umzüge oder Sonderaufträge im Alltag.',
  },
];

const steps = [
  { title: '1 Anfrage', text: 'Sie teilen uns Ihren Transportbedarf mit oder rufen uns direkt an.' },
  { title: '2 Angebot', text: 'Wir senden Ihnen schnell ein klares und transparentes Angebot.' },
  { title: '3 Termin', text: 'Wir finden einen passenden Termin und bestätigen ihn zuverlässig.' },
  { title: '4 Transport', text: 'Der Transport wird pünktlich, sicher und sorgfältig durchgeführt.' },
  { title: '5 Fertig', text: 'Ihr Transport ist abgeschlossen – ohne unnötigen Aufwand.' },
];

const faqs = [
  {
    question: 'Transportiert ihr IKEA?',
    answer: 'Ja, wir transportieren auch IKEA-Einkäufe und andere Möbelartikel sicher zu Ihnen nach Hause.',
  },
  {
    question: 'Wie groß ist euer Anhänger?',
    answer: 'Unser Anhänger ist für typische Möbel- und Materialtransporte geeignet und bietet ausreichend Platz für viele Alltagsaufträge.',
  },
  {
    question: 'Wie kurzfristig sind Termine möglich?',
    answer: 'Viele Aufträge können kurzfristig übernommen werden. Bitte kontaktieren Sie uns direkt für den nächsten verfügbaren Termin.',
  },
  {
    question: 'Wie weit fahrt ihr?',
    answer: 'Wir sind in Köln und bis 60 km Umgebung aktiv.',
  },
  {
    question: 'Helft ihr beim Ein- und Ausladen?',
    answer: 'Ja, wir helfen gerne beim sicheren Ein- und Ausladen Ihrer Gegenstände.',
  },
];

export default function TransporteLandingClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-[#f7f7f5] text-[#111111]">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gray-700 shadow-[0_8px_28px_rgba(0,0,0,0.04)]">
              Transporte in Köln
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-5xl lg:text-6xl">
              Schnell.
              <br />
              Sicher.
              <br />
              Zuverlässig.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6b7280] sm:text-xl">
              Wir transportieren Möbel, Einkäufe, Baumaterialien und vieles mehr – sicher und pünktlich in Köln und bis 60 km Umgebung.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#ai-assistant"
                className="inline-flex items-center justify-center rounded-full bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(0,0,0,0.16)] transition-colors duration-200 hover:bg-black"
              >
                Kostenloses Angebot
              </Link>
              <a
                href="tel:+4917662792171"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] shadow-[0_12px_34px_rgba(0,0,0,0.05)] transition-colors duration-200 hover:bg-gray-50"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.08 }}
            className="relative"
          >
            <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-black/5 blur-3xl" aria-hidden="true" />
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-2 shadow-[0_24px_80px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/transport.jpg"
                alt="Professioneller Transport von MENVOTI"
                width={900}
                height={1000}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw"
                className="h-[24rem] w-full rounded-[1.5rem] object-cover sm:h-[30rem] lg:h-[36rem]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gray-600 sm:text-xs">
              Warum MENVOTI?
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-4xl">
              Transport mit Fokus auf Sicherheit und Genauigkeit.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_16px_46px_rgba(0,0,0,0.04)] sm:p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#111111] text-white">
                  <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#111111]">{reason.title}</h3>
                <p className="mt-3 text-base leading-7 text-[#6b7280]">{reason.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gray-600 sm:text-xs">
              Was transportieren wir?
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-4xl">
              Alles, was für Ihren Alltag oder Ihr Projekt wichtig ist.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {transportItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-[0_16px_46px_rgba(0,0,0,0.04)]"
              >
                <div className="text-lg font-semibold text-[#111111]">{item.title}</div>
                <p className="mt-3 text-base leading-7 text-[#6b7280]">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gray-600 sm:text-xs">
              Unser Ablauf
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-4xl">
              Klar organisiert und ohne Aufwand.
            </h2>
          </motion.div>

          <div className="mt-12 relative rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_46px_rgba(0,0,0,0.04)] sm:p-10 lg:p-12">
            <div className="absolute left-8 top-8 bottom-8 hidden w-px bg-black/10 lg:block" />
            <div className="space-y-6 lg:space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
                  className="relative flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-[#111111] text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <div className="lg:flex-1">
                    <h3 className="text-xl font-semibold text-[#111111]">{step.title}</h3>
                    <p className="mt-2 text-base leading-7 text-[#6b7280]">{step.text}</p>
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="ml-6 flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-gray-50 text-gray-600 lg:ml-0">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-gray-600 sm:text-xs">
              FAQ
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-[#111111] sm:text-4xl">
              Häufige Fragen.
            </h2>
          </motion.div>

          <div className="mt-12 space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={item.question} className="rounded-[1.5rem] border border-black/5 bg-white shadow-[0_16px_46px_rgba(0,0,0,0.04)]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-5 text-left sm:px-8"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span className="text-base font-semibold text-[#111111] sm:text-lg">{item.question}</span>
                    <ChevronDown className={`h-5 w-5 text-[#6b7280] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  {isOpen ? (
                    <div className="px-6 pb-6 text-base leading-8 text-[#6b7280] sm:px-8">
                      {item.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="angebot" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#111111] px-8 py-16 text-center text-white sm:px-10 lg:px-16 lg:py-20"
        >
          <h2 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
            Transport benötigt?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Jetzt kostenlos anfragen und Ihren Transport unkompliziert organisieren lassen.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#ai-assistant"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#111111] transition-colors duration-200 hover:bg-gray-100"
            >
              Kostenloses Angebot anfordern
            </Link>
            <a
              href="tel:+4917662792171"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Jetzt anrufen
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}