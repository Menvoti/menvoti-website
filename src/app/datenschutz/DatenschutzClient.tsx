'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const, delay: i * 0.06 },
  }),
};

const sections = [
  {
    title: '1. Verantwortlicher',
    content: [
      'Verantwortlich f&uuml;r die Verarbeitung personenbezogener Daten auf dieser Website ist:',
      '<strong>Eduard Belyakov</strong><br />MENVOTI<br />B&uuml;chnerstr. 14<br />50829 K&ouml;ln<br />Deutschland',
      'Telefon: <a href="tel:+4917662792171" class="underline decoration-black/20 underline-offset-2 transition-colors hover:text-black">0176 62792171</a><br />E-Mail: <a href="mailto:info@menvoti.de" class="underline decoration-black/20 underline-offset-2 transition-colors hover:text-black">info@menvoti.de</a>',
    ],
  },
  {
    title: '2. Allgemeines zur Datenverarbeitung',
    content: [
      'Wir nehmen den Schutz Ihrer pers&ouml;nlichen Daten ernst. Diese Website verwendet keine Cookies, keine Tracking-Tools, kein Google Analytics und keine Social-Media-Plugins. Es werden keine Nutzerkonten angelegt und kein Newsletter versandt.',
      'Die Verarbeitung personenbezogener Daten erfolgt ausschlie&szlig;lich auf Grundlage der einschl&auml;gigen Vorschriften der Datenschutz-Grundverordnung (DSGVO) sowie des Bundesdatenschutzgesetzes (BDSG).',
    ],
  },
  {
    title: '3. Hosting (Vercel)',
    content: [
      'Diese Website wird &uuml;ber Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA, gehostet.',
      'Beim Aufruf der Website werden automatisch Verbindungsdaten &uuml;bertragen (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite, Browser-Typ). Diese Daten werden von Vercel technisch verarbeitet, um den Betrieb der Website zu erm&ouml;glichen, und nicht dauerhaft gespeichert.',
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am stabilen Websitebetrieb).',
      'Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen: <span class="font-medium text-black">vercel.com/legal/privacy-policy</span>',
    ],
  },
  {
    title: '4. Kontaktformular',
    content: [
      'Wenn Sie uns &uuml;ber das Kontaktformular eine Anfrage senden, werden folgende Daten verarbeitet:',
      '&bull; Vorname und Nachname<br />&bull; Telefonnummer<br />&bull; E-Mail-Adresse<br />&bull; Gew&uuml;nschte Dienstleistung<br />&bull; Ihre Nachricht',
      'Diese Daten werden verwendet, um Ihre Anfrage zu bearbeiten und Ihnen ein Angebot zukommen zu lassen. Die &Uuml;bermittlung der Formulardaten erfolgt &uuml;ber den Dienst <strong>Resend</strong> (Resend Inc., USA), der als technischer Dienstleister f&uuml;r den E-Mail-Versand eingesetzt wird.',
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen).',
      'Speicherdauer: Die Daten werden nach abschlie&szlig;ender Bearbeitung Ihrer Anfrage gel&ouml;scht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
    ],
  },
  {
    title: '5. E-Mail-Kommunikation',
    content: [
      'Wenn Sie uns per E-Mail kontaktieren, werden Ihre E-Mail-Adresse sowie die in der E-Mail enthaltenen Daten verarbeitet, um Ihre Anfrage zu beantworten.',
      'Die E-Mail-Kommunikation erfolgt &uuml;ber Google Workspace (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Google ist nach dem EU-US Data Privacy Framework zertifiziert.',
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.',
    ],
  },
  {
    title: '6. Resend (E-Mail-Versanddienst)',
    content: [
      'F&uuml;r den Versand von Formular-Eingangsbenachrichtigungen und Best&auml;tigungs-E-Mails nutzen wir Resend (Resend Inc., USA).',
      'Resend verarbeitet dabei Name, E-Mail-Adresse und den Inhalt Ihrer Anfrage im Auftrag von MENVOTI. Es besteht ein Auftragsverarbeitungsvertrag gem&auml;&szlig; Art. 28 DSGVO.',
      'Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.',
    ],
  },
  {
    title: '7. Ihre Rechte',
    content: [
      'Sie haben gegen&uuml;ber MENVOTI folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:',
      '&bull; <strong>Auskunft</strong> (Art. 15 DSGVO)<br />&bull; <strong>Berichtigung</strong> (Art. 16 DSGVO)<br />&bull; <strong>L&ouml;schung</strong> (Art. 17 DSGVO)<br />&bull; <strong>Einschr&auml;nkung der Verarbeitung</strong> (Art. 18 DSGVO)<br />&bull; <strong>Daten&uuml;bertragbarkeit</strong> (Art. 20 DSGVO)<br />&bull; <strong>Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)',
      'Zur Aus&uuml;bung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@menvoti.de" class="underline decoration-black/20 underline-offset-2 transition-colors hover:text-black">info@menvoti.de</a>',
      'Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbeh&ouml;rde zu beschweren. Die zust&auml;ndige Beh&ouml;rde in Nordrhein-Westfalen ist der Landesbeauftragte f&uuml;r Datenschutz und Informationsfreiheit NRW.',
    ],
  },
  {
    title: '8. Aktualit&auml;t und &Auml;nderungen',
    content: [
      'Diese Datenschutzerkl&auml;rung ist aktuell g&uuml;ltig und hat den Stand Juli 2026. Durch die Weiterentwicklung der Website oder aufgrund ge&auml;nderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerkl&auml;rung zu &auml;ndern.',
    ],
  },
];

export default function DatenschutzClient() {
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
              Datenschutz&shy;erkl&auml;rung
            </h1>
            <p className="mt-5 text-lg leading-8 text-black/60">
              Informationen gem&auml;&szlig; Art. 13, 14 DSGVO zur Verarbeitung personenbezogener Daten.
            </p>
          </motion.div>

          <div className="mt-14 space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)]"
              >
                <h2
                  className="text-base font-semibold tracking-[-0.01em] text-black"
                  dangerouslySetInnerHTML={{ __html: section.title }}
                />
                <div className="mt-5 space-y-4">
                  {section.content.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-7 text-black/65"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={sections.length}
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
              href="/#kontakt"
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