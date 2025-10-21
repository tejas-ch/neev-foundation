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
  FaRocket,
  FaStar,
  FaChartLine,
  FaCrown,
  FaFire
} from "react-icons/fa";
import { StatCard, AnimatedProgressBar } from "@/components/AnimatedComponents";
import { PremiumTestimonialsCarousel } from "@/components/PremiumTestimonials";
import { AwardsAndCertifications } from "@/components/AwardsAndCertifications";
import siteConfig from "@/data/siteConfig.json";
import courses from "@/data/courses.json";
import topPerformers from "@/data/topPerformers.json";
import testimonials from "@/data/testimonials.json";
import { processImageData, getBackgroundImageUrl, getAssetPath } from "@/lib/utils";

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
  // Process image data at render time to ensure basePath is applied
  const recentToppers = topPerformers.slice(0, 6).map(topper => ({
    ...topper,
    image: getAssetPath(topper.image)
  }));

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-primary-800 to-indigo-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/grid.svg')] opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent-DEFAULT rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
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
                <Link href="/contact" className="btn-primary bg-gradient-to-r from-accent-DEFAULT to-accent-dark hover:from-accent-dark hover:to-accent-DEFAULT shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  {siteConfig.hero.ctaPrimary}
                </Link>
                <Link href="/courses" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300">
                  {siteConfig.hero.ctaSecondary}
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-accent-DEFAULT rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipODkIHe2idT_SPiR5KxjczPYp9rM6rkHtBTr3rT=s680-w680-h510-rw"
                  alt="NEEV Foundation"
                  className="relative rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="bg-gradient-to-r from-slate-50 via-white to-blue-50 py-16 shadow-2xl -mt-8 relative z-20 border-t border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 to-accent-light/30"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-primary-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Our Success Story
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Transforming dreams into reality with proven results and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="150+" 
              label="Students Taught" 
              icon={<FaUsers />} 
              index={0}
              gradient="from-blue-500 to-blue-700"
            />
            <StatCard 
              number="92%" 
              label="Success Rate" 
              icon={<FaTrophy />} 
              index={1}
              gradient="from-green-500 to-green-700"
            />
            <StatCard 
              number="25+" 
              label="Top Performers" 
              icon={<FaCrown />} 
              index={2}
              gradient="from-purple-500 to-purple-700"
            />
            <StatCard 
              number="5+" 
              label="Expert Faculty" 
              icon={<FaChalkboardTeacher />} 
              index={3}
              gradient="from-orange-500 to-orange-700"
            />
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
          >
            <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary-600 to-accent-DEFAULT bg-clip-text text-transparent">
              Achievement Metrics 2024-25
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <AnimatedProgressBar percentage={85} label="Board Exam Excellence" color="bg-gradient-to-r from-blue-500 to-blue-600" delay={200} />
                <AnimatedProgressBar percentage={78} label="Competitive Exam Success" color="bg-gradient-to-r from-green-500 to-green-600" delay={400} />
                <AnimatedProgressBar percentage={92} label="Foundation Program Success" color="bg-gradient-to-r from-purple-500 to-purple-600" delay={600} />
              </div>
              <div>
                <AnimatedProgressBar percentage={88} label="Student Improvement Rate" color="bg-gradient-to-r from-orange-500 to-orange-600" delay={800} />
                <AnimatedProgressBar percentage={95} label="Student Satisfaction" color="bg-gradient-to-r from-red-500 to-red-600" delay={1000} />
                <AnimatedProgressBar percentage={90} label="Parent Satisfaction" color="bg-gradient-to-r from-pink-500 to-pink-600" delay={1200} />
              </div>
            </div>
          </motion.div>
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
                About <span className="gradient-text">NEEV Foundation</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {siteConfig.about}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Born from the legacy of Pi Square Coaching Centre, NEEV Foundation has been serving
                the educational needs of Haldwani students for years. Our dedicated faculty of 5 experienced 
                teachers provides personalized attention in small batch sizes, ensuring every student gets 
                the support they need to excel in their academic journey.
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
                <p className="text-gray-600">5 dedicated teachers</p>
              </div>
              <div className="card p-6">
                <FaUsers className="text-5xl text-accent-DEFAULT mb-4" />
                <h3 className="text-xl font-bold mb-2">Small Batches</h3>
                <p className="text-gray-600">Max 25-35 students per batch</p>
              </div>
              <div className="card p-6">
                <FaAward className="text-5xl text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-gray-600">Excellent board results</p>
              </div>
              <div className="card p-6">
                <FaRocket className="text-5xl text-accent-DEFAULT mb-4" />
                <h3 className="text-xl font-bold mb-2">Personal Care</h3>
                <p className="text-gray-600">Individual attention</p>
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

      {/* Premium Testimonials Carousel */}
      <PremiumTestimonialsCarousel />

      {/* Awards and Certifications */}
      <AwardsAndCertifications />

      {/* Premium CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: getBackgroundImageUrl('/images/patterns/dots.svg')}}></div>
        
        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-16 h-16 bg-accent-light/20 rounded-full"
        ></motion.div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-8xl mb-6"
            >
              🚀
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent">
              Transform Your Academic Future Today
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed font-medium">
              Join the success story of hundreds of students who turned their dreams into achievements with NEEV's proven excellence
            </p>

            {/* Special offer banner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-accent-DEFAULT to-accent-dark rounded-2xl p-6 mb-8 border-2 border-accent-light/30"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl">🎯</span>
                <span className="text-2xl font-bold">Exclusive Opportunity</span>
                <span className="text-3xl">🚀</span>
              </div>
              <p className="text-lg mb-2">Get <span className="text-3xl font-bold text-white">FREE</span> expert counselling & roadmap session</p>
              <p className="text-sm opacity-80">+ Free study materials worth ₹5,000</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="bg-accent-DEFAULT hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl hover:shadow-accent-DEFAULT/25 text-lg flex items-center gap-3"
                >
                  <span>🎯</span>
                  Enroll Now
                  <span>→</span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm text-lg flex items-center gap-3"
                >
                  <span>📞</span>
                  Book Free Counselling
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm opacity-80">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm opacity-80">Students Taught</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">92%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm opacity-80">Dedicated Faculty</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
