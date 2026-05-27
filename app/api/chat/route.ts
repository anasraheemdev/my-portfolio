import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_SYSTEM_PROMPT } from "@/lib/portfolio-chat-context";

export const maxDuration = 30;

type ChatMessage = { role: "user" | "assistant"; content: string };

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

function sanitizeMessages(raw: unknown): ChatMessage[] | null {
  if (!Array.isArray(raw)) return null;
  const out: ChatMessage[] = [];
  for (const item of raw.slice(-14)) {
    if (!item || typeof item !== "object") continue;
    const role = (item as { role?: string }).role;
    const content = (item as { content?: string }).content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string" || !content.trim()) continue;
    out.push({ role, content: content.trim().slice(0, 8000) });
  }
  return out.length ? out : null;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "GROQ_API_KEY is not set. Save it in .env.local at the project root, then restart npm run dev.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const messages = sanitizeMessages(
    (body as { messages?: unknown })?.messages
  );
  if (!messages) {
    return NextResponse.json(
      { error: "Provide a non-empty messages array (user/assistant only)." },
      { status: 400 }
    );
  }

  const model =
    process.env.GROQ_MODEL?.trim() || "llama-3.1-8b-instant";

  try {
    const groqRes = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.45,
        max_tokens: 600,
        messages: [
          { role: "system", content: PORTFOLIO_SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!groqRes.ok) {
      const errBody = await groqRes.text().catch(() => "");
      console.error("[chat] Groq HTTP", groqRes.status, errBody.slice(0, 500));
      return NextResponse.json(
        { error: "Assistant is temporarily unavailable. Try again soon." },
        { status: 502 }
      );
    }

    const data = (await groqRes.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const text =
      data.choices?.[0]?.message?.content?.trim() ||
      "I couldn't generate a reply. Please try again.";

    return NextResponse.json({ message: text });
  } catch (e) {
    console.error("[chat]", e);
    return NextResponse.json(
      { error: "Network error talking to the assistant." },
      { status: 502 }
    );
  }
}
