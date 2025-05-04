export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 space-y-6 sm:space-y-8 lg:space-y-12">
        {/* Hero Section */}
        <section className="text-center py-6 sm:py-8 lg:py-12">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent leading-tight tracking-tight">
            Modern Family Office Structure
          </h1>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-3xl mx-auto px-4 leading-relaxed">
            Optimize your family office with industry-leading legal and operational structures.
          </p>
        </section>

        {/* Executive Summary Section */}
        <section className="bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
          <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Executive Summary
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              For high-net-worth families, the optimal structure combines asset protection, 
              tax efficiency, and operational control through a carefully designed entity hierarchy:
            </p>
            
            <ul className="list-none space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                'A strategically-domiciled C-Corporation or LLC holding company (HoldCo)',
                'Strategically structured subsidiaries for different asset classes',
                'Integration with living trusts for succession planning',
                'Clear separation of operating entities and investment vehicles'
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 sm:mr-4 mt-0.5 group-hover:bg-blue-200 transition-colors duration-200">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-base sm:text-lg text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              This modern structure provides:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: 'Tax Benefits',
                  description: 'Minimized tax leakage through strategic entity structuring and jurisdictional advantages',
                  icon: '💰'
                },
                {
                  title: 'Asset Protection',
                  description: 'Enhanced liability protection through proper entity separation and risk management',
                  icon: '🛡️'
                },
                {
                  title: 'Succession Planning',
                  description: 'Seamless wealth transfer and probate avoidance through trust integration',
                  icon: '🔄'
                },
                {
                  title: 'Operational Control',
                  description: 'Maintained patriarch/matriarch control while enabling efficient wealth transfer',
                  icon: '⚙️'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-blue-50/70 backdrop-blur-sm p-4 sm:p-6 rounded-lg sm:rounded-xl border border-blue-100 transition-all duration-300 hover:shadow-lg hover:bg-blue-50/90">
                  <h3 className="font-semibold text-base sm:text-lg lg:text-xl text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <span className="mr-2 sm:mr-3 text-xl sm:text-2xl">{benefit.icon}</span>
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-white/95 backdrop-blur-lg rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 border border-gray-100">
          <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Why Modernize Your Structure?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
              Many family offices operate with outdated structures that expose them to unnecessary risks and inefficiencies. 
              This recommended structure represents modern best practices.
            </p>
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="/structure" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:shadow-lg"
              >
                Explore the Structure
              </a>
              <a 
                href="/operations" 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl shadow-sm text-blue-600 bg-white hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:shadow-md"
              >
                View Operations
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
