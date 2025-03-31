
import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'normal' | 'fast';
  repeat?: number;
  separator?: string;
}

const MarqueeText: React.FC<MarqueeTextProps> = ({ 
  text, 
  className = '', 
  speed = 'normal',
  repeat = 3,
  separator = ' • '
}) => {
  const speedClasses = {
    slow: 'animate-[marquee_40s_linear_infinite]',
    normal: 'animate-marquee',
    fast: 'animate-[marquee_15s_linear_infinite]',
  };

  const repeatedText = Array(repeat).fill(text).join(separator);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-[#001F5B] border-t-2 border-b-2 border-sixers-red py-2">
      <div className={cn(
        'inline-block whitespace-nowrap font-pixel text-white',
        speedClasses[speed],
        className
      )}>
        {repeatedText}
      </div>
    </div>
  );
};

export default MarqueeText;
