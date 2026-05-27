"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { IconMessageCircle, IconSend, IconX } from "@tabler/icons-react";

type Role = "user" | "assistant";

type Msg = { role: Role; content: string };

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hey — ask me about Anas: what he builds, where he's worked, or the best way to reach him.",
};

export function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  /** User/assistant turns only (no welcome) — API-compatible. */
  const [thread, setThread] = useState<Msg[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const displayMessages = thread.length === 0 ? [WELCOME] : [WELCOME, ...thread];

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => inputRef.current?.focus(), 200);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [thread, open, loading]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    setError(null);
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    const apiPayload = [...thread, userMsg];

    setThread((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiPayload }),
      });
      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setThread((prev) => prev.slice(0, -1));
        return;
      }

      const reply = data.message?.trim();
      if (reply) {
        setThread((prev) => [...prev, { role: "assistant", content: reply }]);
      } else {
        setError("Empty response. Try again.");
        setThread((prev) => prev.slice(0, -1));
      }
    } catch {
      setError("Network error. Check your connection.");
      setThread((prev) => prev.slice(0, -1));
    } finally {
      setLoading(false);
    }
  }, [input, loading, thread]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="portfolio-chat-panel"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed bottom-6 right-6 z-[6000] flex h-14 w-14 items-center justify-center rounded-full",
          "border border-white/15 bg-black/80 text-white shadow-lg shadow-black/40 backdrop-blur-md",
          "transition-transform hover:scale-105 active:scale-95",
          open && "ring-2 ring-accent-blue/60"
        )}
        data-cursor-hover
      >
        {open ? (
          <IconX className="h-6 w-6" aria-hidden />
        ) : (
          <IconMessageCircle className="h-6 w-6" aria-hidden />
        )}
        <span className="sr-only">
          {open ? "Close portfolio chat" : "Open portfolio chat"}
        </span>
      </button>

      {open && (
        <div
          id="portfolio-chat-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Chat about Muhammad Anas Raheem"
          className={cn(
            "fixed bottom-24 right-6 z-[6000] flex w-[min(100vw-3rem,22rem)] flex-col overflow-hidden rounded-2xl",
            "border border-white/10 bg-black/95 shadow-2xl shadow-black/60 backdrop-blur-xl",
            "max-h-[min(70vh,28rem)]"
          )}
        >
          <div className="border-b border-white/10 px-4 py-3">
            <p className="font-nohemi text-xs font-medium uppercase tracking-widest text-white/50">
              Portfolio assistant
            </p>
            <p className="font-harmond text-lg font-semibold text-white">
              Ask about Anas
            </p>
          </div>

          <div
            ref={listRef}
            data-lenis-prevent
            className="flex flex-1 flex-col gap-3 overflow-y-auto px-4 py-3 font-nohemi text-sm"
          >
            {displayMessages.map((m, i) => (
              <div
                key={`${m.role}-${i}-${m.content.slice(0, 24)}`}
                className={cn(
                  "max-w-[95%] rounded-xl px-3 py-2 leading-relaxed",
                  m.role === "user"
                    ? "ml-auto bg-white/10 text-white"
                    : "mr-auto border border-white/10 bg-white/[0.04] text-white/85"
                )}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-white/50">
                Thinking…
              </div>
            )}
            {error && (
              <p className="text-center text-xs text-red-400/90">{error}</p>
            )}
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                rows={2}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about experience, skills, projects…"
                disabled={loading}
                className={cn(
                  "min-h-[2.75rem] flex-1 resize-none rounded-xl border border-white/10 bg-black/60 px-3 py-2",
                  "text-sm text-white placeholder:text-white/35 outline-none",
                  "focus:border-accent-blue/50"
                )}
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={loading || !input.trim()}
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
                  "bg-accent-blue text-white transition-opacity",
                  (loading || !input.trim()) && "pointer-events-none opacity-40"
                )}
                aria-label="Send message"
                data-cursor-hover
              >
                <IconSend className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
