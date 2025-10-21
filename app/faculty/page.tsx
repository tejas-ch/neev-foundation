"use client";

import { motion } from "framer-motion";
import { FaAward, FaGraduationCap, FaBook } from "react-icons/fa";
import faculty from "@/data/faculty.json";

export default function FacultyPage() {
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
              Our Expert Faculty
            </h1>
            <p className="text-xl text-gray-100">
              Learn from the best educators with years of experience and proven track records
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-0 overflow-hidden group"
              >
                {/* Image Section */}
                <div className="relative h-64 bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-accent-light font-semibold">
                      {teacher.subject}
                    </p>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaGraduationCap className="text-primary-600" />
                      <span className="text-sm">{teacher.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaBook className="text-primary-600" />
                      <span className="text-sm">{teacher.experience}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Specialization:</h4>
                    <p className="text-sm text-gray-600">{teacher.specialization}</p>
                  </div>

                  <div className="bg-primary-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 italic">
                      "{teacher.quote}"
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <FaAward className="text-accent-DEFAULT" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {teacher.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Faculty Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Our Faculty Stands Out
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our educators are not just teachers – they are mentors, motivators, and subject matter experts committed to student success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Highly Qualified</h3>
              <p className="text-gray-600">
                M.Sc, B.Ed holders and experienced educators with deep subject knowledge
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-accent-light/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-accent-DEFAULT" />
              </div>
              <h3 className="text-xl font-bold mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Consistently producing board exam toppers and helping students achieve their academic goals
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaBook className="text-3xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Teaching</h3>
              <p className="text-gray-600">
                Modern teaching methods, interactive sessions, and personalized attention to each student
              </p>
            </motion.div>
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
              Meet Our Faculty in Person
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Visit our institute for a free demo class
            </p>
            <a href="/contact" className="btn-primary bg-accent-DEFAULT hover:bg-accent-dark">
              Book Your Demo Class
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
