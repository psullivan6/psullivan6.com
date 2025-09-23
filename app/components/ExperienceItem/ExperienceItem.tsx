import type { ReactNode } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

type ExperienceItemProps = {
  header: ReactNode;
  children: ReactNode;
};

const ExperienceItem = ({ header, children }: ExperienceItemProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger isReversed title="Read more">
          <header className="w-full flex items-end justify-between [&>*]:m-0 text-base">
            {header}
          </header>
        </AccordionTrigger>

        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ExperienceItem;
