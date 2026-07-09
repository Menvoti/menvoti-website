import { OpenAI } from 'openai';
import { MENVOTI_SYSTEM_PROMPT } from '@/prompts/systemPrompt';

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key not configured');
  }
  return new OpenAI({ apiKey });
}

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages format' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const openai = getOpenAIClient();

    const formattedMessages = [
      { role: 'system' as const, content: MENVOTI_SYSTEM_PROMPT },
      ...messages.map(
        (msg: { role: string; content: string }) => ({
          role: msg.role as 'user' | 'assistant' | 'system',
          content: msg.content,
        }),
      ),
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: formattedMessages,
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 0.95,
    });

    const assistantMessage =
      response.choices[0]?.message?.content || 'Ich konnte keine Antwort generieren.';

    return new Response(
      JSON.stringify({
        role: 'assistant',
        content: assistantMessage,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    console.error('Chat API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        error: 'An error occurred while processing your request',
        details: errorMessage,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
}
