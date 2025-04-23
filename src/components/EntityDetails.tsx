interface EntityDetailsProps {
  entityType: string;
  isOpen: boolean;
  onClose: () => void;
}

const entityInfo = {
  'Managing Member': {
    title: 'Managing Member',
    description: 'The managing member entity that oversees and controls the family office structure.',
    benefits: [
      'Centralized control and management',
      'Professional oversight',
      'Coordinated strategy implementation',
      'Succession planning'
    ]
  },
  'FLLC': {
    title: 'Family Limited Liability Company',
    description: 'A flexible entity structure that provides asset protection and tax efficiency.',
    benefits: [
      'Asset protection through charging order protection',
      'Pass-through taxation',
      'Flexible ownership structure',
      'Simplified administration'
    ]
  },
  'Living Trust': {
    title: 'Living Trust',
    description: 'A revocable trust that provides privacy and probate avoidance.',
    benefits: [
      'Probate avoidance',
      'Privacy protection',
      'Flexible control',
      'Easy amendment process'
    ]
  },
  'Asset Protection Trust': {
    title: 'International Asset Protection Trust',
    description: 'An offshore trust designed to provide maximum asset protection.',
    benefits: [
      'Enhanced asset protection',
      'International diversification',
      'Privacy protection',
      'Tax planning opportunities'
    ]
  },
  'Child Trust': {
    title: 'Child\'s Trust',
    description: 'A trust established for the benefit of the next generation.',
    benefits: [
      'Asset protection for beneficiaries',
      'Tax-efficient wealth transfer',
      'Controlled distribution',
      'Legacy planning'
    ]
  },
  'Family Foundation': {
    title: 'Family Foundation',
    description: 'A charitable organization that manages the family\'s philanthropic activities.',
    benefits: [
      'Tax-efficient charitable giving',
      'Legacy and values preservation',
      'Strategic grant-making',
      'Community impact'
    ]
  },
  'Equipment Leasing': {
    title: 'Equipment Leasing Company',
    description: 'Entity that manages and leases equipment to operating businesses.',
    benefits: [
      'Tax-efficient asset management',
      'Steady income generation',
      'Asset depreciation benefits',
      'Business expense optimization'
    ]
  },
  'Operating Company': {
    title: 'Operating Company',
    description: 'Active business entity generating operating income.',
    benefits: [
      'Primary income generation',
      'Business growth opportunities',
      'Employment for family members',
      'Wealth creation vehicle'
    ]
  },
  'Real Estate': {
    title: 'Real Estate LLC',
    description: 'Entity holding and managing real estate investments.',
    benefits: [
      'Asset protection',
      'Tax-efficient property management',
      'Appreciation potential',
      'Income generation through leases'
    ]
  },
  'Descendant Trusts': {
    title: 'Descendant\'s Trusts',
    description: 'Trusts established for the benefit of future generations.',
    benefits: [
      'Generational wealth transfer',
      'Asset protection',
      'Tax-efficient inheritance',
      'Controlled distribution'
    ]
  },
  'Offshore Trust': {
    title: 'Offshore Asset Protection Trust',
    description: 'International trust providing enhanced asset protection.',
    benefits: [
      'Maximum asset protection',
      'International diversification',
      'Privacy enhancement',
      'Tax planning opportunities'
    ]
  },
  'Domestic Trust': {
    title: 'Domestic Asset Protection Trust',
    description: 'U.S.-based trust providing asset protection benefits.',
    benefits: [
      'Domestic asset protection',
      'Simplified administration',
      'Tax efficiency',
      'Estate planning integration'
    ]
  },
  'FLP 1': {
    title: 'Family Limited Partnership #1',
    description: 'Partnership structure for family investments.',
    benefits: [
      'Asset protection',
      'Centralized management',
      'Tax-efficient transfers',
      'Investment pooling'
    ]
  },
  'FLP 2': {
    title: 'Family Limited Partnership #2',
    description: 'Secondary partnership for diversified investments.',
    benefits: [
      'Risk diversification',
      'Separate investment strategy',
      'Additional asset protection',
      'Family participation opportunities'
    ]
  },
  'FLP 3': {
    title: 'Family Limited Partnership #3',
    description: 'Tertiary partnership for specialized investments.',
    benefits: [
      'Specialized investment focus',
      'Additional diversification',
      'Targeted asset protection',
      'Next-generation involvement'
    ]
  }
};

export default function EntityDetails({ entityType, isOpen, onClose }: EntityDetailsProps) {
  if (!isOpen) return null;

  const info = entityInfo[entityType as keyof typeof entityInfo] || {
    title: entityType,
    description: 'Details coming soon.',
    benefits: []
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="entity-details-title"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 p-2"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4 sm:mb-6">
          <h2 
            id="entity-details-title"
            className="font-playfair text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2"
          >
            {info.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">{info.description}</p>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 sm:mb-3">Key Benefits</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            {info.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 