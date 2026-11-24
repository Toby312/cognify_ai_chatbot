export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  history: {
    role: "user" | "assistant";
    content: string;
  }[];
}

export interface ChatResponse {
  reply: string;
}