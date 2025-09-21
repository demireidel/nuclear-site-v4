import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: 'primary'|'secondary'|'ghost' };
export function Button({ asChild, className, variant='primary', ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  const classes = clsx(
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ring-offset-2 ring-offset-background disabled:opacity-50 disabled:pointer-events-none h-9 px-4 py-2',
    variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
    variant === 'secondary' && 'border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800',
    variant === 'ghost' && 'hover:bg-gray-100 dark:hover:bg-gray-800',
    className
  );
  return <Comp className={classes} {...props} />;
}
