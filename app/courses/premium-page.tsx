"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  FaClock,
  FaFilter,
  FaStar,
  FaChartLine,
  FaArrowRight,
  FaPlay,
  FaDownload,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  targetAudience: string;
  syllabus: string[];
  features: string[];
  icon: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  price: string;
  originalPrice?: string;
  rating: number;
  studentsEnrolled: number;
  successRate: number;
  batch: string;
  instructor: string;
  startDate: string;
  mode: "Online" | "Offline" | "Hybrid";
}

const premiumCourses: Course[] = [
  {
    id: "foundation-course",
    title: "Foundation Course",
    subtitle: "Strong Basics for Future Success",
    description: "Comprehensive foundation building program for Classes 6-10 with emphasis on conceptual clarity and problem-solving skills.",
    duration: "1 Year",
    targetAudience: "Classes 6-10",
    syllabus: ["Mathematics Fundamentals", "Science Concepts", "English Communication", "Logical Reasoning", "Study Skills"],
    features: ["Small Batch Size", "Regular Assessments", "Parent-Teacher Meetings", "Study Materials Included"],
    icon: "FaBookReader",
    difficulty: "Beginner",
    price: "₹24,000",
    originalPrice: "₹30,000",
    rating: 4.8,
    studentsEnrolled: 1250,
    successRate: 95,
    batch: "April 2025",
    instructor: "Expert Faculty Team",
    startDate: "15 April 2025",
    mode: "Hybrid"
  },
  {
    id: "jee-preparation",
    title: "JEE Preparation",
    subtitle: "Engineering Entrance Success",
    description: "Comprehensive 2-year program designed to crack JEE Main & Advanced with proven methodology and expert guidance.",
    duration: "2 Years",
    targetAudience: "Classes 11-12",
    syllabus: ["Physics Mastery", "Chemistry Excellence", "Mathematics Perfection", "Problem Solving", "Mock Tests"],
    features: ["Expert Faculty", "Weekly Tests", "Doubt Clearing Sessions", "Online Test Series"],
    icon: "FaGraduationCap",
    difficulty: "Advanced",
    price: "₹85,000",
    originalPrice: "₹1,00,000",
    rating: 4.9,
    studentsEnrolled: 850,
    successRate: 92,
    batch: "May 2025",
    instructor: "Expert Faculty",
    startDate: "1 May 2025",
    mode: "Hybrid"
  },
  {
    id: "neet-preparation",
    title: "NEET Preparation",
    subtitle: "Medical Dreams Made Reality",
    description: "Intensive NEET preparation program with focus on Biology, Chemistry, and Physics for medical entrance success.",
    duration: "2 Years",
    targetAudience: "Classes 11-12",
    syllabus: ["Biology Mastery", "Chemistry Concepts", "Physics for NEET", "Previous Year Analysis", "Mock Tests"],
    features: ["Medical Faculty", "Clinical Examples", "Lab Sessions", "Medical Entrance Prep"],
    icon: "FaMicroscope",
    difficulty: "Advanced",
    price: "₹75,000",
    originalPrice: "₹90,000",
    rating: 4.8,
    studentsEnrolled: 920,
    successRate: 89,
    batch: "June 2025",
    instructor: "Medical Experts",
    startDate: "15 June 2025",
    mode: "Offline"
  },
  {
    id: "board-excellence",
    title: "Board Excellence",
    subtitle: "Score High in Board Exams",
    description: "Focused preparation for CBSE/State board exams with emphasis on scoring techniques and exam strategies.",
    duration: "1 Year",
    targetAudience: "Classes 10, 12",
    syllabus: ["Board Syllabus Coverage", "Previous Year Papers", "Exam Strategies", "Time Management", "Revision Techniques"],
    features: ["Board Expert Faculty", "Sample Papers", "Revision Classes", "Exam Tips"],
    icon: "FaTrophy",
    difficulty: "Intermediate",
    price: "₹35,000",
    originalPrice: "₹45,000",
    rating: 4.7,
    studentsEnrolled: 1500,
    successRate: 96,
    batch: "March 2025",
    instructor: "Board Specialists",
    startDate: "10 March 2025",
    mode: "Online"
  }
];

const iconMap: any = {
  FaBookReader,
  FaGraduationCap,
  FaMicroscope,
  FaTrophy,
  FaMedal,
  FaBolt,
};

const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = iconMap[course.icon] || FaBookReader;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getModeColor = (mode: string) => {
    switch (mode) {
      case "Online": return "bg-blue-100 text-blue-800";
      case "Offline": return "bg-purple-100 text-purple-800";
      case "Hybrid": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 relative">
        {/* Discount badge */}
        {course.originalPrice && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
            Save {Math.round((1 - parseInt(course.price.replace(/[^0-9]/g, '')) / parseInt(course.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
          </div>
        )}

        {/* Header */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
          
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Icon className="text-3xl text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.title}</h3>
                <p className="text-primary-600 font-semibold">{course.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(course.difficulty)}`}>
              {course.difficulty}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getModeColor(course.mode)}`}>
              {course.mode}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-800">
              {course.duration}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-gray-700 mb-6 leading-relaxed">{course.description}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`text-sm ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">{course.rating} Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-primary-600">{course.studentsEnrolled}+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{course.successRate}%</div>
              <div className="text-sm text-gray-600">Success</div>
            </div>
          </div>

          {/* Key Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-gray-600">
              <FaUsers className="text-primary-600" />
              <span>{course.targetAudience}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FaCalendarAlt className="text-primary-600" />
              <span>Starts: {course.startDate}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FaChartLine className="text-primary-600" />
              <span>Instructor: {course.instructor}</span>
            </div>
          </div>

          {/* Expandable content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6 overflow-hidden"
              >
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Course Highlights</h4>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Syllabus Coverage</h5>
                      <ul className="space-y-1">
                        {course.syllabus.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="text-green-500 text-xs" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-2">Special Features</h5>
                      <ul className="space-y-1">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <FaCheckCircle className="text-blue-500 text-xs" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pricing */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-primary-600">{course.price}</span>
              {course.originalPrice && (
                <span className="text-lg text-gray-500 line-through">{course.originalPrice}</span>
              )}
            </div>
            <span className="text-sm text-gray-600">per year</span>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-300 text-gray-700 font-medium"
            >
              <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 px-4 bg-primary-100 hover:bg-primary-200 rounded-xl transition-colors duration-300 text-primary-700 font-medium">
                <FaPlay />
                Demo Class
              </button>
              <button className="flex items-center justify-center gap-2 py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-300 text-gray-700 font-medium">
                <FaDownload />
                Brochure
              </button>
            </div>

            <Link href="/contact" className="block">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Enroll Now
                <FaArrowRight />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PremiumCoursesPage() {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Popular");
  
  const filteredCourses = premiumCourses.filter(course => {
    if (filter === "All") return true;
    return course.difficulty === filter;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "Price": return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
      case "Rating": return b.rating - a.rating;
      case "Students": return b.studentsEnrolled - a.studentsEnrolled;
      default: return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-6xl mb-6"
            >
              📚
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent">
              Premium Courses
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Comprehensive programs designed to build strong foundations and achieve excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">✨ Expert Faculty</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">🎯 Proven Results</span>
              <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">🏆 Top Rankings</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-lg">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaFilter className="text-primary-600" />
              <span className="font-semibold text-gray-700">Filter by:</span>
              <div className="flex gap-2">
                {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setFilter(level)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      filter === level 
                        ? 'bg-primary-600 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="Popular">Popular</option>
                <option value="Price">Price</option>
                <option value="Rating">Rating</option>
                <option value="Students">Students</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-DEFAULT bg-clip-text text-transparent mb-6">
              Choose Your Path to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each course is carefully designed with industry experts to ensure maximum learning outcomes
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {sortedCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
