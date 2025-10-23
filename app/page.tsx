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
      {/* Premium Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Soft Gradient Orbs */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl opacity-10 animate-pulse-soft"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-navy-700 rounded-full filter blur-3xl opacity-15"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-sm font-medium text-gold-200 mb-6"
              >
                <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
                Leading Coaching Institute in Haldwani
              </motion.div>
              
              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">Building Strong</span>
                <span className="block gradient-text-gold mt-2">Foundations</span>
              </h1>
              
              {/* Subheading */}
              <p className="text-xl md:text-2xl mb-8 text-white opacity-90 leading-relaxed max-w-2xl">
                Empowering students with quality education, expert guidance, and proven results for JEE, NEET, and Board Excellence.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2 group">
                  <span>Enroll Now</span>
                  <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link href="/courses" className="btn-outline inline-flex items-center justify-center gap-2 group hover:text-white">
                  <span>Explore Courses</span>
                  <FaChartLine className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
              >
                <div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">92%</div>
                  <div className="text-sm text-gray-300">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">150+</div>
                  <div className="text-sm text-gray-300">Students</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">25+</div>
                  <div className="text-sm text-gray-300">Toppers</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Subtle Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-gold-500/15 to-navy-700/15 rounded-3xl blur-2xl"></div>
                
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={getAssetPath("/images/branding/physical_centre.jpg")}
                    alt="NEEV Foundation Coaching Centre"
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  
                  {/* Floating Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center">
                        <FaMedal className="text-navy-950 text-xl" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-navy-950">5+ Years</div>
                        <div className="text-sm text-gray-600">Academic Excellence</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="relative bg-white py-20 shadow-xl -mt-10 z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gold-50/20"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-4"
            >
              Our Impact
            </motion.span>
            <h2 className="section-title gradient-text-navy">
              Building Success Stories
            </h2>
            <p className="section-subtitle">
              Empowering students with quality education and proven results that speak for themselves
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="150+" 
              label="Students Taught" 
              icon={<FaUsers />} 
              index={0}
              gradient="from-navy-800 to-navy-950"
            />
            <StatCard 
              number="92%" 
              label="Success Rate" 
              icon={<FaTrophy />} 
              index={1}
              gradient="from-gold-500 to-gold-600"
            />
            <StatCard 
              number="25+" 
              label="Top Performers" 
              icon={<FaCrown />} 
              index={2}
              gradient="from-navy-900 to-navy-950"
            />
            <StatCard 
              number="5+" 
              label="Expert Faculty" 
              icon={<FaChalkboardTeacher />} 
              index={3}
              gradient="from-gold-600 to-gold-700"
            />
          </div>

          {/* Success Metrics - Premium Design */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-20 card p-10"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-navy-950 mb-3">
                Achievement Metrics
                <span className="gradient-text-gold ml-3">2024-25</span>
              </h3>
              <p className="text-gray-700 text-lg">
                Measuring excellence through consistent performance across all programs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <AnimatedProgressBar percentage={85} label="Board Exam Excellence" color="bg-gradient-to-r from-navy-800 to-navy-950" delay={200} />
                <AnimatedProgressBar percentage={78} label="Competitive Exam Success" color="bg-gradient-to-r from-gold-500 to-gold-600" delay={400} />
                <AnimatedProgressBar percentage={92} label="Foundation Program Success" color="bg-gradient-to-r from-navy-900 to-navy-950" delay={600} />
              </div>
              <div className="space-y-6">
                <AnimatedProgressBar percentage={88} label="Student Improvement Rate" color="bg-gradient-to-r from-gold-600 to-gold-700" delay={800} />
                <AnimatedProgressBar percentage={95} label="Student Satisfaction" color="bg-gradient-to-r from-navy-800 to-navy-950" delay={1000} />
                <AnimatedProgressBar percentage={90} label="Parent Satisfaction" color="bg-gradient-to-r from-gold-500 to-gold-600" delay={1200} />
              </div>
            </div>
            
            {/* Call-to-Action within Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link href="/results" className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-gold-600 transition-colors group">
                <span>View Detailed Results</span>
                <FaChartLine className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gold-50/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300 rounded-full filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-300 rounded-full filter blur-3xl opacity-15"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-5 py-2 bg-navy-100 text-navy-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                About Us
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
                Building the
                <span className="block gradient-text-gold mt-1">Foundation of Success</span>
              </h2>
              
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                {siteConfig.about}
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                Born from the legacy of Pi Square Coaching Centre, NEEV Foundation has been serving
                the educational needs of Haldwani students for years. Our dedicated faculty of 5 experienced 
                teachers provides personalized attention in small batch sizes, ensuring every student gets 
                the support they need to excel in their academic journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary inline-flex items-center justify-center gap-2">
                  <span>Learn More About Us</span>
                  <FaRocket className="text-lg" />
                </Link>
                <Link href="/contact" className="btn-outline inline-flex items-center justify-center gap-2">
                  <span>Contact Us</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-navy-800 to-navy-950 rounded-xl flex items-center justify-center mb-4">
                  <FaChalkboardTeacher className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-950">Expert Faculty</h3>
                <p className="text-gray-700">5 dedicated teachers with years of experience</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-gold p-8"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <FaUsers className="text-3xl text-navy-950" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-950">Small Batches</h3>
                <p className="text-navy-800">Max 25-35 students for personal attention</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="card-gold p-8"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <FaAward className="text-3xl text-navy-950" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-950">Proven Results</h3>
                <p className="text-navy-800">Consistent excellence in board exams</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-navy-900 to-navy-950 rounded-xl flex items-center justify-center mb-4">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy-950">Personal Care</h3>
                <p className="text-gray-700">Individual attention for every student</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses - Premium Design */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-navy-200 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
              Our Programs
            </span>
            
            <h2 className="section-title">
              <span className="gradient-text-navy">Featured Courses</span>
            </h2>
            
            <p className="section-subtitle">
              Comprehensive programs designed to transform students into achievers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course, index) => {
              const Icon = iconMap[course.icon] || FaBookReader;
              const isGold = index % 2 === 1;
              
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${isGold ? 'card-gold' : 'card'} p-8 text-center group`}
                >
                  <div className={`w-20 h-20 ${isGold ? 'bg-white' : 'bg-gradient-to-br from-navy-800 to-navy-950'} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <Icon className={`text-4xl ${isGold ? 'text-navy-950' : 'text-white'}`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${isGold ? 'text-navy-950' : 'text-navy-950'}`}>
                    {course.title}
                  </h3>
                  
                  <p className={`text-sm font-semibold mb-4 ${isGold ? 'text-navy-800' : 'text-navy-700'}`}>
                    {course.subtitle}
                  </p>
                  
                  <p className={`text-sm mb-6 line-clamp-3 leading-relaxed ${isGold ? 'text-navy-800' : 'text-gray-700'}`}>
                    {course.description}
                  </p>
                  
                  <Link
                    href={`/courses#${course.id}`}
                    className={`inline-flex items-center gap-2 ${isGold ? 'text-navy-950 hover:text-gold-600' : 'text-navy-800 hover:text-gold-600'} font-semibold group`}
                  >
                    <span>View Details</span>
                    <FaChartLine className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/courses" className="btn-gold inline-flex items-center gap-2">
              <span>View All Courses</span>
              <FaRocket />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Top Performers Preview - Premium Design */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gold-50/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-navy-200 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200 rounded-full filter blur-3xl opacity-10"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
              Hall of Fame
            </span>
            
            <h2 className="section-title">
              Our <span className="gradient-text-gold">Star Achievers</span>
            </h2>
            
            <p className="section-subtitle">
              Celebrating excellence and inspiring the next generation of toppers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentToppers.map((topper, index) => (
              <motion.div
                key={topper.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={topper.image}
                      alt={topper.name}
                      className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center shadow-lg">
                      <FaStar className="text-navy-950 text-sm" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-950 mb-1">
                      {topper.name}
                    </h3>
                    <p className="text-gold-600 font-semibold mb-2 flex items-center gap-1">
                      <FaCrown className="text-sm" />
                      {topper.rank}
                    </p>
                    <p className="text-sm text-gray-700 font-medium">
                      {topper.exam} • {topper.year}
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-50 to-gold-50/30 rounded-xl p-4 border border-gold-200/30">
                  <p className="text-gray-800 text-sm italic leading-relaxed">
                    "{topper.testimonial}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/results" className="btn-primary inline-flex items-center gap-2">
              <span>View All Results</span>
              <FaTrophy />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Premium Testimonials Carousel */}
      <PremiumTestimonialsCarousel />

      {/* Awards and Certifications */}
      <AwardsAndCertifications />

      {/* Premium CTA Section */}
      <section className="py-28 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: getBackgroundImageUrl('/images/patterns/dots.svg')}}></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold-500 rounded-full filter blur-3xl opacity-15 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-navy-700 rounded-full filter blur-3xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gold-400 rounded-full filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, duration: 0.6 }}
              className="text-8xl mb-8"
            >
              🎯
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="block text-white">Transform Your</span>
              <span className="block gradient-text-gold mt-2">Academic Future Today</span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-10 text-white leading-relaxed font-light max-w-3xl mx-auto opacity-90">
              Join the success story of 150+ students who turned their dreams into achievements with NEEV's proven excellence
            </p>

            {/* Premium Offer Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-8 mb-10 shadow-2xl shimmer"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <FaFire className="text-4xl text-navy-950 animate-pulse" />
                <span className="text-3xl font-bold text-navy-950">Limited Time Offer</span>
                <FaRocket className="text-4xl text-navy-950 animate-pulse" />
              </div>
              <p className="text-2xl mb-3 font-bold text-navy-950">Get <span className="text-4xl">FREE</span> Expert Counselling Session</p>
              <p className="text-lg text-navy-800">+ Complimentary study materials worth ₹5,000</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              <Link 
                href="/contact" 
                className="btn-gold inline-flex items-center gap-3 text-lg group"
              >
                <FaRocket />
                <span>Enroll Now</span>
                <FaChartLine className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/contact" 
                className="btn-outline inline-flex items-center gap-3 text-lg hover:text-white"
              >
                <span>📞</span>
                <span>Book Free Counselling</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              <div className="glass-dark rounded-2xl p-6">
                <FaTrophy className="text-3xl text-gold-400 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">5+</div>
                <div className="text-sm text-gray-300">Years Excellence</div>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <FaUsers className="text-3xl text-gold-400 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">150+</div>
                <div className="text-sm text-gray-300">Students Taught</div>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <FaCrown className="text-3xl text-gold-400 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">92%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <FaChalkboardTeacher className="text-3xl text-gold-400 mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1">5</div>
                <div className="text-sm text-gray-300">Expert Faculty</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

