export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-3xl mb-8">
        <h1 className="text-6xl font-bold mb-4">
          Accelerate Your Career with DevPrep AI
        </h1>
        <p className="text-gray-500 text-lg mb-8">
          The all-in-one platform for ai code reviews , Mock interviews, and
          Career roadmap planning designed for high-performance Developers.
        </p>
      </div>
      <div className="flex  gap-4">
        <button className="bg-purple-700 text-white font-medium py-3 px-6  rounded-lg hover:bg-purple-800transition duration-200">
          Get Started
        </button>

        <button className="text-purple-700 font-medium py-3 px-6 rounded-lg border-2 border-purple-700 hover:bg-purple-50 transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
}
