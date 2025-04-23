export default function BenefitsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Benefits of Modern Structure
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding the advantages of a well-structured family office
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Core Benefits
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Tax Efficiency</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Minimized tax leakage through strategic entity structuring</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Efficient income distribution mechanisms</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Optimized capital gains treatment</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Strategic use of charitable entities</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Asset Protection</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Liability isolation between entities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Protection from creditors and lawsuits</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Risk management through entity separation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Enhanced privacy and confidentiality</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Succession Planning</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Seamless wealth transfer to next generations</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Probate avoidance through trust structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Controlled distribution of assets</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Family legacy preservation</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-900 mb-4">Operational Control</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Centralized management structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Clear governance framework</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Efficient decision-making processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">•</span>
                <span>Maintained patriarch/matriarch control</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Comparative Advantage
        </h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Compared to traditional or outdated structures, the modern family office structure provides:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Superior asset protection through strategic entity separation</li>
            <li>Enhanced tax efficiency through optimal jurisdictional planning</li>
            <li>Better succession planning with integrated trust structures</li>
            <li>Improved operational control while maintaining flexibility</li>
            <li>Greater privacy and confidentiality protections</li>
            <li>More efficient wealth transfer mechanisms</li>
          </ul>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Ready to Modernize?
        </h2>
        <div className="prose max-w-none">
          <p>
            If your family office structure isn&apos;t providing these benefits, it&apos;s time to consider modernization.
            Our implementation guide can help you transition to this optimized structure.
          </p>
          <div className="mt-6">
            <a href="/implementation" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              View Implementation Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 