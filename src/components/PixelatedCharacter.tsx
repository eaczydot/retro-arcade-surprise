
import React from 'react';
import PixelArt from './PixelArt';

interface PixelatedCharacterProps {
  type: 'player' | 'trophy' | 'star' | 'ghost';
  className?: string;
  size?: number;
}

const PixelatedCharacter: React.FC<PixelatedCharacterProps> = ({ 
  type, 
  className = '',
  size = 4 
}) => {
  // Character patterns
  const patterns = {
    player: [
      [null, null, 'h', 'h', 'h', null, null],
      [null, 'h', 'h', 'h', 'h', 'h', null],
      [null, 'f', 'f', 'f', 'f', 'f', null],
      ['f', 'f', 'f', 'f', 'f', 'f', 'f'],
      ['f', 'f', 'f', 'f', 'f', 'f', 'f'],
      [null, 'p', 'p', null, 'p', 'p', null],
      [null, 'b', 'b', null, 'b', 'b', null],
    ],
    trophy: [
      [null, null, 'g', 'g', 'g', null, null],
      [null, 'g', 'g', 'g', 'g', 'g', null],
      ['g', 'g', 'g', 'g', 'g', 'g', 'g'],
      [null, null, 'g', 'g', 'g', null, null],
      [null, null, 'g', 'g', 'g', null, null],
      [null, 'g', 'g', 'g', 'g', 'g', null],
      ['g', 'g', 'g', 'g', 'g', 'g', 'g'],
    ],
    star: [
      [null, null, null, 'y', null, null, null],
      [null, null, 'y', 'y', 'y', null, null],
      [null, 'y', 'y', 'y', 'y', 'y', null],
      ['y', 'y', 'y', 'y', 'y', 'y', 'y'],
      [null, null, 'y', 'y', 'y', null, null],
      [null, 'y', null, 'y', null, 'y', null],
      ['y', null, null, null, null, null, 'y'],
    ],
    ghost: [
      [null, null, 'c', 'c', 'c', null, null],
      [null, 'c', 'c', 'c', 'c', 'c', null],
      ['c', 'c', 'w', 'c', 'w', 'c', 'c'],
      ['c', 'c', 'c', 'c', 'c', 'c', 'c'],
      ['c', 'c', 'c', 'c', 'c', 'c', 'c'],
      ['c', 'c', 'c', 'c', 'c', 'c', 'c'],
      ['c', null, 'c', null, 'c', null, 'c'],
    ],
  };

  // Color mappings
  const colorMaps = {
    player: {
      'h': 'bg-sixers-red',
      'f': 'bg-sixers-blue',
      'p': 'bg-white',
      'b': 'bg-sixers-navy',
    },
    trophy: {
      'g': 'bg-neon-yellow',
    },
    star: {
      'y': 'bg-neon-yellow',
    },
    ghost: {
      'c': 'bg-neon-cyan',
      'w': 'bg-white',
    },
  };

  return (
    <div className={`inline-block ${className}`}>
      <PixelArt 
        pattern={patterns[type]} 
        colorMap={colorMaps[type]} 
        size={size}
      />
    </div>
  );
};

export default PixelatedCharacter;
