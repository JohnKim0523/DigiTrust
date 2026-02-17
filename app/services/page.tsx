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
                From AI model protection to full-scale compliance solutions, we offer comprehensive AI security services designed for organizations deploying artificial intelligence. Every engagement includes our commitment to securing your AI infrastructure.
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
          {/* AI Model Security */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                AI Model Security
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Threat Protection */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Threat Protection</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Prompt Injection Defense</li>
                  <li>• Data Exfiltration Prevention</li>
                  <li>• Model Manipulation Detection</li>
                  <li>• Adversarial Input Filtering</li>
                </ul>
              </div>

              {/* Model Hardening */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Model Hardening</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Input/Output Guardrails</li>
                  <li>• Access Control & Authentication</li>
                  <li>• Rate Limiting & Abuse Prevention</li>
                  <li>• Secure Model Deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Risk Assessment */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                AI Risk Assessment
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Assessments */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Security Assessments</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• AI Infrastructure Audit</li>
                  <li>• LLM Vulnerability Assessment</li>
                  <li>• Data Pipeline Security Review</li>
                  <li>• AI Red Teaming</li>
                </ul>
              </div>

              {/* Testing */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Penetration Testing</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• AI/ML Model Penetration Testing</li>
                  <li>• API Security Testing</li>
                  <li>• Integration Point Assessment</li>
                  <li>• Supply Chain Risk Analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Monitoring & Response */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                AI Monitoring & Response
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Monitoring */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Continuous Monitoring</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Real-time AI Behavior Monitoring</li>
                  <li>• Anomaly Detection</li>
                  <li>• Data Leakage Alerts</li>
                  <li>• Model Drift Detection</li>
                </ul>
              </div>

              {/* Response */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Incident Response</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• 24/7 AI Incident Response</li>
                  <li>• Threat Containment & Remediation</li>
                  <li>• Forensic Analysis</li>
                  <li>• Post-Incident Review</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data & Pipeline Security */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Data & Pipeline Security
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Data Protection */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Training Data Protection</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Data Poisoning Prevention</li>
                  <li>• PII Detection & Redaction</li>
                  <li>• Sensitive Data Classification</li>
                  <li>• Data Provenance Tracking</li>
                </ul>
              </div>

              {/* Pipeline Security */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>ML Pipeline Security</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• CI/CD Pipeline Hardening</li>
                  <li>• Model Registry Security</li>
                  <li>• Artifact Integrity Verification</li>
                  <li>• Environment Isolation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Compliance & Governance */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                AI Compliance & Governance
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Compliance */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Regulatory Compliance</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• EU AI Act Readiness</li>
                  <li>• NIST AI Risk Management Framework</li>
                  <li>• ISO 42001 AI Management System</li>
                  <li>• Industry-Specific AI Regulations</li>
                </ul>
              </div>

              {/* Governance */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>AI Governance</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• AI Policy Development</li>
                  <li>• Responsible AI Frameworks</li>
                  <li>• Bias & Fairness Auditing</li>
                  <li>• AI Ethics Review</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Training & Advisory */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 hover:shadow-md transition-shadow" style={{ padding: '2.5rem' }}>
            <div className="mb-6">
              <h3 className="font-bold text-gray-900" style={{ fontSize: '1.75rem' }}>
                Training & Advisory
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Training */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>AI Security Training</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• AI Security Awareness Programs</li>
                  <li>• Secure AI Development Practices</li>
                  <li>• Prompt Engineering Security</li>
                  <li>• Executive AI Risk Briefings</li>
                </ul>
              </div>

              {/* Advisory */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3" style={{ fontSize: '1.1rem' }}>Advisory Services</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• AI Security Architecture Review</li>
                  <li>• Vendor Risk Assessment</li>
                  <li>• AI Security Strategy Development</li>
                  <li>• Technical Consulting</li>
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
              Contact us today for a free AI security assessment.
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
