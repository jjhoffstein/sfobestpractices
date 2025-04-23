'use client';

import React, { useState } from 'react';
import EntityDetails from './EntityDetails';

interface EntityBoxProps {
  title: string;
  color: string;
  position: { x: number; y: number };
  variant?: 'rectangle' | 'hexagon' | 'oval';
  isTrust?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const EntityBox = React.memo(({ title, color, position, variant = 'rectangle', isTrust = false, onClick, children }: EntityBoxProps) => {
  const baseClasses = `p-3 sm:p-4 border-2 ${color} shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 min-w-[160px] sm:min-w-[180px] backdrop-blur-sm ${isTrust ? 'bg-gray-50/90' : 'bg-white'}`;
  
  const shapeClasses = {
    'rectangle': 'rounded-lg',
    'hexagon': 'clip-hexagon',
    'oval': 'rounded-full px-8'
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
        aria-label={title}
        onClick={onClick}
      >
        <h4 className="font-semibold text-xs sm:text-sm text-center mb-1">{title}</h4>
        {children && (
          <div className="text-[10px] sm:text-xs text-gray-600 text-center">
            {children}
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

const ConnectingLine = ({ start, end, dashed = false }: ConnectingLineProps) => (
  <line
    x1={`${start.x}%`}
    y1={`${start.y}%`}
    x2={`${end.x}%`}
    y2={`${end.y}%`}
    stroke="#CBD5E1"
    strokeWidth="2"
    strokeDasharray={dashed ? "4 4" : ""}
  />
);

export default function EntityStructureDiagram() {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  const handleEntityClick = (entityType: string) => {
    setSelectedEntity(entityType);
  };

  // Define entity positions
  const positions = {
    managing: { x: 50, y: 15 },
    fllc: { x: 50, y: 35 },
    patriarchTrust: { x: 20, y: 55 },
    matriarchTrust: { x: 40, y: 55 },
    intlTrust: { x: 60, y: 55 },
    childTrust1: { x: 80, y: 55 },
    patriarch: { x: 20, y: 75 },
    matriarch: { x: 40, y: 75 },
    g2Parents: { x: 60, y: 75 },
    child1: { x: 80, y: 75 }
  };

  return (
    <div className="relative w-full aspect-[16/9] max-w-6xl mx-auto">
      <style jsx global>{`
        .clip-hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>

      {/* SVG Layer for Connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
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
        color="border-blue-500"
        position={positions.managing}
        variant="rectangle"
        onClick={() => handleEntityClick('Managing Member')}
      >
      </EntityBox>

      {/* FLLC */}
      <EntityBox
        title="FLLC"
        color="border-yellow-500"
        position={positions.fllc}
        variant="rectangle"
        onClick={() => handleEntityClick('FLLC')}
      />

      {/* Trust Level */}
      <EntityBox
        title="Patriarch's Living Trust"
        color="border-green-400"
        position={positions.patriarchTrust}
        variant="hexagon"
        isTrust
        onClick={() => handleEntityClick('Living Trust')}
      />
      <EntityBox
        title="Matriarch's Living Trust"
        color="border-green-400"
        position={positions.matriarchTrust}
        variant="hexagon"
        isTrust
        onClick={() => handleEntityClick('Living Trust')}
      />
      <EntityBox
        title="International Asset Protection Trust"
        color="border-green-400"
        position={positions.intlTrust}
        variant="hexagon"
        isTrust
        onClick={() => handleEntityClick('Asset Protection Trust')}
      />
      <EntityBox
        title="Childrens' Trusts"
        color="border-green-400"
        position={positions.childTrust1}
        variant="hexagon"
        isTrust
        onClick={() => handleEntityClick('Child Trust')}
      />

      {/* Individual Level */}
      <EntityBox
        title="Patriarch"
        color="border-gray-300"
        position={positions.patriarch}
        variant="oval"
      />
      <EntityBox
        title="Matriarch"
        color="border-gray-300"
        position={positions.matriarch}
        variant="oval"
      />
      <EntityBox
        title="G2 Parents"
        color="border-gray-300"
        position={positions.g2Parents}
        variant="oval"
      >
        G2 and G3
      </EntityBox>
      <EntityBox
        title="Children"
        color="border-gray-300"
        position={positions.child1}
        variant="oval"
      />

      <EntityDetails
        entityType={selectedEntity || ''}
        isOpen={selectedEntity !== null}
        onClose={() => setSelectedEntity(null)}
      />
    </div>
  );
} 