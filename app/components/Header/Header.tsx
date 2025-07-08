'use client';

import { CircleDot, Donut } from 'lucide-react';
import { useContentContext } from '../ContentProvider/ContentProvider';

const Header = () => {
  const { toggleTone, tone } = useContentContext();

  return (
    <header className="not-prose p-6 flex justify-between items-center">
      <div className="size-8" />

      <h1 className="font-mono text-center uppercase text-md font-medium tracking-widest text-sky-500">
        Patrick Sullivan
      </h1>

      <button
        className="text-red-500 cursor-pointer hover:bg-red-950 p-1 rounded-full"
        onClick={toggleTone}
      >
        {tone === 'default' ? <CircleDot /> : <Donut />}
      </button>
    </header>
  );
};

export default Header;
