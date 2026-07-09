'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Möbelmontage",
    description: "Professioneller Aufbau von IKEA Möbeln, Schränken, Betten, Regalen und mehr.",
    href: "/services/moebelmontage",
    image: "/images/montage.jpg",
  },
  {
    title: "Transporte",
    description: "Sichere Transporte für Möbel, Einkäufe, Baumaterialien und vieles mehr.",
    href: "/services/transporte",
    image: "/images/transport.jpg",
  },
  {
    title: "Umzugshilfe",
    description: "Unterstützung beim Tragen, Abbauen, Transportieren und Aufbau Ihrer Möbel.",
    href: "/services/umzughilfe",
    image: "/images/umzug.jpg",
  },
  {
    title: "Gartenarbeit",
    description: "Pflege, Aufräumen, Mulch verteilen, Unkraut entfernen und vieles mehr.",
    href: "/services/gartenarbeit",
    image: "/images/garten.jpg",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="bg-[#fafafa] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-black/50">Unsere Leistungen</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
            Professionelle Dienstleistungen für Ihr Zuhause.
          </h2>
          <p className="mt-6 text-lg leading-8 text-black/65">
            Von Möbelmontage bis Gartenarbeit – wir unterstützen Sie zuverlässig, schnell und professionell.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)]"
            >
              <Link href={service.href} scroll={true} className="block">
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 42vw"
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
                  />
                </div>

                <div className="p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black">{service.title}</h3>
                      <p className="mt-3 text-base leading-7 text-black/65">{service.description}</p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-8 inline-flex items-center text-sm font-semibold text-black transition-colors duration-200 group-hover:text-black/70">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
