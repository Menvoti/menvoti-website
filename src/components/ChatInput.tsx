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
      className="border-t border-gray-200 bg-white px-4 py-3 flex gap-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Schreib eine Nachricht..."
        disabled={isLoading}
        className="flex-1 bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
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
