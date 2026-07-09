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
        className={`max-w-xs lg:max-w-sm px-4 py-3 rounded-lg ${
          isAssistant
            ? 'bg-white text-gray-800 shadow-sm rounded-bl-none'
            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none'
        }`}
      >
        <p className="text-sm leading-relaxed">
          {parseContent(message.content)}
        </p>
        <p
          className={`text-xs mt-2 ${
            isAssistant ? 'text-gray-500' : 'text-blue-100'
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
