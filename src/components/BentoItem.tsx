import React from 'react';

interface BentoItemProps {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  bgUrl?: string;
}

export function BentoItem({ 
  children, 
  className = '',
  colSpan = 1,
  rowSpan = 1,
  bgUrl
}: BentoItemProps) {
  return (
    <div 
      className={`bento-item ${className}`}
      style={{ 
        '--col-span': colSpan,
        '--row-span': rowSpan 
      } as React.CSSProperties}
    >
      {bgUrl && (
        <img 
          src={bgUrl} 
          alt="" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            zIndex: 0,
            opacity: 0.6
          }} 
        />
      )}
      <div className="bento-item-content" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
