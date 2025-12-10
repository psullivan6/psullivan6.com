import { useChat } from '@ai-sdk/react';
import AiResponse from '../AiResponse/AiResponse';

type AiChatProps = {
  messages: ReturnType<typeof useChat>['messages'];
};

const AiChat = ({ messages }: AiChatProps) => {
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case 'text':
                return <AiResponse key={`${message.id}-${i}`}>{part.text}</AiResponse>;
              default:
                return <pre key={`${message.id}-${i}`}>{JSON.stringify(part, null, 2)}</pre>;
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default AiChat;
