export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Modern Family Office Structure
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Optimize your family office with industry-leading legal and operational structures
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Executive Summary
        </h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            For high-net-worth families, the optimal structure combines asset protection, 
            tax efficiency, and operational control through a carefully designed entity hierarchy:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Delaware-domiciled S-Corporation holding companies (HoldCos)</li>
            <li>Strategically structured subsidiaries for different asset classes</li>
            <li>Integration with living trusts for succession planning</li>
            <li>Clear separation of operating entities and investment vehicles</li>
          </ul>

          <p className="mb-4">
            This modern structure provides:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Tax Benefits</h3>
              <p>Minimized tax leakage through strategic entity structuring and jurisdictional advantages</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Asset Protection</h3>
              <p>Enhanced liability protection through proper entity separation and risk management</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Succession Planning</h3>
              <p>Seamless wealth transfer and probate avoidance through trust integration</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <h3 className="font-semibold mb-2">Operational Control</h3>
              <p>Maintained patriarch/matriarch control while enabling efficient wealth transfer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Why Modernize Your Structure?
        </h2>
        <div className="prose max-w-none">
          <p>
            Many family offices operate with outdated structures that expose them to unnecessary risks and inefficiencies. 
            This recommended structure represents current best practices.
          </p>
          <div className="mt-4">
            <a href="/structure" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Explore the Structure
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
