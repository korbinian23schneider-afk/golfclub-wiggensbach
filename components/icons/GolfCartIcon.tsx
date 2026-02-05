import React from 'react';

export const GolfCartIcon = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Karosserie */}
      <path d="M4 16.5V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11.5" />
      {/* Frontscheibe */}
      <path d="M10 13h4" />
      {/* Vorderrad */}
      <path d="M4 16.5a2.5 2.5 0 0 0 5 0" />
      {/* Hinterrad */}
      <path d="M15 16.5a2.5 2.5 0 0 0 5 0" />
      {/* Untere Linie */}
      <path d="M9 16.5h6" />
      {/* Front */}
      <path d="M15 16.5V13l4-6" />
      {/* Seitenlinie */}
      <path d="M6 13v-3" />
      {/* Dach */}
      <path d="M8 9V7" />
      <path d="M6 9h3" />
    </svg>
  );
};
