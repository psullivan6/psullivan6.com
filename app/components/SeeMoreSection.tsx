'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/utilities/cn';
import { ChevronDown } from 'lucide-react';
import { useState, type ComponentPropsWithoutRef } from 'react';

type SeeMoreSectionProps = ComponentPropsWithoutRef<'section'>;

const SeeMoreSection = ({ children, ...props }: SeeMoreSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <section
      className={cn(
        `relative overflow-hidden transition-[max-height] duration-600`,
        isOpen
          ? null
          : `before:content-[''] before:absolute before:inset-0 before:z-10 before:bg-linear-to-b before:from-background/30 before:to-background`,
        isOpen ? 'max-h-[2000px]' : 'max-h-36'
      )}
      {...props}
    >
      {children}
      {isOpen ? null : (
        <Button
          className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 mx-auto [&&]:bg-background [&&]:hover:bg-accent"
          variant="outline"
          onClick={handleClick}
        >
          See More
          <ChevronDown />
        </Button>
      )}
    </section>
  );
};

export default SeeMoreSection;
