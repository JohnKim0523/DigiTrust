'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: ''
  });

  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      setFormData(prev => ({ ...prev, subject: subjectParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white">
      {/* Contact Header Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24 pb-6 sm:pb-8">
          <div className="flex items-center gap-2 sm:gap-3 text-gray-500 mb-4 sm:mb-6">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm sm:text-base">Contact Us</span>
          </div>
          <h1 className="font-bold text-gray-900 mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Contact Us
          </h1>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            Have questions? Need an assessment? Let's discuss how we can help secure your AI systems.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 pb-16 sm:pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-32">
            {/* Left Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-16">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all text-gray-700"
                    style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem' }}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all text-gray-700"
                    style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem' }}
                    required
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all text-gray-700"
                    style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem' }}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="Free Assessment">Free Assessment</option>
                    <option value="Book a Consultation">Book a Consultation</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Pricing Question">Pricing Question</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition-all text-gray-700 resize-none"
                    style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem', minHeight: '6rem' }}
                    placeholder="Ask us anything - questions about our services, your specific needs, pricing negotiations, or anything else you'd like to discuss. We're here to help!"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="bg-gray-600 hover:bg-gray-700 text-white font-medium transition-colors"
                    style={{ padding: '1.15rem 2.75rem', borderRadius: '0.375rem', fontSize: '1.05rem' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="space-y-16">
              {/* Email */}
              <div>
                <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                  Email
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-md text-gray-700" style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem' }}>
                  contact@exfilguard.com
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                  Company Name
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-md text-gray-700" style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem' }}>
                  ExfilGuard
                </div>
              </div>

              {/* Screen/Message */}
              <div>
                <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                  Screen/Message
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-md text-gray-400" style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem', minHeight: '3.5rem' }}>

                </div>
              </div>

              {/* Data protecting user */}
              <div>
                <label className="block text-gray-600 mb-5" style={{ fontSize: '1.05rem', fontWeight: '500', letterSpacing: '0.01em' }}>
                  Data protecting user
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-md text-gray-400" style={{ fontSize: '1.05rem', padding: '0.65rem 1.25rem', minHeight: '3.5rem' }}>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactForm />
    </Suspense>
  );
}
