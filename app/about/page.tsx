"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye, FaHeart, FaStar, FaRocket, FaUserGraduate } from "react-icons/fa";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";
import PageHero from "@/components/common/PageHero";
import SectionHeader from "@/components/common/SectionHeader";
import IconCard from "@/components/common/IconCard";

export default function AboutPage() {
  // Memoize static data to avoid recreation on every render
  const values = useMemo(() => [
    {
      icon: <FaStar />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from teaching to student support."
    },
    {
      icon: <FaHeart />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty, transparency, and ethical conduct."
    },
    {
      icon: <FaRocket />,
      title: "Innovation",
      description: "We embrace modern teaching methods and technology to enhance learning."
    },
    {
      icon: <FaUserGraduate />,
      title: "Student-Centric",
      description: "Every decision we make is focused on student success and well-being."
    }
  ], []);

  const milestones = useMemo(() => [
    { year: "2016", event: "NEEV Foundation born from Pi Square Coaching" },
    { year: "2017", event: "First batch of 25 students" },
    { year: "2019", event: "Expanded to foundation & board programs" },
    { year: "2021", event: "Achieved 90%+ board exam success rate" },
    { year: "2023", event: "Introduced small batch methodology" },
    { year: "2024", event: "500+ students with excellent board results" }
  ], []);

  return (
    <div>
      {/* Hero Section */}
      <PageHero
        icon={
          <img 
            src={getAssetPath("/images/branding/neev-logo.jpg")}
            alt="NEEV Foundation Logo" 
            className="w-16 h-16 rounded-full object-cover"
          />
        }
        title="About NEEV – THE FOUNDATION"
        description="Building strong foundations for a brighter future since 2008"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-navy-100 rounded-full flex items-center justify-center mb-6">
                <FaBullseye className="text-4xl text-navy-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-navy-950">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To make quality education accessible to all learners by providing comprehensive coaching,
                personalized attention, and innovative teaching methods that empower students to achieve
                their academic goals and build successful careers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-6">
                <FaEye className="text-4xl text-gold-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the most trusted educational institution that transforms lives through excellence in
                education, nurtures future leaders, and contributes to building a knowledge-based society
                where every student can realize their full potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title={<>Our <span className="gradient-text-gold">Journey</span></>}
            subtitle="Over 15 years of excellence in education"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                NEEV – THE FOUNDATION emerged from Pi Square Coaching Centre in 2016 with a clear vision: to provide
                quality education that builds strong foundations for students in Haldwani. What started as a
                dedicated team with 25 students has grown into a trusted educational center in the community.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our name "NEEV" means "foundation" in Hindi, and that's exactly what we do – we build solid
                foundations in Mathematics, Science, and other subjects that help students excel in their board
                exams and competitive entrance tests. We focus on conceptual clarity and problem-solving skills.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, with a dedicated team of 5 experienced faculty members and personalized teaching approach,
                we continue to help students achieve excellent results in their academic journey while maintaining
                our core values of excellence, integrity, and student-centric approach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeader
            title={<>Our <span className="gradient-text-gold">Core Values</span></>}
            subtitle="The principles that guide everything we do"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <IconCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                index={index}
                className="text-center"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-navy-50 to-blue-50">
        <div className="container-custom">
          <SectionHeader
            title={<>Our <span className="gradient-text-gold">Milestones</span></>}
            subtitle="Key achievements in our journey"
          />

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-navy-900 to-navy-950 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-gray-800 text-lg font-semibold">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message (Optional) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="card p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img
                    src="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/483658866_657302566749225_1972531173840858552_n.jpg"
                    alt="Portrait of NEEV Foundation Director"
                    className="rounded-2xl shadow-xl w-full"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-2xl font-bold text-gray-900">Director's Message</h3>
                    <p className="text-navy-900 font-semibold">Founder & Director</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <span className="text-6xl text-navy-200">"</span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    Education is not just about clearing exams – it's about building character, nurturing
                    curiosity, and empowering young minds to dream big and achieve bigger. At NEEV, we are
                    committed to providing not just quality education, but also mentorship, guidance, and
                    support that shapes future leaders.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I am proud of every student who has walked through our doors and achieved their dreams.
                    Your success is our success, and we will continue to innovate and improve to serve you
                    better. Thank you for trusting NEEV with your future.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-navy-900 to-navy-950 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Be Part of Our Success Story
            </h2>
            <p className="text-xl mb-8 text-white opacity-90">
              Join hundreds of successful students who chose NEEV
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-gold-600 hover:bg-gold-700">
                Enroll Now
              </Link>
              <Link href="/courses" className="btn-secondary bg-white/10 hover:bg-white/20 text-white border-white">
                Explore Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



