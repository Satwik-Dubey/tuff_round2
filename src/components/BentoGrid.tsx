import React from 'react';
import './Bento.css';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: number;
}

export function BentoGrid({ children, className = '', columns = 4 }: BentoGridProps) {
  return (
    <div 
      className={`bento-grid ${className}`}
      style={{ '--grid-cols': columns } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
