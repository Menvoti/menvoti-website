'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock3, MapPin, ShieldCheck, Sparkles, Star } from "lucide-react";

const infoItems = [
  { icon: Star, label: "5 Sterne" },
  { icon: Clock3, label: "24h Antwort" },
  { icon: MapPin, label: "Köln +60 km" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="absolute right-[-6rem] top-[-5rem] h-72 w-72 rounded-full bg-white/80 blur-3xl" />
      <div className="absolute left-[-2rem] bottom-[-2rem] h-56 w-56 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="mx-auto flex max-w-7xl flex-col lg:min-h-[760px] lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-2xl pb-12 lg:pb-0"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-black/70 shadow-[0_10px_34px_rgba(0,0,0,0.04)]">
            <Sparkles className="h-3.5 w-3.5" />
            Premium Home Services
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[0.92] tracking-[-0.04em] text-black sm:text-6xl lg:text-[5.25rem] lg:leading-[0.9]">
            Professionelle Hilfe
            <br />
            für Ihr Zuhause.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-black/65 sm:text-xl">
            Möbelmontage, Transporte, Umzugshilfe und Gartenarbeit – zuverlässig in Köln und Umgebung.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#ai-assistant"
              className="group inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-black/90"
            >
              Kostenloses Angebot
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+4917662792171"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-black hover:text-white"
            >
              Jetzt anrufen
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {infoItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white/90 px-3.5 py-2 text-sm font-medium text-black/70 shadow-[0_8px_24px_rgba(0,0,0,0.03)]"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: "easeOut", delay: 0.12 }}
          whileHover={{ scale: 1.01, rotate: -0.6, y: -6 }}
          className="relative z-10 mt-8 w-full max-w-[620px] self-center lg:mt-0 lg:self-end"
        >
          <div className="absolute inset-x-10 bottom-[-1.25rem] h-20 rounded-full bg-black/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.4rem] border border-black/5 bg-white p-2 shadow-[0_35px_100px_rgba(0,0,0,0.14)] lg:translate-x-6 lg:-translate-y-2">
            <Image
              src="/images/hero.jpg"
              alt="Premium Home Services von MENVOTI"
              width={1400}
              height={1700}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 45vw"
              className="h-[26rem] w-full rounded-[1.85rem] object-cover sm:h-[32rem] lg:h-[42rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
