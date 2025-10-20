"use client";

import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaMedal, FaTrophy, FaStar, FaCrown } from "react-icons/fa";

const awards = [
  {
    title: "Best Educational Institute 2024",
    organization: "Education Excellence Awards",
    year: "2024",
    icon: <FaTrophy />,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    title: "Top IIT-JEE Coaching Center",
    organization: "Academic Achievement Board",
    year: "2023-24",
    icon: <FaCrown />,
    color: "from-purple-400 to-purple-600"
  },
  {
    title: "Excellence in NEET Preparation",
    organization: "Medical Education Council",
    year: "2024",
    icon: <FaMedal />,
    color: "from-green-400 to-green-600"
  },
  {
    title: "Student Success Recognition",
    organization: "Educational Leadership Forum",
    year: "2024",
    icon: <FaAward />,
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "Quality Education Certificate",
    organization: "National Education Board",
    year: "2023",
    icon: <FaCertificate />,
    color: "from-red-400 to-red-600"
  },
  {
    title: "5-Star Teaching Excellence",
    organization: "Academic Review Board",
    year: "2024",
    icon: <FaStar />,
    color: "from-orange-400 to-orange-600"
  }
];

const certifications = [
  "ISO 9001:2015 Certified",
  "NEET Preparation Accredited",
  "IIT-JEE Training Certified",
  "Board Exam Excellence Certified",
  "Olympiad Training Authorized",
  "Quality Education Standard"
];

export const AwardsAndCertifications = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-DEFAULT bg-clip-text text-transparent mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognized excellence in education and student achievement
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${award.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Floating icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                  className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-full flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  {award.icon}
                </motion.div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">
                    {award.title}
                  </h3>
                  <p className="text-gray-600 mb-2 font-medium">
                    {award.organization}
                  </p>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {award.year}
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/patterns/dots.svg')] opacity-10"></div>
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
              className="text-6xl mb-6"
            >
              🏆
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Certified Excellence
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-light rounded-full animate-pulse"></div>
                    <span className="font-medium">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
