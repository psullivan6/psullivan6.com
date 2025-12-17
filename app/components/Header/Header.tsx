'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import headerContent from '@/content/header.json';
import { Beer, GlassWater, Laptop, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useContentContext } from '../ContentProvider/ContentProvider';

const Header = () => {
  const { setTone, tone } = useContentContext();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleToneChange = (newTone: string) => {
    setTone(newTone as 'default' | 'snarky');
  };

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  }, []);

  return (
    <header className="header sticky top-0 z-20 bg-background border-b not-prose text-base lg:text-lg xl:text-xl max-w-[65ch] mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="font-mono text-center uppercase text-base font-medium tracking-widest text-sky-600 dark:text-sky-400">
          Patrick Sullivan
        </h1>
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {tone === 'snarky' ? 'Change Stuff' : 'Menu'}
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>Themes</DropdownMenuLabel>

          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="dark">
              Dark
              <DropdownMenuShortcut>
                <Moon />
              </DropdownMenuShortcut>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="light">
              Light
              <DropdownMenuShortcut>
                <Sun />
              </DropdownMenuShortcut>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              System
              <DropdownMenuShortcut>
                <Laptop />
              </DropdownMenuShortcut>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Copy Tone</DropdownMenuLabel>

          <DropdownMenuRadioGroup value={tone} onValueChange={handleToneChange}>
            <DropdownMenuRadioItem value="default">
              Normal
              <DropdownMenuShortcut>
                <GlassWater />
              </DropdownMenuShortcut>
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="snarky">
              Snarky
              <DropdownMenuShortcut>
                <Beer />
              </DropdownMenuShortcut>
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
