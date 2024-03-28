import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Playground | psullivan6' },
    { name: 'description', content: 'Playground ideas and examples' },
  ];
};

const PlaygroundPage = () => {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Playground</h1>
    </div>
  );
};

export default PlaygroundPage;
