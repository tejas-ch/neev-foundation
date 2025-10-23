"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaUserLock, FaCookieBite, FaFileContract } from "react-icons/fa";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-950 to-navy-900 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <FaShieldAlt className="text-6xl mx-auto mb-6 text-gold-500" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                <FaUserLock className="text-3xl text-navy-900" />
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  At NEEV – THE FOUNDATION, we collect information to provide better educational services to our students and parents:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and contact details when you inquire about our courses or enroll.</li>
                  <li><strong>Academic Information:</strong> Educational background, course preferences, and academic performance data to customize our teaching approach.</li>
                  <li><strong>Communication Data:</strong> Records of your communications with us, including emails, phone calls, and in-person meetings.</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, and website usage data to improve our online services.</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <FaFileContract className="text-3xl text-navy-900" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing educational services and course enrollment</li>
                  <li>Communicating about courses, schedules, and academic progress</li>
                  <li>Improving our teaching methods and course content</li>
                  <li>Sending important updates about admissions and academic calendar</li>
                  <li>Ensuring the security and safety of our students</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <FaCookieBite className="text-3xl text-navy-900" />
                <h2 className="text-3xl font-bold text-gray-900">Data Protection & Security</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure data storage with encryption and access controls</li>
                  <li>Regular security audits and updates to our systems</li>
                  <li>Limited access to personal data on a need-to-know basis</li>
                  <li>Secure communication channels for sensitive information</li>
                  <li>Regular staff training on data protection and privacy</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal data we hold</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another organization</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data for marketing purposes</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
                </p>
                <div className="bg-navy-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@NEEV-foundation.edu</p>
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


