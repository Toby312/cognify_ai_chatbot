import type { ChatRequest, ChatResponse, Message } from "../types/chat";

const API_URL = import.meta.env.VITE_API_URL;

export async function sendMessage(
  message: string,
  history: Message[]
): Promise<string> {
  const payload: ChatRequest = {
    message,
    history: history.map(({ role, content }) => ({
      role,
      content,
    })),
  };

  const response = await fetch(`${API_URL}/api/chat/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to get a response from Cognify.");
  }

  const data: ChatResponse = await response.json();

  return data.reply;
}