
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelDividerProps {
  className?: string;
  variant?: 'default' | 'narrow' | 'header' | 'footer';
  color?: string;
}

const PixelDivider = ({ 
  className = '', 
  variant = 'default', 
  color
}: PixelDividerProps) => {
  // Define colors based on props or default values
  const redColor = color?.includes('red') ? color : 'bg-sixers-red';
  const blueColor = color?.includes('blue') ? color : 'bg-sixers-blue';
  const orangeColor = color?.includes('yellow') ? color : 'bg-[#FFA031]'; // Orange
  const greenColor = color?.includes('green') ? color : 'bg-[#0AA757]'; // Green
  const deepBlueColor = color?.includes('cyan') ? color : 'bg-[#001F5B]'; // Deep Blue
  
  // Header/Footer has pattern shown in the game screenshots
  if (variant === 'header' || variant === 'footer') {
    return (
      <div className={cn('w-full', className)}>
        <div className="flex flex-col">
          <div className="h-1 bg-black w-full"></div>
          <div className="h-6 bg-sixers-red w-full"></div>
          <div className="h-6 bg-[#FFA031] w-full"></div>
          <div className="h-6 bg-[#0AA757] w-full"></div>
          <div className="h-6 bg-sixers-blue w-full"></div>
          <div className="h-1 bg-black w-full"></div>
          <div className="h-8 bg-black w-full"></div>
          <div className="h-1 bg-black w-full"></div>
          <div className="h-6 bg-sixers-blue w-full"></div>
          <div className="h-6 bg-[#0AA757] w-full"></div>
          <div className="h-6 bg-[#FFA031] w-full"></div>
          <div className="h-6 bg-sixers-red w-full"></div>
          <div className="h-1 bg-black w-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('w-full my-6', className)}>
      <div className="flex flex-col">
        <div className={`h-2 ${redColor} w-full`}></div>
        <div className={`h-2 ${orangeColor} w-full`}></div>
        <div className={`h-2 ${greenColor} w-full`}></div>
        <div className={`h-2 ${blueColor} w-full`}></div>
        {variant === 'default' && (
          <>
            <div className={`h-6 ${deepBlueColor} w-full`}></div>
            <div className={`h-2 ${redColor} w-full`}></div>
            <div className={`h-2 ${orangeColor} w-full`}></div>
            <div className={`h-2 ${greenColor} w-full`}></div>
            <div className={`h-2 ${blueColor} w-full`}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default PixelDivider;
