export default function Services() {
  return (
    <div className="bg-white">
      {/* Our Services Section */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '4rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Header and Description */}
            <div>
              <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: '3rem', lineHeight: '1.1' }}>
                Our Services
              </h2>
              <p className="text-gray-500 leading-relaxed" style={{ fontSize: '1rem' }}>
                From simple websites to enterprise security solutions, we offer comprehensive services designed for modern startups and small businesses. Every package includes our commitment to quality and security.
              </p>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="bg-gray-200 rounded-lg flex items-center justify-center" style={{ height: '280px' }}>
              <svg className="w-16 h-16 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-white">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '0rem', paddingBottom: '6rem' }}>
          {/* Web Development Services */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Web Development Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Website Services */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Website Development</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Simple Website (3-5 pages)</li>
                  <li>• Business Sites (6-10 pages)</li>
                  <li>• E-Commerce Sites</li>
                  <li>• Custom Web Applications</li>
                </ul>
              </div>

              {/* Included Features */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Included with All Websites</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Responsive design for all devices</li>
                  <li>• SEO optimization</li>
                  <li>• Hosting and email setup</li>
                  <li>• Maintenance plans available</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Website Security Add-Ons</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Website Security Add-On - Enhanced protection for standard websites</li>
                <li>• E-Commerce Security Package - Specialized security for online stores</li>
                <li>• Web App Security Package - Advanced security for custom applications</li>
              </ul>
            </div>
          </div>

          {/* Security Packages */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Security Packages
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Core Security Packages */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Security Setup Packages</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Basic Security Setup - Essential protection for small businesses</li>
                  <li>• Professional Security Package - Comprehensive security for growing companies</li>
                  <li>• Enterprise Security Suite - Full-scale security for large organizations</li>
                </ul>
              </div>

              {/* Maintenance Plans */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Ongoing Maintenance</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Basic tier maintenance included</li>
                  <li>• Professional tier maintenance included</li>
                  <li>• Enterprise tier maintenance included</li>
                  <li>• Custom maintenance plans available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Standalone Security Services */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Standalone Security Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Assessments & Testing */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Security Assessments & Testing</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Quick Security Assessment</li>
                  <li>• Comprehensive Security Audit</li>
                  <li>• Penetration Testing</li>
                  <li>• Vulnerability Scanning</li>
                </ul>
              </div>

              {/* Monitoring & Response */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Monitoring & Response</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Security Monitoring (24/7 available)</li>
                  <li>• Incident Response Retainer</li>
                  <li>• Threat Detection & Analysis</li>
                  <li>• Security Event Management</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Network Services */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Network Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Network Setup */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Infrastructure Setup</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Network Setup & Configuration</li>
                  <li>• VPN Setup & Management</li>
                  <li>• Cloud Infrastructure Security</li>
                  <li>• Network Architecture Design</li>
                </ul>
              </div>

              {/* Additional Services */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Data Protection</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Backup Solution Setup</li>
                  <li>• Disaster Recovery Planning</li>
                  <li>• Data Encryption Services</li>
                  <li>• Secure File Transfer Solutions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Compliance Services */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Compliance Services
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Compliance Implementation */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Compliance Solutions</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Compliance Readiness Check</li>
                  <li>• Compliance Implementation</li>
                  <li>• Ongoing Compliance Support</li>
                  <li>• Compliance Documentation</li>
                </ul>
              </div>

              {/* Standards Coverage */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Supported Standards</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• GDPR compliance assistance</li>
                  <li>• HIPAA security requirements</li>
                  <li>• SOC 2 readiness</li>
                  <li>• Industry-specific regulations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Training & Support */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Training & Support
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Training */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Security Training</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Security Awareness Training</li>
                  <li>• Phishing Simulation & Training</li>
                  <li>• Custom Training Programs</li>
                  <li>• Executive Security Briefings</li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Support Services</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Additional Support Hours</li>
                  <li>• Support Hour Packages (5 or 10 hours)</li>
                  <li>• Priority Support Options</li>
                  <li>• Technical Consulting</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Complete Bundles */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Complete Bundles
              </h3>
              <p className="text-gray-500 mt-2" style={{ fontSize: '0.95rem' }}>
                Get everything you need in one package - web development and security combined for maximum value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Essentials */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Essentials Bundle</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Simple website (3-5 pages)</li>
                  <li>• Hosting and email setup</li>
                  <li>• Basic Security Setup</li>
                  <li>• Website Security Add-On</li>
                  <li>• Monthly monitoring and support</li>
                </ul>
              </div>

              {/* Professional */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Professional Bundle</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Business site (6-10 pages)</li>
                  <li>• Premium hosting</li>
                  <li>• Email and integrations</li>
                  <li>• Professional Security Package</li>
                  <li>• Website Security Add-On</li>
                  <li>• Cloud security setup</li>
                  <li>• Priority support</li>
                </ul>
              </div>

              {/* Enterprise */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Enterprise Bundle</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• E-commerce or custom web app</li>
                  <li>• High-availability hosting</li>
                  <li>• Advanced features</li>
                  <li>• Enterprise Security Suite</li>
                  <li>• E-Commerce Security Package</li>
                  <li>• Compliance setup</li>
                  <li>• 24/7 monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-white border-t border-gray-200">
        <div style={{ maxWidth: '90rem', margin: '0 auto', paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="text-center">
            <h2 className="font-bold text-gray-900 mb-4" style={{ fontSize: '2.5rem' }}>
              Ready to get started?
            </h2>
            <p className="text-gray-500 mb-8" style={{ fontSize: '1.1rem' }}>
              Contact us today for a free consultation and security assessment.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem' }}>
                Get Started
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors" style={{ padding: '1rem 2rem', borderRadius: '0.15rem', fontSize: '1rem' }}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
