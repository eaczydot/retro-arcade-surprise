
import React from 'react';
import { cn } from '@/lib/utils';

interface ArcadeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'red' | 'blue' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  pixelBorder?: boolean;
}

const ArcadeButton = React.forwardRef<HTMLButtonElement, ArcadeButtonProps>(
  ({ variant = 'green', size = 'md', pixelBorder = true, className, children, ...props }, ref) => {
    const variantStyles = {
      green: 'bg-[#0AA757] text-white border-[#065a2f] hover:brightness-110',
      red: 'bg-sixers-red text-white border-[#a8102f] hover:brightness-110',
      blue: 'bg-sixers-blue text-white border-[#00487a] hover:brightness-110',
      orange: 'bg-[#FFA031] text-white border-[#b87023] hover:brightness-110',
    };

    const sizeStyles = {
      sm: 'text-sm py-1 px-4 min-w-[120px]',
      md: 'text-base py-2 px-6 min-w-[160px]',
      lg: 'text-lg py-3 px-8 min-w-[200px]',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'font-press-start uppercase tracking-wider transition-all relative',
          'border-b-4 active:border-b-2 active:translate-y-[2px]',
          'focus:outline-none',
          pixelBorder && 'pixel-btn',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Pixelated black border */}
        <div className="absolute inset-0 border-4 border-black pointer-events-none"></div>
        
        {/* Corner pixels for 3D effect */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-white opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-white opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-black opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-black opacity-30 pointer-events-none"></div>
      </button>
    );
  }
);

ArcadeButton.displayName = 'ArcadeButton';

export default ArcadeButton;
