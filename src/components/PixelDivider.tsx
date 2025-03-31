
import React from 'react';

interface PixelDividerProps {
  color?: string;
  className?: string;
}

const PixelDivider = ({ color = 'bg-sixers-red', className = '' }: PixelDividerProps) => {
  return (
    <div className={`flex justify-center my-8 ${className}`}>
      <div className={`h-2 ${color} w-2`}></div>
      <div className={`h-2 ${color} w-2`}></div>
      <div className={`h-2 ${color} w-4`}></div>
      <div className={`h-2 ${color} w-6`}></div>
      <div className={`h-2 ${color} w-12`}></div>
      <div className={`h-2 ${color} w-24`}></div>
      <div className={`h-2 ${color} w-12`}></div>
      <div className={`h-2 ${color} w-6`}></div>
      <div className={`h-2 ${color} w-4`}></div>
      <div className={`h-2 ${color} w-2`}></div>
      <div className={`h-2 ${color} w-2`}></div>
    </div>
  );
};

export default PixelDivider;
