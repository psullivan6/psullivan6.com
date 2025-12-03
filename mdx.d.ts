import { type ContentContextType } from './app/components/ContentProvider/ContentProvider';

declare module '*.mdx' {
  let MDXComponent: ({ tone }: { tone: ContentContextType['tone'] }) => JSX.Element;
  export default MDXComponent;
}
