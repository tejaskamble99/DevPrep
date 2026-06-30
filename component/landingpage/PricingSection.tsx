export default function PriceSection() {
  return (
    <section id="pricing" className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-4">
        Investment In Yourself
      </h2>
      <p className="text-gray-400 text-center mb-12">
        Plans that scale with your career ambitions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Free */}
        <div className="border border-gray-800 rounded-xl p-6">
          <div className="text-white text-3xl mb-4">Free</div>
          <div className="text-purple-500 text-3xl mb-4">₹0/mo</div>
          <h3 className="text-sm mb-2">5 AI Code Reviews / month</h3>
          <h3 className="text-sm mb-2">Basic Skill Analytics</h3>
          <h3 className="text-sm mb-2">Public Community Access</h3>
          <div className="flex justify-center mt-6">
            <button className="font-medium py-3 px-6 rounded-lg border-2 border-white hover:bg-white hover:text-black transition duration-200">
              Get Started
            </button>
          </div>
        </div>

        {/* Pro */}
        <div className="border-2 border-purple-700 rounded-xl p-6">
          <div className="text-white text-3xl mb-4">Pro</div>
          <div className="text-purple-500 text-3xl mb-4">₹199/mo</div>
          <h3 className="text-sm mb-2">Unlimited AI Code Reviews</h3>
          <h3 className="text-sm mb-2">Weekly Mock Interviews</h3>
          <h3 className="text-sm mb-2">AI Resume Tailoring</h3>
          <h3 className="text-sm mb-2">Advanced Career Roadmaps</h3>
          <div className="flex justify-center mt-6">
            <button className="bg-purple-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-purple-800 transition duration-200">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}