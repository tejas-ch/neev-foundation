"use client";

import { motion } from "framer-motion";
import { FaGavel, FaUserGraduate, FaClipboardCheck, FaExclamationTriangle } from "react-icons/fa";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FaGavel className="text-6xl mx-auto mb-6 text-accent-light" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-200">
              Please read these terms carefully before using our educational services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <FaClipboardCheck className="text-3xl text-primary-600" />
                <h2 className="text-3xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  By enrolling in courses at Neev – THE FOUNDATION or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  These terms apply to all students, parents, guardians, and visitors who use our educational services, facilities, or website.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <FaUserGraduate className="text-3xl text-primary-600" />
                <h2 className="text-3xl font-bold text-gray-900">Educational Services</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>Neev – THE FOUNDATION provides educational services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Foundation courses for classes 6-10</li>
                  <li>JEE and NEET preparation programs</li>
                  <li>Board examination coaching</li>
                  <li>Olympiad and NTSE preparation</li>
                  <li>Online and offline classes</li>
                  <li>Study materials and resources</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Student Responsibilities</h2>
              <div className="space-y-4 text-gray-700">
                <p>As a student at Neev, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Attend classes regularly and punctually</li>
                  <li>Complete assignments and homework on time</li>
                  <li>Respect faculty, staff, and fellow students</li>
                  <li>Follow the institute's code of conduct</li>
                  <li>Take care of institute property and facilities</li>
                  <li>Provide accurate information during enrollment</li>
                  <li>Pay fees on time as per the agreed schedule</li>
                  <li>Inform about any changes in contact information</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Fee Structure & Refund Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p><strong>Fee Payment:</strong></p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Fees must be paid as per the agreed schedule</li>
                  <li>Late payment may result in temporary suspension of services</li>
                  <li>All fees are non-transferable between students</li>
                </ul>
                <p><strong>Refund Policy:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refunds are processed as per our refund policy</li>
                  <li>No refund for services already consumed</li>
                  <li>Cancellation requests must be submitted in writing</li>
                  <li>Processing of refunds may take 15-30 business days</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  All course materials, study notes, videos, and content provided by Neev are protected by intellectual property rights and are for personal educational use only.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Materials cannot be shared, copied, or distributed without permission</li>
                  <li>Recording of classes is prohibited without explicit consent</li>
                  <li>Commercial use of any materials is strictly forbidden</li>
                  <li>Violation may result in immediate termination of services</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <FaExclamationTriangle className="text-3xl text-accent-DEFAULT" />
                <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  While we strive to provide the best educational services, Neev – THE FOUNDATION makes no guarantees regarding:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Specific academic results or examination outcomes</li>
                  <li>Admission to specific institutions or universities</li>
                  <li>Uninterrupted access to services due to technical issues</li>
                  <li>Personal property brought to the institute premises</li>
                </ul>
                <p>
                  Our liability is limited to the fees paid for the specific services in question.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to terminate services for any student who:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violates these terms of service</li>
                  <li>Engages in disruptive or inappropriate behavior</li>
                  <li>Fails to pay fees as per the agreed schedule</li>
                  <li>Provides false or misleading information</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  For any questions regarding these Terms of Service, please contact us:
                </p>
                <div className="bg-primary-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@neev-foundation.edu</p>
                  <p><strong>Phone:</strong> +91 9876543210</p>
                  <p><strong>Address:</strong> 123 Education Street, Learning District, City - 456789</p>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}