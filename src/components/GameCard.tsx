
import React from 'react';
import ArcadeButton from './ArcadeButton';
import { cn } from '@/lib/utils';

interface GameCardProps {
  title: string;
  imageSrc: string;
  className?: string;
}

const GameCard: React.FC<GameCardProps> = ({ 
  title, 
  imageSrc, 
  className 
}) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative border-8 border-black mb-4 transform hover:scale-105 transition-transform">
        {/* Colorful border corners */}
        <div className="absolute inset-0 border-4 pointer-events-none">
          <div className="absolute top-0 left-0 w-4 h-4 bg-sixers-red"></div>
          <div className="absolute top-0 right-0 w-4 h-4 bg-[#FFA031]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#0AA757]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-sixers-blue"></div>
        </div>
        
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full pixel-art max-w-[300px]" 
        />
      </div>
      
      <ArcadeButton 
        variant="green" 
        className="min-w-[150px] mb-4"
      >
        START
      </ArcadeButton>
    </div>
  );
};

export default GameCard;
