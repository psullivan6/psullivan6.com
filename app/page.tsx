// 'use client';

import BioSnarky from './content/bio-snarky.md';
import Bio from './content/bio.mdx';

import experiencesContent from '@/content/experience.json';
import Lowes from '@/content/experience/lowes.mdx';
import Pac12Conference from '@/content/experience/pac-12-conference.mdx';
import Struck from '@/content/experience/struck.mdx';
import TheRegisterGuard from '@/content/experience/the-register-guard.mdx';
import Union from '@/content/experience/union.mdx';

import UofO from '@/content/experience/university-of-oregon.mdx';
import heroContent from '@/content/hero.json';
import ProjectsUIScorecards from '@/content/projects/ui-scorecards.mdx';
import TechAndTools from '@/content/technologies.mdx';
import { readFileSync } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import { resolve } from 'path';
import AiDialogSection from './components/AiDialogSection/AiDialogSection';
// import { useContentContext } from './components/ContentProvider/ContentProvider';
import { UIMessage } from 'ai';
import ChatWindow from './components/ChatWindow/ChatWindow';
import { Button } from './components/ui/button';
import { lato } from './utilities/fonts';

// import './page.css';

const messagesFilePath = resolve(process.cwd(), '.chats/yoUWrixVNxQMfE3A.json');

const HomePage = () => {
  // TODO - make this tone context provider server-side logic; store in file on system instead of in context?
  const tone = 'default';
  // const { tone } = useContentContext();
  const messagesData = readFileSync(messagesFilePath, 'utf-8');
  const messages: UIMessage[] = JSON.parse(messagesData);

  return (
    <main className="relative z-10 bg-background min-h-[calc(100vh-71px)] shadow-xl">
      <div className="prose prose-slate lg:prose-lg xl:prose-xl dark:prose-invert prose-headings:mb-0 mx-auto p-6">
        {/* Hero Title Section */}
        <section className="my-40">
          <h2
            className={`${lato.className} !text-[4em]/[1.1em] font-black`}
            dangerouslySetInnerHTML={{ __html: heroContent[tone].title }}
          />

          <div className="flex items-center gap-4 [&&]:mt-6 mb-12">
            <Button asChild>
              <Link
                href="Patrick Sullivan - Resume 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </Link>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <Link
                href="https://www.linkedin.com/in/psullivan6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/in-logo/InBug-White.png"
                  alt="Official LinkedIn [in] Logo"
                  className="block p-2 light:invert"
                  width={840}
                  height={779}
                />
              </Link>
            </Button>
          </div>
        </section>

        {/* AI Client Section */}
        <ChatWindow messages={messages} />

        {/* Bio Section */}
        <section id="bio">{tone === 'snarky' ? <BioSnarky /> : <Bio />}</section>

        {/* Experience Section */}
        <div>
          <h2
            id="experience"
            className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-background/50 backdrop-blur-lg"
            dangerouslySetInnerHTML={{ __html: experiencesContent[tone].label }}
          />

          <section className="mb-24 group experience">
            <div className="flex flex-col mb-9 after:content-['._._\1F332_\1F3D4_\1F332_._.'] after:mt-9 after:mx-auto after:block after:color-prose">
              {/* @ts-ignore - mdx.d.ts file doesn't resolve this */}
              <Lowes tone={tone} />
            </div>
            <div className="flex flex-col mb-9 after:content-['._._\1F332_\1F3D4_\1F332_._.'] after:mt-9 after:mx-auto after:block after:color-prose">
              <Union />
            </div>
            <div className="flex flex-col mb-9 after:content-['._._\1F332_\1F3D4_\1F332_._.'] after:mt-9 after:mx-auto after:block after:color-prose">
              <Struck />
            </div>
            <div className="flex flex-col mb-9 after:content-['._._\1F332_\1F3D4_\1F332_._.'] after:mt-9 after:mx-auto after:block after:color-prose">
              <TheRegisterGuard />
            </div>
            <div className="mb-18">
              <Pac12Conference />
            </div>
          </section>

          {/* <section className="mb-24">
            <UofO />
          </section> */}
        </div>

        {/* Education Section */}
        <div>
          <h2
            id="education"
            className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-background/50 backdrop-blur-lg"
            dangerouslySetInnerHTML={{ __html: experiencesContent[tone].label }}
          />
          <UofO />
        </div>

        {/* <h2 className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-background/50 backdrop-blur-lg">
          Featured Projects
        </h2>

        <ProjectsUIScorecards /> */}

        <h2 className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-background/50 backdrop-blur-lg">
          Technologies & Tools
        </h2>

        <p>
          I've used many technologies and tools over my career, ranging from ActionScript in Flash
          to a custom-built MCP Server and Tailwind CSS. I'm eager to learn and confident in my
          ability to adopt new technologies and tools. Here's a lst of the ones I'm actively using
          and some I've used recently.
        </p>

        <div className="text-[0.75em] columns-1 xs:columns-2 md:columns-3 ">
          <TechAndTools />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
