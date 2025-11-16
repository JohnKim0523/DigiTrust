export default function Pricing() {
  return (
    <div className="bg-white">
      {/* Pricing Header Section */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '4rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Header and Description */}
            <div>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
                Pricing
              </h2>
              <p className="text-gray-500 leading-relaxed" style={{ fontSize: '1rem' }}>
                Transparent, startup-friendly pricing. Choose a bundle that fits your needs, or build a custom package. All prices are negotiable - we're here to work with your budget.
              </p>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="bg-gray-200 rounded-lg flex items-center justify-center" style={{ height: '200px' }}>
              <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-white">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '2rem', paddingBottom: '6rem' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Essentials */}
            <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow" style={{ padding: '2rem' }}>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                Essentials
              </h3>
              <div className="mb-6">
                <div className="text-gray-900 font-bold" style={{ fontSize: '2rem' }}>
                  $3,500
                </div>
                <div className="text-gray-500 text-sm">setup fee</div>
                <div className="text-gray-900 font-semibold mt-2" style={{ fontSize: '1.25rem' }}>
                  $299<span className="text-gray-500 text-sm font-normal">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Simple website (3-5 pages)</li>
                <li>• Basic security setup</li>
                <li>• Website security add-on</li>
                <li>• Hosting and email setup</li>
                <li>• Monthly monitoring</li>
                <li>• Ongoing support</li>
              </ul>
              <button className="w-full mt-6 bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.15rem', fontSize: '0.9rem' }}>
                Get Started
              </button>
            </div>

            {/* Professional */}
            <div className="bg-gray-50 border-2 border-gray-900 rounded-lg hover:shadow-lg transition-shadow relative" style={{ padding: '2rem' }}>
              <div className="absolute top-0 right-0 bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                Professional
              </h3>
              <div className="mb-6">
                <div className="text-gray-900 font-bold" style={{ fontSize: '2rem' }}>
                  $7,500
                </div>
                <div className="text-gray-500 text-sm">setup fee</div>
                <div className="text-gray-900 font-semibold mt-2" style={{ fontSize: '1.25rem' }}>
                  $599<span className="text-gray-500 text-sm font-normal">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• Business site (6-10 pages)</li>
                <li>• Professional security package</li>
                <li>• Website security add-on</li>
                <li>• Premium hosting</li>
                <li>• Email and integrations</li>
                <li>• Cloud security setup</li>
                <li>• Priority support</li>
              </ul>
              <button className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white font-medium transition-colors" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.15rem', fontSize: '0.9rem' }}>
                Get Started
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow" style={{ padding: '2rem' }}>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                Enterprise
              </h3>
              <div className="mb-6">
                <div className="text-gray-900 font-bold" style={{ fontSize: '2rem' }}>
                  $15,000
                </div>
                <div className="text-gray-500 text-sm">setup fee</div>
                <div className="text-gray-900 font-semibold mt-2" style={{ fontSize: '1.25rem' }}>
                  $1,199<span className="text-gray-500 text-sm font-normal">/month</span>
                </div>
              </div>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• E-commerce or custom web app</li>
                <li>• Enterprise security suite</li>
                <li>• E-commerce security package</li>
                <li>• High-availability hosting</li>
                <li>• Advanced features</li>
                <li>• Compliance setup</li>
                <li>• 24/7 monitoring</li>
                <li>• Dedicated support</li>
              </ul>
              <button className="w-full mt-6 bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors" style={{ padding: '0.75rem 1.5rem', borderRadius: '0.15rem', fontSize: '0.9rem' }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="bg-gray-50 border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <h2 className="font-bold text-gray-900 mb-8" style={{ fontSize: '2.5rem' }}>
            Individual Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Web Development */}
            <div className="bg-white border border-gray-200 rounded-lg" style={{ padding: '2rem' }}>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                Web Development
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between">
                  <span>• Simple Website (3-5 pages)</span>
                  <span className="font-medium text-gray-900">$1,000-$2,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• Business Site (6-10 pages)</span>
                  <span className="font-medium text-gray-900">$2,500-$5,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• E-Commerce Site</span>
                  <span className="font-medium text-gray-900">$5,000-$12,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• Custom Web Application</span>
                  <span className="font-medium text-gray-900">$10,000-$30,000</span>
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4">Maintenance plans available starting at $50/month</p>
            </div>

            {/* Security Packages */}
            <div className="bg-white border border-gray-200 rounded-lg" style={{ padding: '2rem' }}>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                Security Packages
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between">
                  <span>• Basic Security Setup</span>
                  <span className="font-medium text-gray-900">$1,200</span>
                </li>
                <li className="flex justify-between">
                  <span>• Professional Security Package</span>
                  <span className="font-medium text-gray-900">$2,500</span>
                </li>
                <li className="flex justify-between">
                  <span>• Enterprise Security Suite</span>
                  <span className="font-medium text-gray-900">$5,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• Quick Security Assessment</span>
                  <span className="font-medium text-gray-900">$500</span>
                </li>
              </ul>
              <p className="text-gray-500 text-xs mt-4">Monthly maintenance from $99/month</p>
            </div>

            {/* Additional Security Services */}
            <div className="bg-white border border-gray-200 rounded-lg" style={{ padding: '2rem' }}>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                Additional Security Services
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between">
                  <span>• Penetration Testing</span>
                  <span className="font-medium text-gray-900">$2,500-$4,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• Comprehensive Security Audit</span>
                  <span className="font-medium text-gray-900">$1,500</span>
                </li>
                <li className="flex justify-between">
                  <span>• Network Setup & Config</span>
                  <span className="font-medium text-gray-900">$1,000-$3,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• VPN Setup</span>
                  <span className="font-medium text-gray-900">$400-$800</span>
                </li>
              </ul>
            </div>

            {/* Compliance & Support */}
            <div className="bg-white border border-gray-200 rounded-lg" style={{ padding: '2rem' }}>
              <h3 className="font-bold text-gray-900 mb-4" style={{ fontSize: '1.5rem' }}>
                Compliance & Support
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex justify-between">
                  <span>• Compliance Readiness Check</span>
                  <span className="font-medium text-gray-900">$1,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• Compliance Implementation</span>
                  <span className="font-medium text-gray-900">$3,000-$8,000</span>
                </li>
                <li className="flex justify-between">
                  <span>• Security Awareness Training</span>
                  <span className="font-medium text-gray-900">$300/session</span>
                </li>
                <li className="flex justify-between">
                  <span>• Additional Support Hours</span>
                  <span className="font-medium text-gray-900">$75/hour</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              All prices are negotiable. Contact us to discuss a custom package tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="text-center">
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '2.5rem' }}>
              Need a custom solution?
            </h2>
            <p className="text-gray-500 mb-8" style={{ fontSize: '1.1rem' }}>
              We'll work with you to create a package that fits your budget and requirements.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem' }}>
                Contact Us
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem' }}>
                Free Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
