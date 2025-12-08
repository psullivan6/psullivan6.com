import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogProps,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Kbd, KbdGroup } from '@/components/ui/kbd';
import { Separator } from '@/components/ui/separator';
import { useForm } from '@tanstack/react-form';
import { ArrowUp, Command, Plus } from 'lucide-react';
import os from 'node:os';
import { KeyboardEventHandler, useEffect, useState } from 'react';

const serverIsMac = os.platform() === 'darwin';

const AiDialogSection = () => {
  const isMac =
    typeof window !== 'undefined'
      ? navigator.platform.startsWith('Mac') || navigator.platform.includes('iPhone')
      : serverIsMac;

  const [isOpen, setIsOpen] = useState(false);
  const tForm = useForm({
    defaultValues: {
      prompt: '',
      lastName: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  const handleOpenChange: DialogProps['onOpenChange'] = (isOpenAfterChange) => {
    setIsOpen(isOpenAfterChange);
  };

  const handleTextareaKeyDown: KeyboardEventHandler = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      console.log('tForm', tForm);
      tForm.handleSubmit();
    }
  };

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'i' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  }, []);

  return (
    <section className="mx-24 flex">
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild>
          <button className="w-full block bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-1 cursor-pointer focus-visible:outline outline-offset-2 focus-visible:bg-blue-600 focus-visible:bg-none">
            <div className="w-full flex justify-between py-4 px-6 not-prose border-0 bg-background rounded-[1.25rem] text-base text-primary/75">
              <span>Chat with Patrick AI</span>
              <span>
                <KbdGroup>
                  <Kbd>{isMac ? <Command /> : 'Ctrl'}</Kbd>
                  <span>+</span>
                  <Kbd>I</Kbd>
                </KbdGroup>
              </span>
            </div>
          </button>
        </DialogTrigger>

        <DialogContent
          showCloseButton
          // className="rounded-4xl pt-12 backdrop-blur-lg bg-blue-950/60"
          className="rounded-4xl pt-12 border-none bg-transparent p-0 grid grid-cols-[4fr,1fr]"
          slotProps={{
            close: {
              className: 'relative inset-auto',
            },
          }}
        >
          <DialogTitle className="sr-only">Prompt and Chat with Patrick AI</DialogTitle>
          <form
            className="col-span-2"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              tForm.handleSubmit();
            }}
          >
            <InputGroup className="rounded-3xl !bg-background">
              <tForm.Field name="prompt">
                {(field) => (
                  <InputGroupTextarea
                    placeholder="Ask, Search or Chat..."
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    className="px-5"
                    onChange={(e) => field.handleChange(e.target.value)}
                    onKeyDown={handleTextareaKeyDown}
                  />
                )}
              </tForm.Field>
              <InputGroupAddon align="block-end">
                <InputGroupButton variant="outline" className="rounded-full" size="icon-xs">
                  <Plus />
                </InputGroupButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <InputGroupButton variant="ghost">Auto</InputGroupButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="start" className="[--radius:0.95rem]">
                    <DropdownMenuItem>Auto</DropdownMenuItem>
                    <DropdownMenuItem>Agent</DropdownMenuItem>
                    <DropdownMenuItem>Manual</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <InputGroupText className="ml-auto">52% used</InputGroupText>

                <Separator orientation="vertical" className="!h-4" />

                <InputGroupButton
                  variant="default"
                  className="rounded-full"
                  size="icon-xs"
                  disabled
                >
                  <ArrowUp />
                  <span className="sr-only">Send</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </form>

          <span className="flex justify-center gap-6 text-xs text-muted-foreground opacity-70">
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
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default AiDialogSection;
