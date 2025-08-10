'use client';

import bioContent from '@/content/bio.json';
import experiencesContent from '@/content/experience.json';
import Lowes from '@/content/experience/lowes.mdx';
import UofO from '@/content/experience/university-of-oregon.mdx';
import heroContent from '@/content/hero.json';
import ProjectsUIScorecards from '@/content/projects/ui-scorecards.mdx';
import { Lato } from 'next/font/google';
import { useContentContext } from './components/ContentProvider/ContentProvider';

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
          </section>

          <p>More stuff here</p>

          <section className="mb-24">
            <UofO />
          </section>
        </div>

        <h2 className="sticky top-16 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg">
          Projects
        </h2>

        <ProjectsUIScorecards />
      </div>
    </main>
  );
};

export default HomePage;
