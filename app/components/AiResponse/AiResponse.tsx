'use client';

import { cn } from '@/lib/utils';
import { type ComponentProps, memo } from 'react';
import { Streamdown } from 'streamdown';

type AiResponseProps = ComponentProps<typeof Streamdown>;

export const AiResponse = memo(
  ({ className, ...props }: AiResponseProps) => (
    <Streamdown
      className={cn('size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0', className)}
      {...props}
    />
  ),
  (prevProps, nextProps) => prevProps.children === nextProps.children
);

AiResponse.displayName = 'AiResponse';
