import type { HTMLAttributes } from 'react';

type LogoProps = HTMLAttributes<SVGElement>;

const Logo = (props: LogoProps) => (
  <svg
    width="76"
    height="96"
    viewBox="0 0 76 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path d="M24.5 96L0.5 84V0H33.5C56.7 0 75.5 18.8 75.5 42C75.5 65.2 56.7 84 33.5 84H24.5V96ZM24.5 60H33.5C43.4 60 51.5 51.9 51.5 42C51.5 32.1 43.4 24 33.5 24H24.5V60Z" />
    </g>
  </svg>
);

export default Logo;
