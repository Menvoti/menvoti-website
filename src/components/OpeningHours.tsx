'use client';

import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

const hours = [
  { day: 'Montag', hours: '07:00–15:00' },
  { day: 'Dienstag', hours: '07:00–15:00' },
  { day: 'Mittwoch', hours: '07:00–22:00' },
  { day: 'Donnerstag', hours: '07:00–15:00' },
  { day: 'Freitag', hours: '07:00–15:00' },
  { day: 'Samstag', hours: '07:00–22:00' },
  { day: 'Sonntag', hours: '07:00–22:00' },
];

function isOpenNow() {
  const now = new Date();
  const dayIndex = now.getDay();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour + currentMinute / 60;

  // dayIndex: 0=Sunday, 1=Monday, ..., 6=Saturday
  let openTime = 7;
  let closeTime = 15;

  if (dayIndex === 0) {
    // Sonntag
    openTime = 7;
    closeTime = 22;
  } else if (dayIndex === 1) {
    // Montag
    openTime = 7;
    closeTime = 15;
  } else if (dayIndex === 2) {
    // Dienstag
    openTime = 7;
    closeTime = 15;
  } else if (dayIndex === 3) {
    // Mittwoch
    openTime = 7;
    closeTime = 22;
  } else if (dayIndex === 4) {
    // Donnerstag
    openTime = 7;
    closeTime = 15;
  } else if (dayIndex === 5) {
    // Freitag
    openTime = 7;
    closeTime = 15;
  } else if (dayIndex === 6) {
    // Samstag
    openTime = 7;
    closeTime = 22;
  }

  return currentTime >= openTime && currentTime < closeTime;
}

export default function OpeningHours({ variant = 'card' }: { variant?: 'card' | 'list' }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(isOpenNow());
  }, []);

  if (variant === 'card') {
    return (
      <div className="rounded-[1.5rem] border border-black/5 bg-white p-5 shadow-[0_16px_45px_rgba(0,0,0,0.04)]">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white">
            <Clock className="h-4.5 w-4.5" />
          </div>
          <div className="w-full">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45">Öffnungszeiten</p>
            <div className="mt-3 space-y-1.5">
              {hours.map((hour) => (
                <div key={hour.day} className="flex items-center justify-between text-sm">
                  <span className="text-black/70">{hour.day}</span>
                  <span className="font-medium text-black">{hour.hours}</span>
                </div>
              ))}
            </div>
            {isOpen !== null && (
              <div className="mt-4 flex items-center gap-2 border-t border-black/5 pt-3">
                <div className={`h-2 w-2 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-black/30'}`} />
                <p className="text-xs font-medium text-black/60">
                  {isOpen ? 'Heute geöffnet' : 'Heute geschlossen'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // variant === 'list' (für Footer)
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-black/40">Öffnungszeiten</p>
      <ul className="mt-5 space-y-2.5">
        {hours.map((hour) => (
          <li key={hour.day} className="flex items-center justify-between text-sm text-black/70">
            <span>{hour.day}</span>
            <span className="font-medium text-black/80">{hour.hours}</span>
          </li>
        ))}
      </ul>
      {isOpen !== null && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-black/3 px-3 py-2">
          <div className={`h-1.5 w-1.5 rounded-full ${isOpen ? 'bg-emerald-500' : 'bg-black/30'}`} />
          <p className="text-xs font-medium text-black/60">
            {isOpen ? 'Heute geöffnet' : 'Heute geschlossen'}
          </p>
        </div>
      )}
      <p className="mt-4 text-xs leading-5 text-black/50">
        Termine außerhalb der Öffnungszeiten nach Vereinbarung möglich.
      </p>
    </div>
  );
}
