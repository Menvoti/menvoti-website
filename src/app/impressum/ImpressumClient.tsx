'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.07 },
  }),
};

export default function ImpressumClient() {
  return (
    <main className="bg-[#fafafa] text-[#111111]">
      <section className="px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/40">
              Rechtliches
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">
              Impressum
            </h1>
            <p className="mt-5 text-lg leading-8 text-black/60">
              Angaben gem&auml;&szlig; &sect; 5 TMG
            </p>
          </motion.div>

          <div className="mt-14 space-y-6">

            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Unternehmen</h2>
              <div className="mt-5 space-y-1 text-sm leading-7 text-black/70">
                <p className="text-base font-semibold text-black">MENVOTI</p>
                <p>Inhaber: Eduard Belyakov</p>
                <p>Einzelunternehmen</p>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Anschrift</h2>
              <div className="mt-5 space-y-1 text-sm leading-7 text-black/70">
                <p>B&uuml;chnerstr. 14</p>
                <p>50829 K&ouml;ln</p>
                <p>Deutschland</p>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Kontakt</h2>
              <div className="mt-5 space-y-3 text-sm text-black/70">
                <div>
                  <p className="text-xs font-medium text-black/40">Telefon</p>
                  <a
                    href="tel:+4917662792171"
                    className="text-sm text-black transition-colors hover:text-black/60"
                  >
                    0176 62792171
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium text-black/40">E-Mail</p>
                  <a
                    href="mailto:info@menvoti.de"
                    className="text-sm text-black transition-colors hover:text-black/60"
                  >
                    info@menvoti.de
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium text-black/40">Website</p>
                  <span className="text-sm text-black">https://menvoti.de</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Steuerliche Angaben</h2>
              <div className="mt-5 space-y-3 text-sm leading-7 text-black/70">
                <div>
                  <p className="text-xs font-medium text-black/40">Unternehmensform</p>
                  <p>Einzelunternehmen</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-black/40">Steuerregelung</p>
                  <p>Kleinunternehmer gem&auml;&szlig; &sect;19 UStG. Es wird keine Umsatzsteuer berechnet.</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-black/40">Wirtschafts-Identifikationsnummer</p>
                  <p>DE459543669</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)]"
            >
              <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Verantwortlich f&uuml;r den Inhalt</h2>
              <div className="mt-5 space-y-1 text-sm leading-7 text-black/70">
                <p>gem&auml;&szlig; &sect;18 Abs.2 MStV:</p>
                <p className="font-medium text-black">Eduard Belyakov</p>
                <p>B&uuml;chnerstr. 14</p>
                <p>50829 K&ouml;ln</p>
              </div>
            </motion.div>

          </div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-black/85"
            >
              Zur&uuml;ck zur Startseite
            </Link>
            <Link
              href="/#ai-assistant"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white"
            >
              Kontakt aufnehmen
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}