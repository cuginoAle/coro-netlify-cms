import { twMerge } from 'tailwind-merge';

interface SpinnerProps {
  className?: string;
}
const Spinner = ({ className = '' }: SpinnerProps) => {
  const cn = twMerge(
    'rounded-full w-1em h-1em inline-block animate-spin mr-2 border-stone-900/20 border-t-inherit',
    className,
  );

  return <span className={`border-0.2em ${cn}`} />;
};
export { Spinner };
