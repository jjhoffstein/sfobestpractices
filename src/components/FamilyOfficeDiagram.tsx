'use client';

import React, { useState } from 'react';
import EntityDetails from './EntityDetails';

interface EntityBoxProps {
  title: string;
  color: string;
  position: { x: number; y: number };
  onClick?: () => void;
}

const EntityBox = React.memo(({ title, color, position, onClick }: EntityBoxProps) => (
  <div 
    className={`absolute transform -translate-x-1/2 -translate-y-1/2`}
    style={{ 
      left: `${position.x}%`,
      top: `${position.y}%`
    }}
  >
    <div
      className={`p-3 sm:p-4 rounded-lg border-2 ${color} bg-white shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 min-w-[140px] sm:min-w-[160px] backdrop-blur-sm`}
      role="button"
      aria-label={title}
      onClick={onClick}
    >
      <h4 className="font-semibold text-xs sm:text-sm text-center">{title}</h4>
    </div>
  </div>
));

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

export default function FamilyOfficeDiagram() {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  const handleEntityClick = (entityType: string) => {
    setSelectedEntity(entityType);
  };

  // Define entity positions
  const positions = {
    center: { x: 50, y: 50 },
    foundation: { x: 20, y: 15 },
    leasing: { x: 40, y: 15 },
    operating: { x: 60, y: 15 },
    realEstate: { x: 80, y: 15 },
    descendants: { x: 10, y: 50 },
    offshore: { x: 90, y: 40 },
    domestic: { x: 90, y: 60 },
    flp1: { x: 25, y: 85 },
    flp2: { x: 50, y: 85 },
    flp3: { x: 75, y: 85 }
  };

  return (
    <div className="relative w-full aspect-[16/9] max-w-6xl mx-auto">
      {/* SVG Layer for Connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        {/* Top Row Connections */}
        <ConnectingLine start={positions.center} end={positions.foundation} />
        <ConnectingLine start={positions.center} end={positions.leasing} />
        <ConnectingLine start={positions.center} end={positions.operating} />
        <ConnectingLine start={positions.center} end={positions.realEstate} />
        
        {/* Side Connections */}
        <ConnectingLine start={positions.center} end={positions.descendants} />
        <ConnectingLine start={positions.center} end={positions.offshore} />
        <ConnectingLine start={positions.center} end={positions.domestic} />
        
        {/* Bottom Row Connections */}
        <ConnectingLine start={positions.center} end={positions.flp1} />
        <ConnectingLine start={positions.center} end={positions.flp2} />
        <ConnectingLine start={positions.center} end={positions.flp3} />
        
        {/* Horizontal Connecting Lines */}
        <ConnectingLine 
          start={{ x: positions.foundation.x, y: positions.foundation.y }} 
          end={{ x: positions.realEstate.x, y: positions.realEstate.y }}
          dashed={true}
        />
        <ConnectingLine 
          start={{ x: positions.flp1.x, y: positions.flp1.y }} 
          end={{ x: positions.flp3.x, y: positions.flp3.y }}
          dashed={true}
        />
      </svg>

      {/* Center Family Office */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="p-4 sm:p-6 rounded-lg border-2 border-blue-500 bg-white shadow-lg min-w-[180px] sm:min-w-[200px] backdrop-blur-sm">
          <h3 className="font-bold text-sm sm:text-base text-center">Family Office</h3>
          <p className="text-xs text-gray-500 text-center mt-1">Central Coordination Hub</p>
        </div>
      </div>

      {/* Operating Companies - Top Row */}
      <EntityBox
        title="Family Foundation"
        color="border-red-400"
        position={positions.foundation}
        onClick={() => handleEntityClick('Family Foundation')}
      />
      <EntityBox
        title="Equipment Leasing Company"
        color="border-red-400"
        position={positions.leasing}
        onClick={() => handleEntityClick('Equipment Leasing')}
      />
      <EntityBox
        title="Operating Company"
        color="border-red-400"
        position={positions.operating}
        onClick={() => handleEntityClick('Operating Company')}
      />
      <EntityBox
        title="Real Estate LLC"
        color="border-red-400"
        position={positions.realEstate}
        onClick={() => handleEntityClick('Real Estate')}
      />

      {/* Left Side */}
      <EntityBox
        title="Descendant's Trusts"
        color="border-green-400"
        position={positions.descendants}
        onClick={() => handleEntityClick('Descendant Trusts')}
      />

      {/* Right Side */}
      <EntityBox
        title="Offshore Asset Protection Trust"
        color="border-green-400"
        position={positions.offshore}
        onClick={() => handleEntityClick('Offshore Trust')}
      />
      <EntityBox
        title="Domestic Asset Protection Trust"
        color="border-green-400"
        position={positions.domestic}
        onClick={() => handleEntityClick('Domestic Trust')}
      />

      {/* Bottom Row */}
      <EntityBox
        title="Family Limited Partnership #1"
        color="border-green-400"
        position={positions.flp1}
        onClick={() => handleEntityClick('FLP 1')}
      />
      <EntityBox
        title="Family Limited Partnership #2"
        color="border-green-400"
        position={positions.flp2}
        onClick={() => handleEntityClick('FLP 2')}
      />
      <EntityBox
        title="Family Limited Partnership #3"
        color="border-green-400"
        position={positions.flp3}
        onClick={() => handleEntityClick('FLP 3')}
      />

      <EntityDetails
        entityType={selectedEntity || ''}
        isOpen={selectedEntity !== null}
        onClose={() => setSelectedEntity(null)}
      />
    </div>
  );
} 