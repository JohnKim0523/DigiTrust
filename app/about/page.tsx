export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About DigiTrust
          </h1>
          <p className="text-xl text-gray-300">
            A template ready for your content
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About This Template
            </h2>
            <p className="text-gray-600 mb-6">
              DigiTrust is a simple, clean template built with Next.js 16 and Tailwind CSS.
              It provides a solid foundation for building modern web applications.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Features
            </h3>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Responsive design that works on all devices</li>
              <li>Modern tech stack with Next.js 16</li>
              <li>Tailwind CSS for easy styling</li>
              <li>Clean, maintainable code structure</li>
              <li>Ready to expand with new features</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
              Getting Started
            </h3>
            <p className="text-gray-600">
              This template is ready for you to customize and expand. Add new pages,
              components, and features as your project grows. The simple structure
              makes it easy to build exactly what you need.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
