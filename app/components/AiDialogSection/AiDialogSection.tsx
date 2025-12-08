import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Kbd, KbdGroup } from '@/components/ui/kbd';
import { useChat } from '@ai-sdk/react';
import { useForm } from '@tanstack/react-form-nextjs';
import { ArrowUp, LoaderCircle } from 'lucide-react';
import { KeyboardEventHandler, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import AiChat from './AIChat';

const AiDialogSection = () => {
  const { messages, sendMessage } = useChat({
    onError: (err) => toast.error(err.message),
  });

  const promptRef = useRef<HTMLTextAreaElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const tsForm = useForm({
    defaultValues: {
      prompt: '',
    },
    onSubmit: async ({ formApi, value: { prompt } }) => {
      sendMessage({ text: prompt });
      formApi.reset();
    },
  });

  const handleTextareaKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }
  };

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'i' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (promptRef?.current) {
          promptRef?.current.focus();
        }
      }
    };

    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  }, []);

  return (
    <section className="mx-24">
      <AiChat messages={messages} />

      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          tsForm.handleSubmit();
        }}
        className="col-span-2"
      >
        <InputGroup className="rounded-3xl !bg-background items-end">
          <tsForm.Field
            name="prompt"
            validators={{
              onChange: ({ value }) => (value === '' ? 'Please enter a prompt' : undefined),
            }}
          >
            {(field) => (
              <InputGroupTextarea
                ref={promptRef}
                placeholder="Ask, Search or Chat..."
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                className="px-5"
                onChange={(e) => field.handleChange(e.target.value)}
                onKeyDown={handleTextareaKeyDown}
              />
            )}
          </tsForm.Field>
          <InputGroupAddon align="inline-end" className="p-2.5 [&&]:mr-0">
            <tsForm.Subscribe
              selector={(state) => [state.canSubmit, state.isSubmitting, state.isPristine]}
            >
              {([canSubmit, isSubmitting, isPristine]) => (
                <InputGroupButton
                  type="submit"
                  variant="default"
                  className="rounded-full"
                  size="icon-xs"
                  disabled={!canSubmit || isPristine}
                >
                  {isSubmitting ? <LoaderCircle className="animate-spin" /> : <ArrowUp />}
                  <span className="sr-only">Send</span>
                </InputGroupButton>
              )}
            </tsForm.Subscribe>
          </InputGroupAddon>
        </InputGroup>
      </form>

      <span className="flex justify-center mt-2 gap-6 text-xs text-muted-foreground opacity-70 not-prose">
        <span>
          <Kbd>Enter</Kbd> to Submit
        </span>
        <span>
          <KbdGroup>
            <Kbd>Shift</Kbd>
            <span>+</span>
            <Kbd>Enter</Kbd>
          </KbdGroup>{' '}
          for a line break
        </span>
      </span>
    </section>
  );
};

export default AiDialogSection;
