'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/utilities/cn';
import { useChat } from '@ai-sdk/react';
import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPrompt, { type ChatPromptElement, type ChatPromptProps } from '../ChatPrompt/ChatPrompt';

const getPositionValues = (element: HTMLDivElement) => {
  return element.getBoundingClientRect();
};

const ChatWindow = () => {
  const { messages, sendMessage, regenerate, status } = useChat({
    onError: (err) => toast.error(err.message),
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chatPromptRef = useRef<ChatPromptElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [positionData, setPositionData] = useState<DOMRect | null>(null);

  const handleOpen = () => {
    const positionValues = getPositionValues(containerRef.current as HTMLDivElement);
    setPositionData(positionValues);

    if (containerRef.current) {
      document.body.style.overflow = 'hidden';
      (document.querySelector('header.header') as HTMLElement).style.zIndex = '-1';

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
          { top: 0, left: 0, width: '100%', height: '100%' },
        ],
        {
          duration: 240,
          fill: 'forwards',
          easing: 'ease-out',
        }
      );
    }

    setIsOpen(true);
  };

  const handlePromptSubmit: ChatPromptProps['onSubmit'] = ({ prompt }) => {
    handleOpen();
    sendMessage({ text: prompt });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      }
    };

    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      (containerRef.current as HTMLDivElement).style.cssText = '';
      document.body.style.overflow = '';
      (document.querySelector('header.header') as HTMLElement).style = '';

      chatPromptRef.current?.querySelector('textarea')?.focus();
    }
  }, [isOpen]);

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
            'flex flex-col mx-auto h-full transition-[max-w,padding] duration-300',
            isOpen ? 'max-w-prose' : 'max-w-lg py-4'
          )}
        >
          {isOpen ? (
            <>
              <header className="flex justify-end border-b px-6 py-4 not-prose text-base lg:text-lg xl:text-xl items-center">
                <Button variant="outline" onClick={handleClose}>
                  Close <X />
                </Button>
              </header>

              <ChatMessages messages={messages} regenerate={regenerate} status={status} />
            </>
          ) : null}

          <ChatPrompt
            className={cn(isOpen ? 'p-4' : null)}
            ref={chatPromptRef}
            onSubmit={handlePromptSubmit}
          />
        </div>
      </div>

      {/* Leave-behind "clone" element to take up the same space as the collapsed chat window */}
      {isOpen ? <div style={{ width: positionData?.width, height: positionData?.height }} /> : null}
    </>
  );
};

export default ChatWindow;
