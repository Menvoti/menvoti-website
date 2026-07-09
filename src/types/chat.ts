/**
 * Chat Types
 * 
 * Type definitions for chat and conversation functionality.
 * 
 * @module types/chat
 */

export interface ChatMessage {
  id: string;
  conversationId: string;
  userId: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

export interface Conversation {
  id: string;
  userId: string;
  title: string;
  description?: string;
  messages: ChatMessage[];
  status: 'active' | 'archived' | 'completed';
  settings?: ConversationSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface ConversationSettings {
  model: string;
  temperature: number;
  maxTokens: number;
  systemPrompt?: string;
}

export interface ChatCompletionParams {
  conversationId: string;
  userId: string;
  message: string;
  systemPrompt?: string;
  temperature?: number;
  maxTokens?: number;
}

export interface ChatCompletionResult {
  messageId: string;
  content: string;
  tokensUsed: number;
  finishReason: 'stop' | 'length' | 'error';
}

export interface ChatSession {
  id: string;
  userId: string;
  sessionToken: string;
  createdAt: Date;
  expiresAt: Date;
  isActive: boolean;
}
