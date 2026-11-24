import { useState } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({
  onSend,
  isLoading,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) return;

    onSend(trimmedMessage);
    setMessage("");
  };

  return (
    <div className="border-t border-gray-100 bg-white px-4 py-5">
      <div className="mx-auto flex max-w-3xl items-end gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm focus-within:border-violet-400">

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit();
            }
          }}
          placeholder="Message Cognify..."
          rows={1}
          disabled={isLoading}
          className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />

        <button
          onClick={handleSubmit}
          disabled={!message.trim() || isLoading}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label="Send message"
        >
          <ArrowUp size={19} />
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400">
        Cognify can make mistakes. Verify important information.
      </p>
    </div>
  );
}