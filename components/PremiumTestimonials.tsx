"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from "react-icons/fa";
import { getAssetPath, getBackgroundImageUrl } from "@/lib/utils";

interface TestimonialProps {
  name: string;
  course: string;
  rating: number;
  testimonial: string;
  image?: string;
  achievement?: string;
  year?: number;
}

const premiumTestimonials: TestimonialProps[] = [
  {
    name: "Soumil Tiwari",
    course: "Class 10 Board (CBSE)",
    rating: 5,
    testimonial: "NEEV's foundation course helped me build strong basics. The teachers are very supportive and make learning enjoyable. Scored 98.2% in boards!",
    image: getAssetPath("/images/toppers/default-student.svg"),
    achievement: "School Topper",
    year: 2024
  },
  {
    name: "Harshita Tiwari",
    course: "Class 10 Board (CBSE)",
    rating: 5,
    testimonial: "Thanks to NEEV's systematic approach, I could score excellent marks. The regular tests helped me stay prepared throughout the year.",
    image: getAssetPath("/images/toppers/default-student.svg"),
    achievement: "District Rank 5",
    year: 2024
  },
  {
    name: "Khushi Singh",
    course: "Class 10 Board (CBSE)",
    rating: 5,
    testimonial: "NEEV provided the perfect environment for learning. The faculty is knowledgeable and always ready to help with doubts.",
    image: getAssetPath("/images/toppers/default-student.svg"),
    achievement: "95.8% Merit",
    year: 2024
  },
  {
    name: "Ankit Sharma",
    course: "Class 12 Board (CBSE)",
    rating: 5,
    testimonial: "NEEV's focused preparation strategy helped me secure excellent marks in Class 12 boards. The teachers make concepts very clear.",
    image: getAssetPath("/images/toppers/default-student.svg"),
    achievement: "School Topper",
    year: 2024
  },
  {
    name: "Riya Chaudhary",
    course: "Class 10 Board (CBSE)",
    rating: 5,
    testimonial: "The personalized attention at NEEV helped me overcome my weak areas and build confidence. Mathematics became much easier with proper guidance.",
    image: getAssetPath("/images/toppers/default-student.svg"),
    achievement: "Merit List",
    year: 2024
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.2 }}
        >
          <FaStar 
            className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export const PremiumTestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % premiumTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % premiumTestimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + premiumTestimonials.length) % premiumTestimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: getBackgroundImageUrl('/images/patterns/dots.svg')}}></div>
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20"
      ></motion.div>
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear"
        }}
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20"
      ></motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 via-primary-700 to-accent-DEFAULT bg-clip-text text-transparent mb-6">
            Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who achieved their dreams with NEEV
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main testimonial card */}
          <div className="relative h-[500px] md:h-[400px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 h-full border border-gray-100 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-DEFAULT/5"></div>
                  
                  <div className="relative z-10 grid md:grid-cols-3 gap-8 h-full items-center">
                    {/* Student photo and info */}
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="relative mx-auto mb-6"
                      >
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-white relative">
                          {premiumTestimonials[currentIndex].image ? (
                            <img
                              src={premiumTestimonials[currentIndex].image}
                              alt={premiumTestimonials[currentIndex].name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-4xl font-bold">
                              {premiumTestimonials[currentIndex].name.charAt(0)}
                            </div>
                          )}
                        </div>
                        {/* Achievement badge */}
                        {premiumTestimonials[currentIndex].achievement && (
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                            className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg"
                          >
                            {premiumTestimonials[currentIndex].achievement}
                          </motion.div>
                        )}
                      </motion.div>

                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-gray-900 mb-2"
                      >
                        {premiumTestimonials[currentIndex].name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-primary-600 font-semibold"
                      >
                        {premiumTestimonials[currentIndex].course}
                      </motion.p>
                      {premiumTestimonials[currentIndex].year && (
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-gray-500 text-sm"
                        >
                          Batch {premiumTestimonials[currentIndex].year}
                        </motion.p>
                      )}
                    </div>

                    {/* Testimonial content */}
                    <div className="md:col-span-2 relative">
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -top-4 -left-4 text-6xl text-primary-200"
                      >
                        <FaQuoteLeft />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <StarRating rating={premiumTestimonials[currentIndex].rating} />
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed italic mb-6 relative z-10"
                      >
                        {premiumTestimonials[currentIndex].testimonial}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={goToPrev}
              className="w-12 h-12 bg-white hover:bg-primary-50 rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-700 transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {premiumTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="w-12 h-12 bg-white hover:bg-primary-50 rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-700 transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight />
            </button>

            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="w-12 h-12 bg-white hover:bg-primary-50 rounded-full shadow-lg flex items-center justify-center text-primary-600 hover:text-primary-700 transition-all duration-300 hover:scale-110 ml-4"
            >
              {isAutoPlaying ? <FaPause /> : <FaPlay />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
