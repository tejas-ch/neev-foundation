"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";
import topPerformers from "@/data/topPerformers.json";
import { getAssetPath } from "@/lib/utils";

export default function ResultsPage() {
  const [selectedYear, setSelectedYear] = useState("2024");
  
  const years = ["2024"];
  
  // Memoize processed toppers to avoid re-processing on every render
  const processedToppers = useMemo(() => 
    topPerformers.map(topper => ({
      ...topper,
      image: getAssetPath(topper.image)
    })),
  []);
  
  // Memoize filtered toppers based on selected year
  const filteredToppers = useMemo(() => 
    processedToppers.filter((topper) => topper.year.toString() === selectedYear),
    [processedToppers, selectedYear]
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <FaTrophy className="text-6xl mx-auto mb-6 text-gold-500" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our Star Achievers
            </h1>
            <p className="text-xl text-white opacity-90">
              Celebrating excellence and the success stories of our brilliant students
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-lg -mt-8 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium">Toppers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-600 mb-2">
                90%+
              </div>
              <div className="text-gray-600 font-medium">Board Toppers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-navy-900 mb-2">
                95%+
              </div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gold-600 mb-2">
                2000+
              </div>
              <div className="text-gray-600 font-medium">Selections</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Year Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-center gap-4 mb-12">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                  selectedYear === year
                    ? "bg-navy-900 text-white shadow-lg scale-105"
                    : "bg-white text-navy-900 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Batch {year}
              </button>
            ))}
          </div>

          {/* Toppers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredToppers.map((topper, index) => (
              <motion.div
                key={topper.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card p-0 overflow-hidden group"
              >
                {/* Top Badge */}
                <div className="bg-gradient-to-r from-gold-600 to-gold-700 text-white py-2 px-4 text-center">
                  <FaStar className="inline mr-2" />
                  <span className="font-bold">{topper.rank}</span>
                </div>

                {/* Image */}
                <div className="relative h-64 bg-gradient-to-br from-navy-100 to-navy-200 flex items-center justify-center overflow-hidden">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = getAssetPath("/images/toppers/default-student.svg");
                    }}
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy-950 mb-2">
                    {topper.name}
                  </h3>
                  <p className="text-navy-900 font-semibold mb-2">
                    {topper.exam}
                  </p>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Year</div>
                      <div className="font-bold text-gray-900">{topper.year}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Score</div>
                      <div className="font-bold text-gold-600">{topper.percentage}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Course:</strong> {topper.course}
                  </p>
                  <div className="bg-navy-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "{topper.testimonial}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <FaMedal className="text-5xl text-gold-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-navy-950 mb-4">
              Our Success Stories
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Every success story at NEEV is a testament to hard work, dedication, and the right guidance.
              We are proud of each student who trusted us with their dreams.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-2 text-white">JEE Success</h3>
              <p className="text-5xl font-bold mb-4 text-white">12+</p>
              <p className="text-white opacity-90">
                Students qualified in JEE Main and selected in engineering colleges
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold-600 to-gold-700 text-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-2 text-white">NEET Success</h3>
              <p className="text-5xl font-bold mb-4 text-white">8+</p>
              <p className="text-white opacity-90">
                Students qualified in NEET and admitted to medical colleges
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-900 to-navy-950 text-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-3xl font-bold mb-2 text-white">Board Excellence</h3>
              <p className="text-5xl font-bold mb-4 text-white">95%+</p>
              <p className="text-white opacity-90">
                Students scoring above 90% in board exams consistently
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-950 to-navy-900 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Be the Next Success Story
            </h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Join NEEV and write your own success story
            </p>
            <a href="/contact" className="btn-gold">
              Start Your Journey
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

