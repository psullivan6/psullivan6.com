'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { UIMessage, useChat } from '@ai-sdk/react';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';
import ChatPrompt from '../ChatPrompt/ChatPrompt';

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

  const sendMessage: ReturnType<typeof useChat>['sendMessage'] = () => {
    console.log('sdfgsdfg');
    return Promise.resolve();
  };

  const handleToggle: ButtonProps['onClick'] = (event) => {
    const newIsOpen = !isOpen;
    const positionValues = getPositionValues(event.currentTarget.parentElement as HTMLDivElement);
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
            { top: '71px', left: 0, width: '100%', height: '100%' },
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

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className={cn('border border-red-500 bg-background', isOpen ? 'fixed z-60' : 'relative')}
      >
        <ChatPrompt sendMessage={sendMessage} />
        <Button onClick={handleToggle}>EXPAND FROM POSITION</Button>
      </div>
      {isOpen ? <div style={{ width: positionData?.width, height: positionData?.height }} /> : null}
    </>
  );
};

export default ChatWindow;
