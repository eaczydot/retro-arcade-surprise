
import React from 'react';
import { cn } from '@/lib/utils';

interface ArcadeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'red' | 'blue' | 'green' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
}

const ArcadeButton = React.forwardRef<HTMLButtonElement, ArcadeButtonProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
    const variantStyles = {
      default: 'bg-white text-arcade-black border-arcade-black hover:bg-gray-100',
      red: 'bg-sixers-red text-white border-white hover:bg-red-600',
      blue: 'bg-sixers-blue text-white border-white hover:bg-blue-700',
      green: 'bg-neon-green text-arcade-black border-arcade-black hover:text-white',
      yellow: 'bg-neon-yellow text-arcade-black border-arcade-black hover:text-white',
    };

    const sizeStyles = {
      sm: 'text-xs px-3 py-1',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'font-pixel uppercase tracking-wider transition-colors',
          'border-2 border-b-4 active:border-b-2 active:translate-y-[2px]',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-arcade-dark',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ArcadeButton.displayName = 'ArcadeButton';

export default ArcadeButton;
