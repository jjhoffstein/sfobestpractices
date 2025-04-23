import FamilyOfficeDiagram from '@/components/FamilyOfficeDiagram';

export default function OperationsPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            SFO Operations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            Explore how family offices coordinate various entities and operations
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Note: This is a simplified illustration for educational purposes. Actual structures should be developed with qualified legal and tax professionals based on specific circumstances.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-emerald-50 opacity-50 rounded-3xl" />
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 sm:p-12">
            <FamilyOfficeDiagram />
          </div>
        </div>
      </div>
    </div>
  );
} 