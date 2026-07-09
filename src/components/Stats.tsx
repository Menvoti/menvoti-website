'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: '4+', label: 'Leistungen' },
  { value: '60 km', label: 'Umkreis' },
  { value: '100%', label: 'Sorgfältig' },
];

export default function Stats() {
  return (
    <section aria-label="MENVOTI Kennzahlen" className="border-t border-black/5 bg-white/70 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.07 }}
            className="rounded-[1.5rem] border border-black/5 bg-white p-8 text-center shadow-[0_16px_40px_rgba(0,0,0,0.03)]"
          >
            <p className="text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl">{metric.value}</p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-black/50">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}