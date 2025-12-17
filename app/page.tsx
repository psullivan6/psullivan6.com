'use client';

// Bio
import BioSnarky from './content/bio-snarky.md';
import Bio from './content/bio.mdx';

// Education
import EducationSnarky from './content/education-snarky.md';
import Education from './content/education.mdx';

// Experience
import LowesSnarky from '@/content/experience/lowes-snarky.md';
import Lowes from '@/content/experience/lowes.mdx';
import Pac12ConferenceSnarky from '@/content/experience/pac-12-snarky.md';
import Pac12Conference from '@/content/experience/pac-12.mdx';
import TheRegisterGuardSnarky from '@/content/experience/register-guard-snarky.md';
import TheRegisterGuard from '@/content/experience/register-guard.mdx';
import StruckSnarky from '@/content/experience/struck-snarky.md';
import Struck from '@/content/experience/struck.mdx';
import UnionSnarky from '@/content/experience/union-snarky.md';
import Union from '@/content/experience/union.mdx';
import UofOSnarky from '@/content/experience/university-of-oregon-snarky.md';
import UofO from '@/content/experience/university-of-oregon.mdx';

// Technologies
import TechAndToolsSnarky from '@/content/technologies-snarky.md';
import TechAndTools from '@/content/technologies.md';

// Misc.
import { components as sectionMdxComponents } from '@/content/mdx-components';
import { cn } from '@/utilities/cn';
import { lato } from '@/utilities/fonts';
import { FileUser } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ChatWindow from './components/ChatWindow/ChatWindow';
import { useContentContext } from './components/ContentProvider/ContentProvider';
import SeeMoreSection from './components/SeeMoreSection';
import Separator from './components/Separator';
import { Button } from './components/ui/button';

const HomePage = () => {
  const { tone } = useContentContext();

  return (
    <main className="relative z-10 bg-background min-h-[calc(100vh-71px)] shadow-xl">
      <div className="prose prose-slate lg:prose-lg xl:prose-xl dark:prose-invert prose-headings:mb-0 mx-auto p-6">
        {/* Hero Title Section */}
        <section className="mb-24">
          <h2
            className={cn(lato.className, `!text-[4em]/[1.1em] font-black`)}
            dangerouslySetInnerHTML={{
              __html:
                tone === 'snarky'
                  ? 'I&rsquo;m here to make money and do cool 💩.'
                  : 'I&rsquo;m here to explore, learn, and build cool stuff.',
            }}
          />

          <div className="flex items-center gap-4 [&&]:mt-6">
            <Button asChild>
              <Link
                href="Patrick Sullivan - Resume 2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileUser />
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

        {/* AI Chat Section */}
        <ChatWindow />

        {/* Bio Section */}
        <section id="bio" className="section my-24">
          {tone === 'snarky' ? <BioSnarky /> : <Bio />}
        </section>

        {/* Experience Section */}
        <section className="section mb-24">
          <h2
            id="experience"
            dangerouslySetInnerHTML={{
              __html: tone === 'snarky' ? 'Things I&rsquo;ve been paid to do' : 'Experience',
            }}
          />

          <div>
            {tone === 'snarky' ? (
              <LowesSnarky components={sectionMdxComponents} />
            ) : (
              <Lowes components={sectionMdxComponents} />
            )}
          </div>

          <Separator />

          <div>
            {tone === 'snarky' ? (
              <UnionSnarky components={sectionMdxComponents} />
            ) : (
              <Union components={sectionMdxComponents} />
            )}
          </div>

          <Separator />

          <div>
            {tone === 'snarky' ? (
              <StruckSnarky components={sectionMdxComponents} />
            ) : (
              <Struck components={sectionMdxComponents} />
            )}
          </div>

          <Separator />

          <SeeMoreSection>
            <div>
              {tone === 'snarky' ? (
                <TheRegisterGuardSnarky components={sectionMdxComponents} />
              ) : (
                <TheRegisterGuard components={sectionMdxComponents} />
              )}
            </div>

            <Separator />

            <div>
              {tone === 'snarky' ? (
                <Pac12ConferenceSnarky components={sectionMdxComponents} />
              ) : (
                <Pac12Conference components={sectionMdxComponents} />
              )}
            </div>

            <Separator />

            <div>
              {tone === 'snarky' ? (
                <UofOSnarky components={sectionMdxComponents} />
              ) : (
                <UofO components={sectionMdxComponents} />
              )}
            </div>
          </SeeMoreSection>
        </section>

        {/* Education Section */}
        <section id="education" className="section mb-24">
          {tone === 'snarky' ? (
            <EducationSnarky components={sectionMdxComponents} />
          ) : (
            <Education components={sectionMdxComponents} />
          )}
        </section>

        {/* <h2 className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-background/50 backdrop-blur-lg">
          Featured Projects
        </h2>

        <ProjectsUIScorecards /> */}

        <section className="section technologies">
          <h2 id="technology-tools">Technologies & Tools</h2>

          <div className="technologies-list">
            {tone === 'snarky' ? <TechAndToolsSnarky /> : <TechAndTools />}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
