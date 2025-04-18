import React, { useActionState } from "react";
import Header from "./Components/Header";
import Chat from "./Components/Chat";
import TextArea from "./Components/TextArea";

async function addMessage(prevMessages, formData) {
  await new Promise((res) => setTimeout(res, 1500));

  const text = formData.get("text");
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return [...prevMessages, { text, time }];
}

export default function App() {
  const [messages, messageAction, isPending] = useActionState(addMessage, []);

  return (
    <div className="flex flex-col h-screen max-w-xxl mx-auto border  overflow-hidden">
      <Header />
      <Chat messages={messages} loading={isPending} />
      <TextArea formAction={messageAction} />
    </div>
  );
}
