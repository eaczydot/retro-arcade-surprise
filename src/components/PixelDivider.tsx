
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelDividerProps {
  className?: string;
  variant?: 'default' | 'narrow';
}

const PixelDivider = ({ className = '', variant = 'default' }: PixelDividerProps) => {
  return (
    <div className={cn('w-full my-6', className)}>
      <div className="flex flex-col">
        <div className="h-2 bg-sixers-red w-full"></div>
        <div className="h-2 bg-[#FFA031] w-full"></div> {/* Orange */}
        <div className="h-2 bg-[#0AA757] w-full"></div> {/* Green */}
        <div className="h-2 bg-sixers-blue w-full"></div>
        {variant === 'default' && (
          <>
            <div className="h-6 bg-[#001F5B] w-full"></div> {/* Deep Blue */}
            <div className="h-2 bg-sixers-red w-full"></div>
            <div className="h-2 bg-[#FFA031] w-full"></div> {/* Orange */}
            <div className="h-2 bg-[#0AA757] w-full"></div> {/* Green */}
            <div className="h-2 bg-sixers-blue w-full"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default PixelDivider;
