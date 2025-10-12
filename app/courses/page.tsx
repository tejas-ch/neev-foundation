"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaBookReader, 
  FaGraduationCap, 
  FaMicroscope, 
  FaTrophy, 
  FaMedal, 
  FaBolt,
  FaCheckCircle,
  FaUsers,
  FaClock
} from "react-icons/fa";
import courses from "@/data/courses.json";

const iconMap: any = {
  FaBookReader,
  FaGraduationCap,
  FaMicroscope,
  FaTrophy,
  FaMedal,
  FaBolt,
};

export default function CoursesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Courses
            </h1>
            <p className="text-xl text-gray-100">
              Comprehensive programs designed to build strong foundations and achieve excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-16">
            {courses.map((course, index) => {
              const Icon = iconMap[course.icon] || FaBookReader;
              return (
                <motion.div
                  key={course.id}
                  id={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-8 md:p-12"
                >
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Left: Icon & Title */}
                    <div className="md:col-span-1">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="text-5xl text-primary-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h2>
                      <p className="text-lg text-primary-600 font-semibold mb-4">
                        {course.subtitle}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaClock className="text-primary-600" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaUsers className="text-primary-600" />
                          <span className="text-sm">{course.targetAudience}</span>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="btn-primary w-full text-center block"
                      >
                        Enroll Now
                      </Link>
                    </div>

                    {/* Right: Details */}
                    <div className="md:col-span-2 space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {course.description}
                      </p>

                      {/* Subjects */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Subjects Covered</h3>
                        <div className="flex flex-wrap gap-2">
                          {course.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Course Features</h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {course.features.map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Batch Types */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Batch Options</h3>
                        <div className="flex flex-wrap gap-3">
                          {course.batchTypes.map((batch) => (
                            <span
                              key={batch}
                              className="bg-accent-light/20 text-accent-dark px-4 py-2 rounded-lg text-sm font-semibold border border-accent-light"
                            >
                              {batch}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose This Course?</h3>
                        <ul className="space-y-2">
                          {course.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2">
                              <span className="text-accent-DEFAULT mt-1">✦</span>
                              <span className="text-gray-700">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Book a free counselling session with our experts
            </p>
            <Link href="/contact" className="btn-primary bg-accent-DEFAULT hover:bg-accent-dark">
              Book Free Counselling
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
