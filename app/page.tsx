import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '8rem', paddingBottom: '6rem' }}>
          <div className="text-left">
            {/* Main Headline */}
            <h1 className="font-bold text-gray-900" style={{ fontSize: '3.75rem', lineHeight: '1.1', marginBottom: '2rem', maxWidth: '58rem' }}>
              Security and Web Engineering for the Modern Startup
            </h1>

            {/* Subheadline */}
            <p className="text-gray-500 leading-relaxed" style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '90%' }}>
              We have a different approach. Security in your business should not be an option and it's not complicated.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing">
                <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem' }}>
                  Get Started
                </button>
              </Link>
              <Link href="/contacts?subject=Free Assessment">
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem' }}>
                  Free Assesment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Banner */}
      <section className="bg-white border-t border-b border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <span className="text-base font-semibold text-gray-400">AWS</span>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-base font-medium text-gray-400">OpenZature</span>
            </div>
            <span className="text-base font-semibold text-gray-400">netlify</span>
            <span className="text-base font-bold text-gray-400">vercel</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-400 rounded"></div>
              <span className="text-base font-semibold text-gray-400">Ager</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why ExfilGuard Section */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column - Description */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '2.5rem' }}>
                Why ExfilGuard
              </h2>
              <p className="text-gray-600 leading-relaxed" style={{ fontSize: '1rem' }}>
                We combine enterprise-grade security with professional web development. From basic setups to full compliance solutions, we protect and build what matters most to your business.
              </p>
            </div>

            {/* Right Column - Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Security First Card */}
              <div className="flex flex-col">
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center" style={{ height: '220px', marginBottom: '2rem' }}>
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  Security First
                </h3>
                <p className="text-gray-500 text-sm">
                  Enterprise-grade protection for your digital assets
                </p>
              </div>

              {/* Customized Web Development Card */}
              <div className="flex flex-col">
                <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center" style={{ height: '220px', marginBottom: '2rem' }}>
                  <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900" style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>
                  Customized Web Development
                </h3>
                <p className="text-gray-500 text-sm">
                  Complete web development with built-in security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-bold text-gray-900" style={{ fontSize: '2.5rem' }}>
              Our Services
            </h2>
            <Link
              href="/services"
              className="text-gray-600 hover:text-black font-medium transition-all duration-200 flex items-center gap-2 group"
              style={{ fontSize: '0.95rem' }}
            >
              <span className="group-hover:translate-x-[-4px] transition-transform duration-200">View All Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Web Development Preview */}
            <Link href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer h-full" style={{ padding: '2rem' }}>
                <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                  Web Development
                </h3>
                <p className="text-gray-500 mb-6" style={{ fontSize: '0.9rem' }}>
                  Professional websites and web applications built for modern businesses. From simple landing pages to complex e-commerce platforms.
                </p>
                <div className="flex items-center text-gray-600 text-sm group-hover:text-black transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Security Services Preview */}
            <Link href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer h-full" style={{ padding: '2rem' }}>
                <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                  Security Services
                </h3>
                <p className="text-gray-500 mb-6" style={{ fontSize: '0.9rem' }}>
                  Enterprise-grade security solutions including assessments, penetration testing, compliance services, and ongoing monitoring.
                </p>
                <div className="flex items-center text-gray-600 text-sm group-hover:text-black transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Complete Bundles Preview */}
            <Link href="/services" className="group">
              <div className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer h-full" style={{ padding: '2rem' }}>
                <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                  Complete Bundles
                </h3>
                <p className="text-gray-500 mb-6" style={{ fontSize: '0.9rem' }}>
                  Web development and security combined in packages designed for startups. Essentials, Professional, and Enterprise tiers available.
                </p>
                <div className="flex items-center text-gray-600 text-sm group-hover:text-black transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA Sections */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ready to scale */}
            <div className="bg-white border border-gray-200 rounded-lg" style={{ padding: '2.5rem' }}>
              <h2 className="font-bold text-gray-900 leading-tight" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                Ready to scale with
                <br />
                confidence?
              </h2>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.15rem', fontSize: '0.9rem' }}>
                Event and conferences
              </button>
            </div>

            {/* Book a consultation */}
            <div className="bg-gray-100 border border-gray-200 rounded-lg" style={{ padding: '2.5rem' }}>
              <h2 className="font-bold text-gray-900 leading-tight" style={{ fontSize: '2rem', marginBottom: '2rem' }}>
                Book a consultation
              </h2>
              <Link href="/contacts?subject=Book a Consultation">
                <button className="bg-white hover:bg-gray-50 text-gray-700 font-medium transition-colors border border-gray-300" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.15rem', fontSize: '0.9rem' }}>
                  Book a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
