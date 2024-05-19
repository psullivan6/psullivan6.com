import { LinksFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import stylesheet from '~/root.styles.css?url';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-surface-var">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
