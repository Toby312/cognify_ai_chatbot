import { Sparkles } from "lucide-react";
import type { Message } from "../types/chat";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string) => void;
}

const suggestions = [
  "Explain artificial intelligence",
  "Help me learn Python",
  "Give me ideas for a new project",
  "Explain how large language models work",
];

export default function ChatWindow({
  messages,
  isLoading,
  onSend,
}: ChatWindowProps) {
  const hasMessages = messages.length > 0;

  return (
    <main className="flex min-w-0 flex-1 flex-col bg-white">

      <header className="flex h-16 items-center justify-between border-b border-gray-100 px-6">
        <div>
          <h2 className="font-semibold text-gray-800">
            New conversation
          </h2>
          <p className="text-xs text-gray-400">
            Your AI assistant
          </p>
        </div>

        <span className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Online
        </span>
      </header>

      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-8">

        {!hasMessages ? (
          <div className="m-auto w-full max-w-2xl">

            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                <Sparkles size={30} />
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                What can I help you with?
              </h1>

              <p className="mt-3 text-sm text-gray-500">
                Ask Cognify anything. Let's explore ideas together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => onSend(suggestion)}
                  className="rounded-xl border border-gray-200 p-4 text-left text-sm text-gray-600 transition hover:border-violet-300 hover:bg-violet-50"
                >
                  {suggestion}
                </button>
              ))}
            </div>

          </div>
        ) : (
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-7">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
              />
            ))}

            {isLoading && (
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                  <Sparkles size={18} />
                </div>

                Cognify is thinking...
              </div>
            )}
          </div>
        )}

      </div>

      <ChatInput
        onSend={onSend}
        isLoading={isLoading}
      />

    </main>
  );
}