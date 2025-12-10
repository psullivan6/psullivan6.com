import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
  MessageResponse,
} from '@/components/ai-elements/message';
import { Reasoning, ReasoningContent, ReasoningTrigger } from '@/components/ai-elements/reasoning';
import { Source, Sources, SourcesContent, SourcesTrigger } from '@/components/ai-elements/sources';
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from '@/components/ai-elements/tool';
import { useChat } from '@ai-sdk/react';
import { CopyIcon, RefreshCcwIcon } from 'lucide-react';
import { CodeBlock } from '../ai-elements/code-block';
import { Loader } from '../ai-elements/loader';

type UseChatProps = ReturnType<typeof useChat>;

type ChatMessagesProps = {
  messages: UseChatProps['messages'];
  regenerate: UseChatProps['regenerate'];
  status: UseChatProps['status'];
};

const ChatMessages = ({ messages, regenerate, status }: ChatMessagesProps) => {
  return (
    <div className="flex flex-col w-full stretch">
      <Conversation className="chat-conversation h-full">
        <ConversationContent>
          {messages.map((message) => (
            <div key={message.id}>
              {message.role === 'assistant' &&
                message.parts.filter((part) => part.type === 'source-url').length > 0 && (
                  <Sources>
                    <SourcesTrigger
                      count={message.parts.filter((part) => part.type === 'source-url').length}
                    />
                    {message.parts
                      .filter((part) => part.type === 'source-url')
                      .map((part, i) => (
                        <SourcesContent key={`${message.id}-${i}`}>
                          <Source key={`${message.id}-${i}`} href={part.url} title={part.url} />
                        </SourcesContent>
                      ))}
                  </Sources>
                )}
              {message.parts.map((part, i) => {
                switch (part.type) {
                  case 'text':
                    return (
                      <Message key={`${message.id}-${i}`} from={message.role}>
                        <MessageContent>
                          <MessageResponse>{part.text}</MessageResponse>
                        </MessageContent>
                        {message.role === 'assistant' && i === messages.length - 1 && (
                          <MessageActions>
                            <MessageAction onClick={() => regenerate()} label="Retry">
                              <RefreshCcwIcon className="size-3" />
                            </MessageAction>
                            <MessageAction
                              onClick={() => navigator.clipboard.writeText(part.text)}
                              label="Copy"
                            >
                              <CopyIcon className="size-3" />
                            </MessageAction>
                          </MessageActions>
                        )}
                      </Message>
                    );
                  case 'reasoning':
                    return (
                      <Reasoning
                        key={`${message.id}-${i}`}
                        className="w-full"
                        isStreaming={
                          status === 'streaming' &&
                          i === message.parts.length - 1 &&
                          message.id === messages.at(-1)?.id
                        }
                      >
                        <ReasoningTrigger />
                        <ReasoningContent>{part.text}</ReasoningContent>
                      </Reasoning>
                    );
                  case 'dynamic-tool':
                    return (
                      <Tool key={`${message.id}-${i}`}>
                        <ToolHeader state={part.state} type={`tool-${part.toolName}`} />
                        <ToolContent>
                          <ToolInput input={part.input} />
                          {part.state === 'output-available' && (
                            <ToolOutput
                              errorText={part.errorText}
                              output={
                                <CodeBlock code={JSON.stringify(part.output)} language="json" />
                              }
                            />
                          )}
                        </ToolContent>
                      </Tool>
                    );
                  case 'step-start':
                    return null;
                  default:
                    return <pre key={`${message.id}-${i}`}>{JSON.stringify(part, null, 2)}</pre>;
                }
              })}
            </div>
          ))}
          {status === 'submitted' && <Loader />}
        </ConversationContent>

        <ConversationScrollButton />
      </Conversation>
    </div>
  );
};

export default ChatMessages;
