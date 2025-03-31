
import React from 'react';

interface PixelArtProps {
  className?: string;
  size?: number;
  pattern: (string | null)[][];
  colorMap: Record<string, string>;
}

const PixelArt: React.FC<PixelArtProps> = ({ 
  className = '',
  size = 4, 
  pattern, 
  colorMap 
}) => {
  return (
    <div className={`inline-grid ${className}`} style={{ 
      gridTemplateColumns: `repeat(${pattern[0].length}, ${size}px)`,
      gridTemplateRows: `repeat(${pattern.length}, ${size}px)`,
    }}>
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
