export default function ImplementationPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Implementation Guide
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Step-by-step guide to modernizing your family office structure
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Implementation Process
        </h2>
        
        <div className="space-y-8">
          <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-semibold mb-3">1. Initial Assessment</h3>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 space-y-2">
                <li>Review current structure and identify gaps</li>
                <li>Assess tax implications of restructuring</li>
                <li>Evaluate existing assets and operations</li>
                <li>Define family governance objectives</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-semibold mb-3">2. Planning Phase</h3>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 space-y-2">
                <li>Design new entity structure</li>
                <li>Draft governance documents</li>
                <li>Develop transition timeline</li>
                <li>Create asset transfer strategy</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-semibold mb-3">3. Entity Formation</h3>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 space-y-2">
                <li>Establish Delaware holding company</li>
                <li>Form subsidiary entities</li>
                <li>Set up trust structures</li>
                <li>Create limited partnerships</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 pb-8 border-l-2 border-blue-200">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-semibold mb-3">4. Asset Transfer</h3>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 space-y-2">
                <li>Execute asset transfer strategy</li>
                <li>Update ownership documentation</li>
                <li>Implement tax-efficient transfers</li>
                <li>Establish new banking relationships</li>
              </ul>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-blue-200">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
            <h3 className="text-xl font-semibold mb-3">5. Operational Integration</h3>
            <div className="prose max-w-none">
              <ul className="list-disc pl-6 space-y-2">
                <li>Implement governance procedures</li>
                <li>Train family members and staff</li>
                <li>Establish reporting systems</li>
                <li>Document operational procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Key Success Factors
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Professional Team</h3>
            <ul className="space-y-2">
              <li>Corporate attorneys</li>
              <li>Tax advisors</li>
              <li>Estate planners</li>
              <li>Accountants</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Documentation</h3>
            <ul className="space-y-2">
              <li>Operating agreements</li>
              <li>Trust documents</li>
              <li>Transfer agreements</li>
              <li>Governance policies</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Timeline</h3>
            <ul className="space-y-2">
              <li>3-6 months planning</li>
              <li>2-3 months formation</li>
              <li>3-4 months transfer</li>
              <li>Ongoing integration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Start?
        </h2>
        <div className="prose max-w-none">
          <p>
            Implementing a modern family office structure requires careful planning and execution.
            Our team can help guide you through each step of the process.
          </p>
          <div className="mt-6">
            <a href="/faq" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              View Common Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 