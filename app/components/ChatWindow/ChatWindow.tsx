'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { UIMessage, useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPrompt, { ChatPromptProps } from '../ChatPrompt/ChatPrompt';

const getPositionValues = (element: HTMLDivElement) => {
  return element.getBoundingClientRect();
};

const ChatWindow = ({ messages }: { messages: UIMessage[] }) => {
  // const { messages, sendMessage } = useChat({
  //   onError: (err) => toast.error(err.message),
  // });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [positionData, setPositionData] = useState<DOMRect | null>(null);

  const setOpen = () => {
    const newIsOpen = !isOpen;
    const positionValues = getPositionValues(containerRef.current as HTMLDivElement);
    setPositionData(positionValues);

    if (containerRef.current) {
      if (newIsOpen) {
        document.body.style.overflow = 'hidden';

        containerRef.current.style.cssText = `
          top: ${positionValues.top}px;
          left: ${positionValues.left}px;
          width: ${positionValues.width}px;
          height: ${positionValues.height}px;
        `;

        containerRef.current.animate(
          [
            {
              top: `${positionValues.top}px`,
              left: `${positionValues.left}px`,
              width: `${positionValues.width}px`,
              height: `${positionValues.height}px`,
            },
            { top: '71px', left: 0, width: '100%', height: 'calc(100% - 71px)' },
          ],
          {
            duration: 240,
            fill: 'forwards',
            easing: 'ease-out',
          }
        );
      } else {
        containerRef.current.style.cssText = '';
        document.body.style.overflow = '';
      }
    }

    setIsOpen(newIsOpen);
  };

  const handlePromptSubmit: ChatPromptProps['onSubmit'] = ({ prompt }) => {
    setOpen();
    // sendMessage({ text: prompt })
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={cn(
          'transition-all duration-300',
          isOpen ? 'fixed z-60 bg-background' : 'relative bg-transparent'
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-6 max-w-prose mx-auto h-full transition-[padding] duration-300 py-6',
            isOpen ? 'px-6' : 'px-12'
          )}
        >
          {isOpen ? (
            <div className="h-full overflow-auto">
              <ChatMessages messages={messages} />
            </div>
          ) : null}
          <ChatPrompt onSubmit={handlePromptSubmit} />
        </div>
      </div>

      {/* Leave-behind "clone" element to take up the same space as the collapsed chat window */}
      {isOpen ? <div style={{ width: positionData?.width, height: positionData?.height }} /> : null}
    </>
  );
};

export default ChatWindow;
