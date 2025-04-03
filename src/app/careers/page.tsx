'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Careers() {
  const handleApplyClick = () => {
    document.getElementById('application-instructions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/bg.jpg"
            alt="HDG Background"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Work With Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-white">
              Join our dynamic team and be part of revolutionizing distribution through innovation and expertise
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Positions</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-xl text-gray-700 mb-6">
              Currently, there are no job positions available.
            </p>
            <p className="text-md text-gray-600">
              Please check back later for new opportunities to join our team.
            </p>
          </div>
        </div>
      </section>

      {/* Application Instructions Section */}
      <section id="application-instructions" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">How to Apply</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                To apply for a position, please send an email to{' '}
                <a 
                  href="mailto:info@hilldistributiongroup.co.uk" 
                  className="text-blue-600 hover:text-blue-800"
                >
                  info@hilldistributiongroup.co.uk
                </a>
                {' '}with the following information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>Full Name</li>
                <li>Contact Number</li>
                <li>Position you're applying for</li>
                <li>Your CV (PDF format preferred)</li>
                <li>Cover Letter (optional)</li>
              </ul>
              <p className="text-gray-600">
                Please use the subject line format: "Job Application - [Position Name] - [Your Name]"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 