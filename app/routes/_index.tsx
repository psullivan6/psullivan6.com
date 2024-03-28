import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Patrick Sullivan' },
    { name: 'description', content: "Welcome to my website, I'm Patrick Sullivan" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Hey, welcome to psullivan6.com</h1>
      <ul>
        <li>
          <a href="/playground">Playground</a>
        </li>
      </ul>
    </div>
  );
}
