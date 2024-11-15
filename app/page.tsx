"use client";

import { useState } from "react";

// Define types for the chat messages
type Message = {
  role: "user" | "bot";
  content: string;
};

// Static responses for the chatbot
const chatbotResponses: Record<string, string> = {
  hello: "Hi there! How can I assist you today?",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "what is your name": "I'm ChatBot! Your virtual assistant.",
  bye: "Goodbye! Have a great day!",
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const handleSend = () => {
    if (input.trim() === "") return;
    if (input.toLowerCase() === "hello") {
      const newMessage: Message = {
        content: input,
        role: "user",
      };
      const botMessage: Message = {
        content: chatbotResponses.hello,
        role: "bot",
      };
      setMessages((prev) => [...prev, newMessage]);
      setMessages((prev) => [...prev, botMessage]);
      setInput("");
    } else if (input.toLowerCase() === "bye") {
      const newMessage: Message = {
        content: input,
        role: "user",
      };
      const botMessage: Message = {
        content: chatbotResponses.bye,
        role: "bot",
      };
      setMessages((prev) => [...prev, newMessage]);
      setMessages((prev) => [...prev, botMessage]);
      setInput("");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Simple Chatbot</h1>
        <div className="h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 mb-4 bg-gray-50">
          {messages.length < 0 && (
            <p className="text-gray-500 text-center">
              Start the conversation by saying "Hello".
            </p>
          )}
          <div>
            {messages.map((box, i) => (
              <div
                key={box.content + i}
                className={` bg-gray-200 text-black px-2 py-2 mb-2 rounded-lg text-white  w-fit flex  ${
                  box.role === "user" && "ml-auto !bg-blue-500 !text-white"
                }`}
              >
                {box.content}
              </div>
            ))}
          </div>
        </div>

        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
