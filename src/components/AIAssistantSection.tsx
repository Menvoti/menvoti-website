'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Check, CheckCircle2, Send, Loader2, Sparkles } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────────────────

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const INITIAL_MESSAGE: Message = {
  id: '1',
  role: 'assistant',
  content:
    'Guten Tag! Ich bin der digitale Rezeptionist von MENVOTI. Womit kann ich Ihnen heute helfen? Wir bieten Möbelmontage, Umzugshilfe, Transporte und Gartenarbeit an.',
  timestamp: new Date(),
};

const WHY_FEATURES = [
  'Anfrage in ca. 2 Minuten',
  'Sofortige Rückfragen',
  'Persönliche Bearbeitung',
  'Kostenlose und unverbindliche Anfrage',
];

const SERVICES = ['Möbelmontage', 'Transporte', 'Umzugshilfe', 'Gartenarbeiten'];

// ── Helpers ───────────────────────────────────────────────────────────────────

function parseContent(text: string): ReactNode {
  const parts = text.split(/(\*\*.*?\*\*|\n)/);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={i}>{part.replace(/\*\*/g, '')}</strong>;
    if (part === '\n') return <br key={i} />;
    return part;
  });
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AIAssistantSection() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip scroll on initial mount — only scroll when new messages arrive
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading || isDone) return;
    setInput('');

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);

      // Show success screen after the confirmation message
      if (data.content.includes('erfolgreich gespeichert')) {
        setTimeout(() => setIsDone(true), 2000);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          role: 'assistant',
          content: 'Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSend(input);
  };

  return (
    <section id="ai-assistant" className="bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* ── Section Header ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-black/60 shadow-[0_6px_24px_rgba(0,0,0,0.04)]">
            <Sparkles className="h-3.5 w-3.5" />
            KI-Assistent
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-black sm:text-5xl lg:text-6xl">
            🤖 Ihr persönlicher
            <br />
            KI-Assistent
          </h2>

          <p className="mt-6 text-lg leading-8 text-black/65">
            Beantworten Sie ein paar Fragen und erhalten Sie schnell eine persönliche
            Rückmeldung zu Ihrem Auftrag.
          </p>

          {/* Service pills */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {SERVICES.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-3.5 py-1.5 text-sm font-medium text-black/65"
              >
                <Check className="h-3 w-3 text-black/40" />
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* ── Why features ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
            Warum unseren KI-Assistenten nutzen?
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {WHY_FEATURES.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-2.5 rounded-2xl border border-black/5 bg-[#fafafa] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black">
                  <Check className="h-2.5 w-2.5 text-white" />
                </div>
                <span className="text-sm font-medium leading-snug text-black/70">{f}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Chat Card ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2.5rem] border border-black/[0.06] bg-white shadow-[0_48px_140px_rgba(0,0,0,0.12)]"
        >

          {/* Card header */}
          <div className="flex items-center gap-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-7 py-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight text-white">MENVOTI KI-Assistent</p>
              <p className="text-xs text-white/50">Professionelle Auftragserfassung</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-xs font-medium text-white/50">Online</span>
            </div>
          </div>

          {/* Messages area */}
          <div className="relative h-[520px] overflow-y-auto bg-gradient-to-b from-slate-50/80 to-white p-6">
            <div className="space-y-4">
              <AnimatePresence initial={false}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className={`flex items-end gap-2.5 ${
                      msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {/* Avatar */}
                    {msg.role === 'assistant' && (
                      <div className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 shadow-md">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}

                    {/* Bubble */}
                    <div
                      className={`max-w-[78%] rounded-2xl px-5 py-3.5 shadow-sm ${
                        msg.role === 'assistant'
                          ? 'rounded-bl-none border border-slate-100 bg-white text-slate-800'
                          : 'rounded-br-none bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-md'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{parseContent(msg.content)}</p>
                      <p
                        className={`mt-1.5 text-[10px] ${
                          msg.role === 'assistant' ? 'text-slate-400' : 'text-slate-400'
                        }`}
                      >
                        {msg.timestamp.toLocaleTimeString('de-DE', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading indicator */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end gap-2.5"
                  >
                    <div className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 shadow-md">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="rounded-2xl rounded-bl-none border border-slate-100 bg-white px-5 py-4 shadow-sm">
                      <div className="flex items-center gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0ms]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:150ms]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:300ms]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div ref={messagesEndRef} />

            {/* ── Success Overlay ────────────────────────────────────────── */}
            <AnimatePresence>
              {isDone && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-white/95 backdrop-blur-md"
                >
                  <motion.div
                    initial={{ scale: 0.88, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
                    className="px-10 text-center"
                  >
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/50">
                      <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold tracking-tight text-slate-900">
                      ✅ Vielen Dank!
                    </h3>
                    <p className="text-base leading-7 text-slate-600">
                      Ihre Anfrage wurde erfolgreich aufgenommen.
                      <br />
                      Unser Team meldet sich schnellstmöglich
                      <br />
                      telefonisch oder per E-Mail bei Ihnen.
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Input area */}
          <div className="border-t border-black/[0.05] bg-white px-6 py-5">
            {isDone ? (
              <p className="py-1 text-center text-sm font-medium text-slate-400">
                Anfrage abgeschlossen ✓
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ihre Nachricht eingeben..."
                  disabled={isLoading}
                  autoComplete="off"
                  className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-100 disabled:opacity-50 transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-md transition-all duration-200 hover:bg-slate-700 hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                  aria-label="Nachricht senden"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
