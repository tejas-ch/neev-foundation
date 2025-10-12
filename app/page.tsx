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
  FaChalkboardTeacher,
  FaUsers,
  FaAward,
  FaRocket
} from "react-icons/fa";
import siteConfig from "@/data/siteConfig.json";
import courses from "@/data/courses.json";
import topPerformers from "@/data/topPerformers.json";
import testimonials from "@/data/testimonials.json";

const iconMap: any = {
  FaBookReader,
  FaGraduationCap,
  FaMicroscope,
  FaTrophy,
  FaMedal,
  FaBolt,
};

export default function Home() {
  const featuredCourses = courses.slice(0, 4);
  const recentToppers = topPerformers.slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {siteConfig.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                {siteConfig.hero.subtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-accent-DEFAULT hover:bg-accent-dark">
                  {siteConfig.hero.ctaPrimary}
                </Link>
                <Link href="/courses" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white">
                  {siteConfig.hero.ctaSecondary}
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-DEFAULT rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/483658866_657302566749225_1972531173840858552_n.jpg"
                  alt="Neev Foundation"
                  className="relative rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 shadow-lg -mt-8 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">
                About <span className="gradient-text">Neev Foundation</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {siteConfig.about}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 15 years of excellence in education, Neev has been the foundation
                for thousands of successful students. Our innovative teaching methods combined
                with experienced faculty ensure every student reaches their full potential.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="card p-6">
                <FaChalkboardTeacher className="text-5xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Faculty</h3>
                <p className="text-gray-600">50+ experienced educators</p>
              </div>
              <div className="card p-6">
                <FaUsers className="text-5xl text-accent-DEFAULT mb-4" />
                <h3 className="text-xl font-bold mb-2">Small Batches</h3>
                <p className="text-gray-600">Personalized attention</p>
              </div>
              <div className="card p-6">
                <FaAward className="text-5xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-gray-600">100+ toppers yearly</p>
              </div>
              <div className="card p-6">
                <FaRocket className="text-5xl text-accent-DEFAULT mb-4" />
                <h3 className="text-xl font-bold mb-2">Modern Methods</h3>
                <p className="text-gray-600">Innovative learning</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Featured Courses</span>
            </h2>
            <p className="section-subtitle">
              Choose the right program to achieve your academic goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => {
              const Icon = iconMap[course.icon] || FaBookReader;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-4xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-sm text-primary-600 font-semibold mb-4">
                    {course.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses#${course.id}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center gap-2 group"
                  >
                    View Details
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/courses" className="btn-primary">
              View All Courses
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Top Performers Preview */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Star Achievers</span>
            </h2>
            <p className="section-subtitle">
              Celebrating excellence and inspiring future toppers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentToppers.map((topper, index) => (
              <motion.div
                key={topper.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary-200"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {topper.name}
                    </h3>
                    <p className="text-primary-600 font-semibold mb-2">
                      {topper.rank}
                    </p>
                    <p className="text-sm text-gray-600">
                      {topper.exam} • {topper.year}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-4 italic">
                  "{topper.testimonial}"
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/results" className="btn-primary">
              View All Results
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title">
              What <span className="gradient-text">Parents Say</span>
            </h2>
            <p className="section-subtitle">
              Trusted by thousands of families across the region
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent-DEFAULT text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Foundation?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of successful students who achieved their dreams with Neev
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent-DEFAULT hover:bg-accent-dark">
                Enroll Now
              </Link>
              <Link href="/contact" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white">
                Book Free Counselling
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
