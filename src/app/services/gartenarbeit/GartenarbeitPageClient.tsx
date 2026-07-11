'use client';

import AIAssistantSection from '@/components/AIAssistantSection';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CircleCheckBig, Clock3, Flower2, Leaf, Phone, Scissors, Sparkles, Sprout, Trash2, Trees, Waypoints, Droplets } from 'lucide-react';
import { useState } from 'react';

const benefits = [
  { title: 'Zuverlässige Termine', text: 'Wir erscheinen pünktlich und arbeiten zuverlässig.', icon: CircleCheckBig },
  { title: 'Saubere Arbeit', text: 'Wir hinterlassen Ihren Garten ordentlich und gepflegt.', icon: Sparkles },
  { title: 'Flexible Einsätze', text: 'Einmalige oder regelmäßige Gartenarbeiten möglich.', icon: Clock3 },
  { title: 'Regional', text: 'Köln und bis 60 km Umgebung.', icon: Waypoints },
];

const services = [
  { title: 'Mulch verteilen', text: 'Perfekte Bodendeckung für ein gepflegtes Gesamtbild.', icon: Leaf },
  { title: 'Unkraut entfernen', text: 'Saubere Beete und gepflegte Flächen ohne unnötige Rückstände.', icon: Sprout },
  { title: 'Hecken schneiden', text: 'Scharf und ordentlich für einen eleganten Gartenabschluss.', icon: Scissors },
  { title: 'Rasenpflege', text: 'Mähen, pflegen und die Fläche gleichmäßig gestalten.', icon: Trees },
  { title: 'Laub entfernen', text: 'Frische Sicht und ordentliches Gesamtbild im Garten.', icon: Trash2 },
  { title: 'Allgemeine Gartenpflege', text: 'Regelmäßige Betreuung für immer einen gepflegten Eindruck.', icon: Flower2 },
];

const steps = ['Anfrage', 'Angebot', 'Termin', 'Gartenarbeit', 'Fertig'];

const faqs = [
  { question: 'Welche Gartenarbeiten bietet ihr an?', answer: 'Wir übernehmen Gartenpflege, Mulch verteilen, Unkraut entfernen, Hecken schneiden, Rasenschnitt und allgemeine Pflege.' },
  { question: 'Bringt ihr eigenes Werkzeug mit?', answer: 'Ja, wir arbeiten mit unserem eigenen Werkzeug und Material, sofern gewünscht.' },
  { question: 'Arbeitet ihr regelmäßig oder nur einmalig?', answer: 'Beides ist möglich – einmalige Einsätze oder regelmäßige Betreuung.' },
  { question: 'Wie kurzfristig sind Termine möglich?', answer: 'Viele Einsätze sind kurzfristig möglich, abhängig von der Verfügbarkeit.' },
  { question: 'In welchem Gebiet arbeitet ihr?', answer: 'Wir sind in Köln und bis 60 km Umgebung tätig.' },
];

export default function GartenarbeitPageClient() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="bg-[#fafafa] text-[#111111]">
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-black/65 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
              Gartenarbeit
            </div>
            <h1 className="mt-8 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
              Ihr Garten.
              <br />
              Perfekt gepflegt.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-black/65 sm:text-xl">
              Wir unterstützen Sie zuverlässig bei der Pflege Ihres Gartens – von Aufräumarbeiten über Mulch verteilen bis hin zur allgemeinen Gartenpflege in Köln und bis 60 km Umgebung.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#ai-assistant" className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-black/90">
                Kostenloses Angebot
              </a>
              <a href="tel:+4917662792171" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white">
                <Phone className="h-4 w-4" />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }} className="relative">
            <div className="absolute inset-0 translate-y-2 rounded-[2.5rem] bg-black/5 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-black/5 bg-white p-2 shadow-[0_30px_90px_rgba(0,0,0,0.12)]">
              <Image src="/images/garten.jpg" alt="Professionelle Gartenarbeit von MENVOTI" width={1200} height={1400} priority sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw" className="h-[28rem] w-full rounded-[1.75rem] object-cover sm:h-[34rem] lg:h-[40rem]" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/50">Warum MENVOTI?</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">Pflege mit Disziplin, Ruhe und perfekter Ausführung.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={benefit.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }} className="rounded-[1.5rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-black">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{benefit.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/50">Unsere Gartenarbeiten</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">Sorgfältige Leistungen für einen Garten, der Eindruck macht.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.06 }} className="rounded-[1.5rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.04)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f4f6] text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/65">{service.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/50">Unser Ablauf</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">So bleibt Ihr Gartenprojekt klar, sauber und unkompliziert.</h2>
          </div>
          <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center text-center lg:flex-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold text-black shadow-[0_12px_38px_rgba(0,0,0,0.04)]">
                  {index + 1}
                </div>
                <p className="mt-4 text-lg font-medium text-black">{step}</p>
                {index < steps.length - 1 && <ArrowRight className="mt-4 h-5 w-5 text-black/40 lg:mt-0 lg:rotate-0" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:p-10 lg:p-14">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/50">FAQ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-black sm:text-4xl">Die wichtigsten Fragen kurz beantwortet.</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-[1.25rem] border border-black/5 bg-[#fafafa] px-6 py-5">
                <button className="flex w-full items-center justify-between text-left" onClick={() => setOpenFaq(index === openFaq ? -1 : index)}>
                  <span className="text-base font-semibold text-black">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-black/60 transition-transform duration-200 ${index === openFaq ? 'rotate-180' : ''}`} />
                </button>
                {index === openFaq && <p className="mt-4 text-sm leading-7 text-black/65">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AIAssistantSection initialService="Gartenarbeit" />
    </main>
  );
}
