'use client';

import React, { useState, useCallback } from 'react';
import EntityDetails from './EntityDetails';

interface EntityBoxProps {
  title: string;
  color: string;
  position: { x: number; y: number };
  onClick?: () => void;
  subtitle?: string;
}

const EntityBox = React.memo(({ title, color, position, onClick, subtitle }: EntityBoxProps) => (
  <div 
    className="absolute transform -translate-x-1/2 -translate-y-1/2"
    style={{ 
      left: `${position.x}%`,
      top: `${position.y}%`,
      zIndex: 10
    }}
  >
    <div
      className={`
        p-2.5 sm:p-3 lg:p-4 
        rounded-lg 
        border-2 ${color} 
        bg-white/95
        shadow-sm hover:shadow-md active:shadow-inner
        cursor-pointer 
        transition-all duration-200 
        min-w-[130px] sm:min-w-[160px] lg:min-w-[180px] 
        backdrop-blur-sm
        touch-manipulation
        select-none
      `}
      role="button"
      tabIndex={0}
      aria-label={title}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
    >
      <h4 className="font-semibold text-[11px] sm:text-xs lg:text-sm text-center text-gray-800 leading-tight">{title}</h4>
      {subtitle && (
        <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 text-center mt-0.5 sm:mt-1 leading-tight">
          {subtitle}
        </p>
      )}
    </div>
  </div>
));

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
  />
));

ConnectingLine.displayName = 'ConnectingLine';

export default function FamilyOfficeDiagram() {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  const handleEntityClick = useCallback((entityType: string) => {
    setSelectedEntity(entityType);
  }, []);

  // Define entity positions with optimized spacing for mobile
  const positions = {
    center: { x: 50, y: 50 },
    foundation: { x: 20, y: 22 },    // Adjusted for better mobile spacing
    leasing: { x: 40, y: 22 },
    operating: { x: 60, y: 22 },
    realEstate: { x: 80, y: 22 },
    descendants: { x: 15, y: 50 },
    offshore: { x: 85, y: 42 },      // Slightly adjusted for better visibility
    domestic: { x: 85, y: 58 },
    flp1: { x: 25, y: 78 },          // Moved up slightly
    flp2: { x: 50, y: 78 },
    flp3: { x: 75, y: 78 }
  };

  return (
    <div className="relative w-full aspect-[5/4] sm:aspect-[3/2] lg:aspect-[16/9] max-w-6xl mx-auto">
      {/* SVG Layer for Connections */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        style={{ zIndex: 0 }}
        preserveAspectRatio="xMidYMid meet"
      >
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="
          p-3 sm:p-4 lg:p-6 
          rounded-lg 
          border-2 border-blue-600 
          bg-white/95
          shadow-lg hover:shadow-xl
          min-w-[140px] sm:min-w-[180px] lg:min-w-[200px] 
          backdrop-blur-sm
          touch-manipulation
          select-none
        ">
          <h3 className="font-bold text-xs sm:text-sm lg:text-base text-center text-gray-800 leading-tight">Family Office</h3>
          <p className="text-[9px] sm:text-[10px] lg:text-xs text-gray-500 text-center mt-1 sm:mt-1.5 leading-tight">Central Coordination Hub</p>
        </div>
      </div>

      {/* Operating Companies - Top Row */}
      <EntityBox
        title="Family Foundation"
        color="border-red-500"
        position={positions.foundation}
        onClick={() => handleEntityClick('Family Foundation')}
      />
      <EntityBox
        title="Equipment Leasing"
        color="border-red-500"
        position={positions.leasing}
        onClick={() => handleEntityClick('Equipment Leasing')}
        subtitle="Company"
      />
      <EntityBox
        title="Operating Company"
        color="border-red-500"
        position={positions.operating}
        onClick={() => handleEntityClick('Operating Company')}
      />
      <EntityBox
        title="Real Estate LLC"
        color="border-red-500"
        position={positions.realEstate}
        onClick={() => handleEntityClick('Real Estate')}
      />

      {/* Left Side */}
      <EntityBox
        title="Descendant's Trusts"
        color="border-emerald-500"
        position={positions.descendants}
        onClick={() => handleEntityClick('Descendant Trusts')}
      />

      {/* Right Side */}
      <EntityBox
        title="Offshore Trust"
        color="border-emerald-500"
        position={positions.offshore}
        onClick={() => handleEntityClick('Offshore Trust')}
        subtitle="Asset Protection"
      />
      <EntityBox
        title="Domestic Trust"
        color="border-emerald-500"
        position={positions.domestic}
        onClick={() => handleEntityClick('Domestic Trust')}
        subtitle="Asset Protection"
      />

      {/* Bottom Row */}
      <EntityBox
        title="Family Limited"
        color="border-emerald-500"
        position={positions.flp1}
        onClick={() => handleEntityClick('FLP 1')}
        subtitle="Partnership #1"
      />
      <EntityBox
        title="Family Limited"
        color="border-emerald-500"
        position={positions.flp2}
        onClick={() => handleEntityClick('FLP 2')}
        subtitle="Partnership #2"
      />
      <EntityBox
        title="Family Limited"
        color="border-emerald-500"
        position={positions.flp3}
        onClick={() => handleEntityClick('FLP 3')}
        subtitle="Partnership #3"
      />

      <EntityDetails
        entityType={selectedEntity || ''}
        isOpen={selectedEntity !== null}
        onClose={() => setSelectedEntity(null)}
      />
    </div>
  );
} 