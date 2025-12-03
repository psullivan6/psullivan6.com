import { ReactNode } from 'react';

type IfProps = {
  condition: boolean;
  children: ReactNode;
};

const If = ({ children, condition }: IfProps) => {
  return condition ? children : null;
};

export default If;
