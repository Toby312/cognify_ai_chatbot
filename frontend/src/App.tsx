import { useState } from "react";

import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

import { sendMessage } from "./services/chatService";
import type { Message } from "./types/chat";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    };
  
    setMessages((previous) => [...previous, userMessage]);
    setIsLoading(true);
  
    try {
      const reply = await sendMessage(content, messages);
  
      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: reply,
      };
  
      setMessages((previous) => [...previous, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      };
  
      setMessages((previous) => [...previous, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white">

      <div className="hidden md:flex">
        <Sidebar onNewChat={handleNewChat} />
      </div>

      <ChatWindow
        messages={messages}
        isLoading={isLoading}
        onSend={handleSendMessage}
      />

    </div>
  );
}

export default App;