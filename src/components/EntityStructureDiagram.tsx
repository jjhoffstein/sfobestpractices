'use client';

import React, { useState, useCallback } from 'react';
import EntityDetails from './EntityDetails';

interface EntityBoxProps {
  title: string;
  color: string;
  position: { x: number; y: number };
  variant?: 'rectangle' | 'hexagon' | 'oval';
  isTrust?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  subtitle?: string;
}

const EntityBox = React.memo(({ title, color, position, variant = 'rectangle', isTrust = false, onClick, children, subtitle }: EntityBoxProps) => {
  const baseClasses = `
    p-2.5 sm:p-3 lg:p-4 
    border-2 ${color} 
    shadow-sm hover:shadow-md active:shadow-inner
    cursor-pointer 
    transition-all duration-200 ease-in-out
    min-w-[135px] sm:min-w-[160px] lg:min-w-[180px] 
    backdrop-blur-sm 
    touch-manipulation
    select-none
    ${isTrust ? 'bg-gray-50/95' : 'bg-white/95'}
    transform hover:scale-105 active:scale-100
  `;
  
  const shapeClasses = {
    'rectangle': 'rounded-xl',
    'hexagon': 'clip-hexagon',
    'oval': 'rounded-full px-5 sm:px-6 lg:px-8'
  };

  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{ 
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: 10
      }}
    >
      <div
        className={`${baseClasses} ${shapeClasses[variant]}`}
        role="button"
        tabIndex={0}
        aria-label={title}
        onClick={onClick}
        onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      >
        <h4 className="font-semibold text-[11px] sm:text-xs lg:text-sm text-center mb-0.5 sm:mb-1 text-gray-800 leading-tight">{title}</h4>
        {(children || subtitle) && (
          <div className="text-[9px] sm:text-[10px] lg:text-xs text-gray-600 text-center leading-tight">
            {subtitle || children}
          </div>
        )}
      </div>
    </div>
  );
});

EntityBox.displayName = 'EntityBox';

interface ConnectingLineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
  dashed?: boolean;
}

const ConnectingLine = React.memo(({ start, end, dashed = false }: ConnectingLineProps) => (
  <line
    x1={`${start.x}%`}
    y1={`${start.y}%`}
    x2={`${end.x}%`}
    y2={`${end.y}%`}
    stroke="#94A3B8"
    strokeWidth="1.5"
    strokeDasharray={dashed ? "4 4" : ""}
    strokeLinecap="round"
    className="transition-all duration-300"
  />
));

ConnectingLine.displayName = 'ConnectingLine';

export default function EntityStructureDiagram() {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  const handleEntityClick = useCallback((entityType: string) => {
    setSelectedEntity(entityType);
  }, []);

  // Define entity positions with optimized spacing for mobile
  const positions = {
    managing: { x: 50, y: 12 },    // Moved up for better spacing
    fllc: { x: 50, y: 30 },        // Adjusted for clarity
    patriarchTrust: { x: 18, y: 48 }, // Increased spacing between entities
    matriarchTrust: { x: 40, y: 48 },
    intlTrust: { x: 60, y: 48 },
    childTrust1: { x: 82, y: 48 },
    patriarch: { x: 18, y: 66 },    // Adjusted vertical spacing
    matriarch: { x: 40, y: 66 },
    g2Parents: { x: 60, y: 66 },
    child1: { x: 82, y: 66 }
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9] max-w-6xl mx-auto">
      <style jsx global>{`
        .clip-hexagon {
          clip-path: polygon(22% 0%, 78% 0%, 100% 50%, 78% 100%, 22% 100%, 0% 50%);
        }
        @media (max-width: 640px) {
          .clip-hexagon {
            clip-path: polygon(18% 0%, 82% 0%, 100% 50%, 82% 100%, 18% 100%, 0% 50%);
          }
        }
      `}</style>

      {/* SVG Layer for Connections */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ zIndex: 0 }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Vertical Connections */}
        <ConnectingLine start={positions.managing} end={positions.fllc} />
        
        {/* Trust Level Connections */}
        <ConnectingLine start={positions.fllc} end={positions.patriarchTrust} />
        <ConnectingLine start={positions.fllc} end={positions.matriarchTrust} />
        <ConnectingLine start={positions.fllc} end={positions.intlTrust} />
        <ConnectingLine start={positions.fllc} end={positions.childTrust1} />

        {/* Individual Connections */}
        <ConnectingLine start={positions.patriarchTrust} end={positions.patriarch} />
        <ConnectingLine start={positions.matriarchTrust} end={positions.matriarch} />
        <ConnectingLine start={positions.intlTrust} end={positions.g2Parents} />
        <ConnectingLine start={positions.childTrust1} end={positions.child1} />

        {/* Horizontal Connecting Lines */}
        <ConnectingLine 
          start={{ x: positions.patriarchTrust.x, y: positions.patriarchTrust.y }}
          end={{ x: positions.childTrust1.x, y: positions.childTrust1.y }}
          dashed={true}
        />
        <ConnectingLine 
          start={{ x: positions.patriarch.x, y: positions.patriarch.y }}
          end={{ x: positions.child1.x, y: positions.child1.y }}
          dashed={true}
        />
      </svg>

      {/* Managing Member */}
      <EntityBox
        title="Managing Member"
        color="border-blue-600"
        position={positions.managing}
        variant="rectangle"
        onClick={() => handleEntityClick('Managing Member')}
        subtitle="Control Entity"
      />

      {/* FLLC */}
      <EntityBox
        title="FLLC"
        color="border-yellow-600"
        position={positions.fllc}
        variant="rectangle"
        onClick={() => handleEntityClick('FLLC')}
        subtitle="Family Limited Liability Company"
      />

      {/* Trust Level */}
      <EntityBox
        title="Patriarch's Trust"
        color="border-emerald-500"
        position={positions.patriarchTrust}
        variant="rectangle"
        isTrust
        onClick={() => handleEntityClick('Living Trust')}
        subtitle="Living Trust"
      />
      <EntityBox
        title="Matriarch's Trust"
        color="border-emerald-500"
        position={positions.matriarchTrust}
        variant="rectangle"
        isTrust
        onClick={() => handleEntityClick('Living Trust')}
        subtitle="Living Trust"
      />
      <EntityBox
        title="Int'l Trust"
        color="border-emerald-500"
        position={positions.intlTrust}
        variant="rectangle"
        isTrust
        onClick={() => handleEntityClick('Asset Protection Trust')}
        subtitle="Asset Protection"
      />
      <EntityBox
        title="Children's Trusts"
        color="border-emerald-500"
        position={positions.childTrust1}
        variant="rectangle"
        isTrust
        onClick={() => handleEntityClick('Child Trust')}
        subtitle="Generational Planning"
      />

      {/* Individual Level */}
      <EntityBox
        title="Patriarch"
        color="border-slate-400"
        position={positions.patriarch}
        variant="oval"
      />
      <EntityBox
        title="Matriarch"
        color="border-slate-400"
        position={positions.matriarch}
        variant="oval"
      />
      <EntityBox
        title="G2 Parents"
        color="border-slate-400"
        position={positions.g2Parents}
        variant="oval"
        subtitle="Dynasty Assets"
      />
      <EntityBox
        title="Children"
        color="border-slate-400"
        position={positions.child1}
        variant="oval"
        subtitle="G2 & G3"
      />

      <EntityDetails
        entityType={selectedEntity || ''}
        isOpen={selectedEntity !== null}
        onClose={() => setSelectedEntity(null)}
      />
    </div>
  );
} 