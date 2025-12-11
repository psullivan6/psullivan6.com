import { cn } from '@/utilities/cn';
import { lato } from '@/utilities/fonts';
import type { ComponentPropsWithoutRef } from 'react';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;

export const components = {
  h1: ({ className, ...props }: HeadingProps) => {
    return <h1 className={cn(lato.className, className, '[&&]:text-[2.25em] my-0')} {...props} />;
  },
  h2: ({ className, ...props }: HeadingProps) => {
    return <h2 className={cn(className, '[&&]:text-[1.5em]')} {...props} />;
  },
  p: ({ className, ...props }: ParagraphProps) => {
    return (
      <p
        className={cn(
          className,
          `
          [h1+&]:my-2 [h1+&]:tracking-widest [h1+&]:text-[0.75em] [h1+&]:uppercase
          [h2+&]:my-2 [h2+&]:tracking-widest [h2+&]:text-[0.75em] [h2+&]:uppercase
        `
        )}
        {...props}
      />
    );
  },
};
