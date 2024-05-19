import type { MetaFunction } from '@remix-run/node';
import Logo from '~/components/Logo';

export const meta: MetaFunction = () => {
  return [
    { title: 'Patrick Sullivan' },
    {
      name: 'description',
      content: "Hey, I'm Patrick Sullivan and this is my website. Thanks for visiting.",
    },
  ];
};

type Color = {
  primary: string;
  secondary: string;
  surface: string;
};

function randomNoRepeats(array: Color[]) {
  let copy = array.slice(0);
  return function () {
    if (copy.length < 1) {
      copy = array.slice(0);
    }
    const index = Math.floor(Math.random() * copy.length);
    const item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

export default function Index() {
  const colors = [
    {
      surface: '069',
      primary: 'f90',
      secondary: '903',
    },
    {
      surface: '30c',
      primary: 'f69',
      secondary: '3c6',
    },
    {
      surface: 'f3f3f3',
      primary: '333',
      secondary: '666',
    },
    {
      surface: '000',
      primary: 'fff',
      secondary: '666',
    },
  ] satisfies Color[];
  const getColor = randomNoRepeats(colors);

  const handleColorToggle = () => {
    const color = getColor();
    document.documentElement.style.setProperty('--colors-surface', `#${color.surface}`);
    document.documentElement.style.setProperty('--colors-primary', `#${color.primary}`);
    document.documentElement.style.setProperty('--colors-secondary', `#${color.secondary}`);
  };

  return (
    <>
      <main className="w-full h-[calc(100%-2rem)] p-24 bg-surface-var text-primary-var flex flex-col transition-colors">
        <button
          onClick={handleColorToggle}
          className="absolute left-1/2 -translate-x-1/2 focus:outline-2 outline-offset-4 outline-primary-var"
        >
          <Logo className="box-content  p-1 stroke-primary-var stroke-4 fill-transparent hover:fill-current transition-colors overflow-visible" />
        </button>
        <h1 className="title w-3/4 text-clamp-huge leading-[0.8] font-black uppercase mt-auto ml-auto text-right">
          Hey, I&rsquo;m Patrick&nbsp;&nbsp;&nbsp; Sullivan
        </h1>
      </main>
      <div className="bg-secondary-var h-full">asdf</div>
    </>
  );
}
