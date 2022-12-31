import { ReactNode } from 'react';

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="border-l-8 border-accent text-2xl font-semibold pl-4 mb-8">
      {children}
    </h2>
  );
};

export { Heading };
