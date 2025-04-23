export default function FAQPage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Common questions about modern family office structures
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Why is Delaware the preferred jurisdiction for the holding company?
            </h3>
            <p className="text-gray-600">
              Delaware offers several advantages: sophisticated corporate laws, business-friendly regulations,
              specialized business courts (Court of Chancery), privacy protections, and extensive case law.
              These factors provide predictability and flexibility in business operations.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How long does the restructuring process typically take?
            </h3>
            <p className="text-gray-600">
              The complete restructuring process typically takes 8-13 months: 3-6 months for planning,
              2-3 months for entity formation, and 3-4 months for asset transfer and operational integration.
              Timeline can vary based on complexity and existing structure.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What are the tax implications of restructuring?
            </h3>
            <p className="text-gray-600">
              Tax implications vary based on current structure and assets. The modern structure is designed
              to minimize tax leakage through strategic entity selection and jurisdictional planning.
              Professional tax advice is essential during the planning phase to optimize tax efficiency.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How does this structure protect family assets?
            </h3>
            <p className="text-gray-600">
              The structure provides multiple layers of protection: entity separation isolates risks,
              trusts protect against creditors and lawsuits, and strategic jurisdiction selection
              offers additional legal protections. Each entity type is chosen to maximize protection
              for its specific asset class.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What professional support is needed?
            </h3>
            <p className="text-gray-600">
              Implementation requires a team of professionals: corporate attorneys for entity formation
              and governance, tax advisors for structuring, estate planners for trust integration,
              and accountants for operational setup. Coordination among these professionals is key
              to successful implementation.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              How is family control maintained?
            </h3>
            <p className="text-gray-600">
              The structure maintains family control through carefully designed governance mechanisms:
              voting rights in the holding company, trustee appointments, limited partnership agreements,
              and family council structures. This ensures patriarch/matriarch control while enabling
              efficient wealth transfer.
            </p>
          </div>

          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              What ongoing maintenance is required?
            </h3>
            <p className="text-gray-600">
              Ongoing maintenance includes: annual entity compliance, regular governance meetings,
              financial reporting, tax filings, and periodic structure reviews. Professional support
              is typically retained for these functions to ensure proper maintenance.
            </p>
          </div>

          <div className="pb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can existing structures be converted?
            </h3>
            <p className="text-gray-600">
              Yes, existing structures can be converted to the modern structure. The process involves
              careful planning to minimize disruption and optimize tax efficiency. The transition
              can be phased to manage complexity and risk.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Have More Questions?
        </h2>
        <div className="prose max-w-none">
          <p>
            Our team can provide detailed answers to your specific questions and help you understand
            how this structure can benefit your family office.
          </p>
          <div className="mt-6">
            <a href="/implementation" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
              Start Implementation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 