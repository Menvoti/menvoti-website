'use client';

import { ReactNode } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant';

  // Parse content for formatting
  const parseContent = (text: string): ReactNode => {
    const parts = text.split(/(\*\*.*?\*\*|\n)/);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index}>{part.replace(/\*\*/g, '')}</strong>
        );
      }
      if (part === '\n') {
        return <br key={index} />;
      }
      return part;
    });
  };

  return (
    <div
      className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} animate-fadeIn`}
    >
      <div
        className={`max-w-xs lg:max-w-sm px-5 py-3 rounded-2xl ${
          isAssistant
            ? 'bg-white text-slate-800 shadow-sm border border-slate-200/50 rounded-bl-none'
            : 'bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-br-none shadow-md'
        }`}
      >
        <p className="text-sm leading-relaxed font-medium">
          {parseContent(message.content)}
        </p>
        <p
          className={`text-xs mt-2 font-medium ${
            isAssistant ? 'text-slate-500' : 'text-slate-300'
          }`}
        >
          {message.timestamp.toLocaleTimeString('de-DE', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
}
