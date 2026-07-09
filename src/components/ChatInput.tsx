'use client';

import { Dispatch, SetStateAction } from 'react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

export function ChatInput({
  onSendMessage,
  isLoading,
  input,
  setInput,
}: ChatInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 items-center"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Schreib eine Nachricht..."
        disabled={isLoading}
        className="flex-1 bg-slate-100 border border-slate-300/50 rounded-full px-5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-800 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all font-medium placeholder:text-slate-500 placeholder:font-normal"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white rounded-full p-2.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg"
        aria-label="Send message"
      >
        {isLoading ? (
          <svg
            className="w-5 h-5 animate-spin"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        )}
      </button>
    </form>
  );
}
