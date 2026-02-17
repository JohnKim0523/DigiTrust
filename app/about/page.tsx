export default function About() {
  return (
    <div className="bg-white">
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '12rem', paddingBottom: '12rem' }}>
          <div className="text-center">
            {/* Maintenance Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-8">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="font-bold text-gray-900 mb-4 text-center" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
              Under Maintenance
            </h1>

            {/* Description */}
            <p className="text-gray-500 mb-8 max-w-2xl mx-auto text-center" style={{ fontSize: '1.1rem' }}>
              We're currently working on our About Us page. Check back soon to learn more about ExfilGuard and our mission to deliver enterprise-grade AI security solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <a
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors"
                style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem', display: 'inline-block' }}
              >
                Back to Home
              </a>
              <a
                href="/contacts"
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem', display: 'inline-block' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <a href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow" style={{ padding: '2rem' }}>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors" style={{ fontSize: '1.1rem' }}>
                  View Our Services
                </h3>
                <p className="text-gray-600 text-sm">
                  Explore our AI security offerings
                </p>
              </div>
            </a>

            <a href="/pricing" className="group">
              <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow" style={{ padding: '2rem' }}>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors" style={{ fontSize: '1.1rem' }}>
                  Check Pricing
                </h3>
                <p className="text-gray-600 text-sm">
                  Transparent, startup-friendly pricing options
                </p>
              </div>
            </a>

            <a href="/contacts" className="group">
              <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow" style={{ padding: '2rem' }}>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors" style={{ fontSize: '1.1rem' }}>
                  Get in Touch
                </h3>
                <p className="text-gray-600 text-sm">
                  Let's discuss your security requirements
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
