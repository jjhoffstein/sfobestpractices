'use client';

import React, { useState } from 'react';

interface EntityBoxProps {
  title: string;
  type: 'managing' | 'fllc' | 'trust' | 'operating' | 'flp';
  onClick: () => void;
  width?: string;
  subtitle?: string;
}

const EntityBox: React.FC<EntityBoxProps> = ({ title, type, onClick, width = 'w-48', subtitle }) => {
  const getStyle = () => {
    switch (type) {
      case 'managing':
        return 'bg-gradient-to-br from-purple-600 to-purple-800 text-white border-purple-400';
      case 'fllc':
        return 'bg-gradient-to-br from-amber-500 to-amber-600 text-white border-amber-400';
      case 'trust':
        return 'bg-gradient-to-br from-emerald-400 to-emerald-500 text-gray-800 border-emerald-300';
      case 'operating':
        return 'bg-gradient-to-br from-red-600 to-red-700 text-white border-red-400';
      case 'flp':
        return 'bg-gradient-to-br from-emerald-500 to-emerald-600 text-white border-emerald-400';
      default:
        return 'bg-gray-200';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`${width} p-4 rounded-lg ${getStyle()} hover:opacity-90 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl border-2 transform hover:-translate-y-0.5`}
    >
      <div className="text-sm font-semibold mb-1">{title}</div>
      {subtitle && <div className="text-xs opacity-90">{subtitle}</div>}
    </button>
  );
};

interface EntityDetailProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

const EntityDetail: React.FC<EntityDetailProps> = ({ title, content, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Close</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="prose max-w-none">
          {content}
        </div>
      </div>
    </div>
  </div>
);

const ConnectorLine: React.FC<{ direction?: 'vertical' | 'horizontal' | 'diagonal-right' | 'diagonal-left'; length?: string }> = ({ 
  direction = 'vertical',
  length = 'h-8'
}) => {
  const getLineStyle = () => {
    switch (direction) {
      case 'vertical':
        return `${length} w-px bg-gradient-to-b from-gray-300 to-gray-400 mx-auto`;
      case 'horizontal':
        return 'h-px w-8 bg-gradient-to-r from-gray-300 to-gray-400';
      case 'diagonal-right':
        return 'h-8 w-px bg-gradient-to-br from-gray-300 to-gray-400 transform rotate-45';
      case 'diagonal-left':
        return 'h-8 w-px bg-gradient-to-bl from-gray-300 to-gray-400 transform -rotate-45';
      default:
        return '';
    }
  };

  return (
    <div className={`relative ${direction === 'vertical' ? 'py-2' : 'px-2'}`}>
      <div className={getLineStyle()} />
    </div>
  );
};

export default function InteractiveEntityDiagram() {
  const [selectedEntity, setSelectedEntity] = useState<string | null>(null);

  const entityDetails: Record<string, React.ReactNode> = {
    'Managing Member': (
      <div>
        <p>The Managing Member serves as the central control entity:</p>
        <ul>
          <li>Oversees all family office operations and strategy</li>
          <li>Acts as General Partner (GP) for Family Limited Partnerships</li>
          <li>Coordinates professional management and family governance</li>
          <li>Qualifies as a trade or business for tax efficiency</li>
          <li>Manages relationships with service providers and advisors</li>
        </ul>
      </div>
    ),
    'FLLC': (
      <div>
        <p>The Family Limited Liability Company (FLLC) structure provides:</p>
        <ul>
          <li>Asset protection through liability shield</li>
          <li>Pass-through taxation benefits</li>
          <li>Flexible management structure</li>
          <li>Enhanced privacy and confidentiality</li>
          <li>Simplified succession planning</li>
        </ul>
      </div>
    ),
    // Add more entity details here...
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="space-y-12">
        {/* Top Level */}
        <div className="flex flex-col items-center space-y-6">
          <EntityBox
            title="Managing Member"
            subtitle=""
            type="managing"
            onClick={() => setSelectedEntity('Managing Member')}
            width="w-64"
          />
          <ConnectorLine length="h-12" />
          <EntityBox
            title="Family Limited Liability Company"
            subtitle="FLLC"
            type="fllc"
            onClick={() => setSelectedEntity('FLLC')}
            width="w-64"
          />
        </div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-px h-full bg-gradient-to-b from-gray-300 to-gray-400" />
          </div>

          {/* Trust Level */}
          <div className="relative z-10">
            <div className="grid grid-cols-5 gap-6 justify-items-center mb-12">
              <EntityBox
                title="Patriarch's Living Trust"
                type="trust"
                onClick={() => setSelectedEntity('Patriarch\'s Living Trust')}
                width="w-44"
              />
              <EntityBox
                title="Matriarch's Living Trust"
                type="trust"
                onClick={() => setSelectedEntity('Matriarch\'s Living Trust')}
                width="w-44"
              />
              <EntityBox
                title="Int'l Asset Protection"
                subtitle="Trust"
                type="trust"
                onClick={() => setSelectedEntity('International Asset Protection Trust')}
                width="w-44"
              />
              <EntityBox
                title="Child 1's Trust"
                subtitle="Generation 2"
                type="trust"
                onClick={() => setSelectedEntity('Child\'s Trust 1')}
                width="w-44"
              />
              <EntityBox
                title="Child 2's Trust"
                subtitle="Generation 2"
                type="trust"
                onClick={() => setSelectedEntity('Child\'s Trust 2')}
                width="w-44"
              />
            </div>

            {/* Operating Companies */}
            <div className="grid grid-cols-4 gap-6 justify-items-center mb-12">
              <EntityBox
                title="Family Foundation"
                subtitle="Charitable Activities"
                type="operating"
                onClick={() => setSelectedEntity('Family Foundation')}
                width="w-56"
              />
              <EntityBox
                title="Equipment Leasing"
                subtitle="Asset Management"
                type="operating"
                onClick={() => setSelectedEntity('Equipment Leasing Company')}
                width="w-56"
              />
              <EntityBox
                title="Operating Company"
                subtitle="Business Operations"
                type="operating"
                onClick={() => setSelectedEntity('Operating Company')}
                width="w-56"
              />
              <EntityBox
                title="Real Estate LLC"
                subtitle="Property Management"
                type="operating"
                onClick={() => setSelectedEntity('Real Estate LLC')}
                width="w-56"
              />
            </div>

            {/* FLPs */}
            <div className="grid grid-cols-3 gap-6 justify-items-center">
              <EntityBox
                title="Family Limited Partnership"
                subtitle="Investment Portfolio"
                type="flp"
                onClick={() => setSelectedEntity('FLP 1')}
                width="w-64"
              />
              <EntityBox
                title="Family Limited Partnership"
                subtitle="Real Estate Holdings"
                type="flp"
                onClick={() => setSelectedEntity('FLP 2')}
                width="w-64"
              />
              <EntityBox
                title="Family Limited Partnership"
                subtitle="Operating Assets"
                type="flp"
                onClick={() => setSelectedEntity('FLP 3')}
                width="w-64"
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedEntity && entityDetails[selectedEntity] && (
          <EntityDetail
            title={selectedEntity}
            content={entityDetails[selectedEntity]}
            onClose={() => setSelectedEntity(null)}
          />
        )}
      </div>
    </div>
  );
} 