'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock3, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { useState } from 'react';
import OpeningHours from './OpeningHours';

const contactDetails = [
  {
    label: 'Telefon',
    value: '+49 176 62792171',
    href: 'tel:+4917662792171',
    icon: Phone,
  },
  {
    label: 'E-Mail',
    value: 'info@menvoti.de',
    href: 'mailto:info@menvoti.de',
    icon: Mail,
  },
  {
    label: 'Standort',
    value: 'Köln & Umgebung (bis 60 km)',
    href: '#kontakt',
    icon: MapPin,
  },
  {
    label: 'Antwortzeit',
    value: 'In der Regel innerhalb von 24 Stunden',
    href: '#kontakt',
    icon: Clock3,
  },
];

const services = [
  'Möbelmontage',
  'Transporte',
  'Umzugshilfe',
  'Gartenarbeit',
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validatePayload = (payload: {
    vorname: string;
    nachname: string;
    telefon: string;
    email: string;
    dienstleistung: string;
    nachricht: string;
  }) => {
    const errors: Record<string, string> = {};

    if (!payload.vorname) {
      errors.vorname = 'Bitte Vornamen eingeben.';
    }

    if (!payload.nachname) {
      errors.nachname = 'Bitte Nachnamen eingeben.';
    }

    if (!payload.telefon || payload.telefon.length < 6) {
      errors.telefon = 'Bitte eine gueltige Telefonnummer eingeben.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email || !emailPattern.test(payload.email)) {
      errors.email = 'Bitte eine gueltige E-Mail eingeben.';
    }

    if (!payload.dienstleistung) {
      errors.dienstleistung = 'Bitte eine Dienstleistung auswaehlen.';
    }

    if (!payload.nachricht || payload.nachricht.length < 10) {
      errors.nachricht = 'Bitte eine Nachricht mit mindestens 10 Zeichen eingeben.';
    }

    return errors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const payload = {
      vorname: String(formData.get('vorname') ?? '').trim(),
      nachname: String(formData.get('nachname') ?? '').trim(),
      telefon: String(formData.get('telefon') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      dienstleistung: String(formData.get('dienstleistung') ?? '').trim(),
      nachricht: String(formData.get('nachricht') ?? '').trim(),
    };

    const validationErrors = validatePayload(payload);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setStatus('error');
      return;
    }

    setStatus('sending');
    setFieldErrors({});

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="kontakt" className="relative overflow-hidden px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.04),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col justify-between"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <Sparkles className="h-3.5 w-3.5" />
              Kontakt
            </div>

            <h2 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              Lassen Sie uns über Ihr Projekt sprechen.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-black/65 sm:text-xl">
              Schreiben Sie uns kurz, was Sie brauchen. Wir melden uns schnell, klar und mit einem passenden Angebot zurück.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-black/10 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 group-hover:scale-105">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">{item.label}</p>
                      <p className="mt-2 text-base font-medium text-black">{item.value}</p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: contactDetails.length * 0.06 }}
              whileHover={{ y: -4 }}
              className="sm:col-span-2"
            >
              <OpeningHours variant="card" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
          className="relative"
        >
          <div className="absolute inset-0 translate-y-3 rounded-[2.25rem] bg-black/5 blur-2xl" />
          <div className="relative rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_30px_90px_rgba(0,0,0,0.08)] sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/45">Premium Formular</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-black sm:text-3xl">
                Kostenloses Angebot anfordern.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
                Ganz ohne Aufwand: kurze Angaben genügen, wir melden uns zeitnah mit den nächsten Schritten.
              </p>
            </div>

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black/70">Vorname</span>
                  <input
                    type="text"
                    name="vorname"
                    required
                    placeholder="Max"
                    className="h-12 rounded-2xl border border-black/10 bg-[#fafafa] px-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-black/30 focus:border-black/20 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
                  />
                  {fieldErrors.vorname && <span className="text-xs font-medium text-red-600">{fieldErrors.vorname}</span>}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black/70">Nachname</span>
                  <input
                    type="text"
                    name="nachname"
                    required
                    placeholder="Muster"
                    className="h-12 rounded-2xl border border-black/10 bg-[#fafafa] px-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-black/30 focus:border-black/20 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
                  />
                  {fieldErrors.nachname && <span className="text-xs font-medium text-red-600">{fieldErrors.nachname}</span>}
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black/70">Telefon</span>
                  <input
                    type="tel"
                    name="telefon"
                    required
                    placeholder="+49 ..."
                    className="h-12 rounded-2xl border border-black/10 bg-[#fafafa] px-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-black/30 focus:border-black/20 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
                  />
                  {fieldErrors.telefon && <span className="text-xs font-medium text-red-600">{fieldErrors.telefon}</span>}
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-black/70">E-Mail</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@beispiel.de"
                    className="h-12 rounded-2xl border border-black/10 bg-[#fafafa] px-4 text-sm text-black outline-none transition-all duration-200 placeholder:text-black/30 focus:border-black/20 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
                  />
                  {fieldErrors.email && <span className="text-xs font-medium text-red-600">{fieldErrors.email}</span>}
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-black/70">Dienstleistung</span>
                <select
                  name="dienstleistung"
                  required
                  defaultValue=""
                  className="h-12 rounded-2xl border border-black/10 bg-[#fafafa] px-4 text-sm text-black outline-none transition-all duration-200 focus:border-black/20 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
                >
                  <option value="" disabled>
                    Bitte auswählen
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {fieldErrors.dienstleistung && <span className="text-xs font-medium text-red-600">{fieldErrors.dienstleistung}</span>}
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-black/70">Nachricht</span>
                <textarea
                  name="nachricht"
                  required
                  rows={5}
                  placeholder="Erzählen Sie kurz von Ihrem Vorhaben ..."
                  className="rounded-[1.25rem] border border-black/10 bg-[#fafafa] px-4 py-3 text-sm text-black outline-none transition-all duration-200 placeholder:text-black/30 focus:border-black/20 focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,0,0,0.04)]"
                />
                {fieldErrors.nachricht && <span className="text-xs font-medium text-red-600">{fieldErrors.nachricht}</span>}
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-2 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-black/90 hover:shadow-[0_18px_35px_rgba(0,0,0,0.18)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:bg-black"
              >
                {status === 'sending' ? 'Sende Anfrage ...' : 'Kostenloses Angebot anfordern'}
                <ArrowRight className="h-4 w-4" />
              </button>

              {status === 'success' && (
                <p className="text-sm font-medium text-emerald-600">Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden.</p>
              )}

              {status === 'error' && (
                <p className="text-sm font-medium text-red-600">Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
