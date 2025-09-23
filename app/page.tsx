'use client';

import bioContent from '@/content/bio.json';
import experiencesContent from '@/content/experience.json';
import Lowes from '@/content/experience/lowes.mdx';
import UofO from '@/content/experience/university-of-oregon.mdx';
import heroContent from '@/content/hero.json';
import ProjectsUIScorecards from '@/content/projects/ui-scorecards.mdx';
import TechAndTools from '@/content/technologies.mdx';
import { Lato } from 'next/font/google';
import Link from 'next/link';
import { useContentContext } from './components/ContentProvider/ContentProvider';
import { Button } from './components/ui/button';

const lato = Lato({ subsets: ['latin', 'latin-ext'], weight: ['400', '900'] });

const HomePage = () => {
  const { tone } = useContentContext();

  return (
    <main className="relative z-10 dark:bg-slate-950 bg-orange-50 min-h-[calc(100vh-69px)] shadow-xl">
      <div className="prose prose-slate lg:prose-lg xl:prose-xl dark:prose-invert prose-headings:mb-0 mx-auto p-6">
        <section className="my-40">
          <h2
            className={`${lato.className} !text-[4em]/[1.1em] font-black`}
            dangerouslySetInnerHTML={{ __html: heroContent[tone].title }}
          />

          <div className="flex items-center gap-4 [&&]:mt-6 mb-12">
            <Button variant="primary" asChild>
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
                <img
                  src="in-logo/InBug-White.png"
                  alt="Official LinkedIn [in] Logo"
                  className="block p-2 light:invert"
                />
              </Link>
            </Button>
          </div>
        </section>

        <div>
          <h2
            className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg"
            dangerouslySetInnerHTML={{ __html: bioContent[tone].label }}
          />

          {bioContent[tone].content.map((contentLine) => {
            return <p key={contentLine} dangerouslySetInnerHTML={{ __html: contentLine }} />;
          })}
        </div>

        <div>
          <h2
            className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg"
            dangerouslySetInnerHTML={{ __html: experiencesContent[tone].label }}
          />

          <section className="mb-24">
            <Lowes />

            <br />

            <p>And More &hellip;</p>
          </section>

          {/* <section className="mb-24">
            <UofO />
          </section> */}
        </div>

        {/* <h2 className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg">
          Featured Projects
        </h2>

        <ProjectsUIScorecards /> */}

        <h2 className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg">
          Technologies & Tools
        </h2>

        <p>
          I've used many technologies and tools over my career, ranging from ActionScript in Flash
          to vite and Tailwind CSS. I'm eager to learn and confident in my ability to adopt new
          technologies and tools. Here's a lst of the ones I'm actively using and some I've used
          recently.
        </p>

        <div className="text-sm columns-1 xs:columns-2 md:columns-3 ">
          <TechAndTools />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
