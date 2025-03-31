
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const PixelLogo: React.FC<PixelLogoProps> = ({ 
  className, 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl lg:text-5xl'
  };

  return (
    <div className={cn("flex justify-center my-4", className)}>
      <h1 className={cn("font-press-start tracking-wide", sizeClasses[size])}>
        <span className="text-sixers-red">O</span>
        <span className="text-[#FFA031]">P</span>
        <span className="text-[#0AA757]">E</span>
        <span className="text-sixers-blue">R</span>
        <span className="text-sixers-red">A</span>
        <span className="text-[#FFA031]">T</span>
        <span className="text-[#0AA757]">I</span>
        <span className="text-sixers-blue">O</span>
        <span className="text-sixers-red">N</span>
        <span className="text-white mx-2">8</span>
        <span className="text-[#FFA031]">B</span>
        <span className="text-[#0AA757]">I</span>
        <span className="text-sixers-blue">T</span>
      </h1>
    </div>
  );
};

export default PixelLogo;
