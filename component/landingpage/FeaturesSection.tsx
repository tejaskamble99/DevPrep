export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-4">
        Everything you need to get hired
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Practice smarter. Review faster. Land the job.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

        {/* Card 1 */}
        <div className="border border-gray-800 rounded-xl p-6">
          <div className="text-purple-500 text-3xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2">AI Interview Prep</h3>
          <p className="text-gray-400 text-sm">
            Practice role-specific questions with instant AI feedback and scoring.
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-800 rounded-xl p-6">
          <div className="text-purple-500 text-3xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold mb-2">AI Code Review</h3>
          <p className="text-gray-400 text-sm">
            Paste your code and get instant feedback on bugs, performance, and best practices.
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-800 rounded-xl p-6">
          <div className="text-purple-500 text-3xl mb-4">📈</div>
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-400 text-sm">
            See your improvement over time with session history and performance analytics.
          </p>
        </div>

      </div>
    </section>
  )
}