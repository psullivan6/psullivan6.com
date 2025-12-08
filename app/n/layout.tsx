import { ReactNode } from 'react';

const BlogLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <main className="relative z-10 bg-background min-h-[calc(100vh-69px)] shadow-xl">
      <div className="prose prose-slate lg:prose-lg xl:prose-xl dark:prose-invert prose-headings:mb-0 mx-auto p-6">
        {children}
      </div>
    </main>
  );
};

export default BlogLayout;
