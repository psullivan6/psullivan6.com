'use client';

import bioContent from '@/content/bio.json';
import experiencesContent from '@/content/experience.json';
import heroContent from '@/content/hero.json';
import Lowes from '@/experience/lowes.mdx';
import UofO from '@/experience/university-of-oregon.mdx';
import { useContentContext } from './components/ContentProvider/ContentProvider';

const HomePage = () => {
  const { tone } = useContentContext();
  return (
    <>
      <section className="my-40">
        <h2
          className="!text-[4em]/[1.1em]"
          dangerouslySetInnerHTML={{ __html: heroContent[tone].title }}
        />
      </section>

      <div>
        <h2
          className="sticky top-0 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg"
          dangerouslySetInnerHTML={{ __html: bioContent[tone].label }}
        />

        {bioContent[tone].content.map((contentLine) => {
          return <p key={contentLine} dangerouslySetInnerHTML={{ __html: contentLine }} />;
        })}
      </div>

      <div>
        <h2
          className="sticky top-0 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg"
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

      <h2 className="sticky top-0 -mx-6 px-6 py-4 !mt-20 font-mono !text-xs/6 font-medium tracking-widest uppercase text-sky-600 dark:text-sky-400 bg-orange-50/50 dark:bg-slate-950/50 backdrop-blur-lg">
        Projects
      </h2>

      <h3>Coming Soon</h3>
    </>
  );
};

export default HomePage;
