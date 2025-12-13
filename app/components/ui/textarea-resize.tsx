import { cn } from '@/utilities/cn';
import * as React from 'react';
import TextareaAutosizeComponent from 'react-textarea-autosize';

const textareaStyles = `border-input flex field-sizing-content w-full rounded-md border bg-transparent p-3 text-base shadow-xs transition-[color,box-shadow] outline-none
  placeholder:text-muted-foreground
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
  dark:bg-input/30
  disabled:cursor-not-allowed disabled:opacity-50 text-sm`;

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return <textarea data-slot="textarea" className={cn(textareaStyles, className)} {...props} />;
}

export type TextareaAutosizeProps = React.ComponentProps<typeof TextareaAutosizeComponent>;

function TextareaAutosize({ className, ...props }: TextareaAutosizeProps) {
  return (
    <TextareaAutosizeComponent
      data-slot="textarea"
      className={cn(textareaStyles, className)}
      {...props}
    />
  );
}

export { Textarea, TextareaAutosize };
