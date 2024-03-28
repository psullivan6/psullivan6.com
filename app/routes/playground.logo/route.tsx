import type { LinksFunction } from '@remix-run/node';
import styles from './styles.css?url';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

const Logo = ({ fill }: { fill?: string }) => (
  <svg width="76" height="96" viewBox="0 0 76 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path
        d="M24.5 96L0.5 84V0H33.5C56.7 0 75.5 18.8 75.5 42C75.5 65.2 56.7 84 33.5 84H24.5V96ZM24.5 60H33.5C43.4 60 51.5 51.9 51.5 42C51.5 32.1 43.4 24 33.5 24H24.5V60Z"
        fill={fill ?? `currentColor`}
      />
    </g>
  </svg>
);

const LogoPage = () => {
  return (
    <main className="panels">
      <div className="panel">
        <Logo fill="#ffc" />
        <Logo />
        <Logo fill="#630" />
      </div>

      <div className="panel">
        <Logo fill="#fcf" />
        <Logo />
        <Logo fill="#600" />
      </div>

      <div className="panel">
        <Logo />
      </div>

      <div className="panel">
        <Logo fill="#03c" />
        <Logo />
        <Logo fill="#f03" />
      </div>
    </main>
  );
};

export default LogoPage;
