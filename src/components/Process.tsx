const steps = [
  { title: "Anfrage", text: "Sie senden uns Ihre Wünsche und wir planen den passenden Service." },
  { title: "Termin", text: "Wir vereinbaren einen passenden Termin und passen alles individuell an." },
  { title: "Ausführung", text: "Unser Team erledigt die Aufgabe sauber, zuverlässig und zügig." },
];

export default function Process() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">So läuft es ab</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Einfach, transparent und ohne Aufwand.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-medium text-slate-500">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
