import { Bot, User } from "lucide-react";
import type { Message } from "../types/chat";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({
  message,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
          isUser
            ? "bg-gray-200 text-gray-700"
            : "bg-violet-100 text-violet-700"
        }`}
      >
        {isUser ? <User size={18} /> : <Bot size={19} />}
      </div>

      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-7 ${
          isUser
            ? "bg-violet-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">
          {message.content}
        </p>
      </div>
    </div>
  );
}