
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelArtProps {
  className?: string;
  size?: number;
  pattern: (string | null)[][];
  colorMap: Record<string, string>;
  shadow?: boolean;
}

const PixelArt: React.FC<PixelArtProps> = ({ 
  className = '',
  size = 4, 
  pattern, 
  colorMap,
  shadow = false
}) => {
  return (
    <div 
      className={cn(
        'inline-grid', 
        shadow && 'drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)]',
        className
      )} 
      style={{ 
        gridTemplateColumns: `repeat(${pattern[0].length}, ${size}px)`,
        gridTemplateRows: `repeat(${pattern.length}, ${size}px)`,
        imageRendering: 'pixelated'
      }}
    >
      {pattern.flatMap((row, y) => 
        row.map((cell, x) => 
          cell ? (
            <div 
              key={`${x}-${y}`} 
              className={colorMap[cell] || 'bg-transparent'}
              style={{
                gridColumn: x + 1,
                gridRow: y + 1,
                width: `${size}px`,
                height: `${size}px`
              }}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default PixelArt;
