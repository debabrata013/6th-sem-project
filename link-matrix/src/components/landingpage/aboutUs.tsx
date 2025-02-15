import React from 'react';
import Footer from './utility/footer';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaRegHandshake,
  FaUserGraduate,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { IoMailOpen, IoPeopleCircle } from 'react-icons/io5';
import { TbTargetArrow } from 'react-icons/tb';
import { FiUsers } from 'react-icons/fi';

// Enhanced animated card component
interface AnimatedCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => (
  <motion.div
    className="bg-gradient-to-b from-blue-50 to-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

// Enhanced team member card
interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

const TeamMemberCard: React.FC<{ member: TeamMember; delay: number }> = ({
  member,
  delay,
}) => (
  <motion.div
    className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="relative overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
    </div>
    <div className="p-6 text-center -mt-8">
      <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-4">{member.role}</p>
      <div className="flex justify-center space-x-3">
        {Object.entries(member.socials || {}).map(([platform, link]) => (
          <a
            key={platform}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            aria-label={`${member.name}'s ${platform}`}
          >
            {platform === 'linkedin' && <FaLinkedin size={20} />}
            {platform === 'twitter' && <FaTwitter size={20} />}
            {platform === 'facebook' && <FaFacebook size={20} />}
            {platform === 'email' && <IoMailOpen size={20} />}
          </a>
        ))}
      </div>
    </div>
  </motion.div>
);

const AboutUs: React.FC = () => {
  const stats = [
    { value: '10K+', label: 'Active Members', icon: <FiUsers size={24} /> },
    { value: '50+', label: 'Universities', icon: <FaUniversity size={24} /> },
    { value: '100+', label: 'Events Hosted', icon: <FaCalendarAlt size={24} /> },
    { value: '95%', label: 'Success Rate', icon: <TbTargetArrow size={24} /> },
  ];

  const teamMembers: TeamMember[] = [
    {
      name: 'Alice Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      socials: {
        linkedin: '#',
        twitter: '#',
        email: '#',
      },
    },
    {
      name: 'Bob Smith',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
      socials: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Carol White',
      role: 'Head of Marketing',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
      socials: {
        linkedin: '#',
       twitter: '#',
      },
    },
    {
      name: 'David Lee',
      role: 'Community Manager',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
      socials: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Header */}
      <header className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6"
          >
            About Linked Matrix
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl max-w-2xl mx-auto"
          >
            Connecting generations of learners to build stronger professional futures
          </motion.p>
        </div>
      </header>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision Sections */}
      <main className="container mx-auto px-4 py-12 space-y-20">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-transparent" />
          </motion.div>
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <FaRegHandshake size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              We're dedicated to creating transformative connections between academic 
              communities and industry leaders. Our platform bridges the gap between 
              classroom learning and real-world success through mentorship, networking, 
              and shared experiences.
            </p>
          </motion.div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6 order-last md:order-first"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <IoPeopleCircle size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the global nexus for professional-academic collaboration, 
              where every student has access to a network of experienced mentors 
              and every alumnus can contribute to shaping future industry leaders.
            </p>
          </motion.div>
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
              alt="Vision"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-900/60 to-transparent" />
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-gray-800"
          >
            Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard
              icon={<FaLinkedin size={28} />}
              title="Collaborative Network"
              description="Fostering meaningful connections that transcend academic generations"
              delay={0.2}
            />
            <AnimatedCard
              icon={<FaUserGraduate size={28} />}
              title="Lifelong Learning"
              description="Continuous growth through shared knowledge and experiences"
              delay={0.4}
            />
            <AnimatedCard
              icon={<FaRegHandshake size={28} />}
              title="Integrity First"
              description="Building trust through transparency and ethical practices"
              delay={0.6}
            />
            <AnimatedCard
              icon={<FaCalendarAlt size={28} />}
              title="Innovation Driven"
              description="Pioneering new ways to connect academia and industry"
              delay={0.8}
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Meet the passionate professionals driving our mission forward
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                delay={index * 0.1}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold"
            >
              Ready to Join the Matrix?
            </motion.h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Connect with your academic community and unlock new opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="#"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <TbTargetArrow size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="border-2 border-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Schedule Demo</span>
                <FaCalendarAlt size={18} />
              </motion.a>
            </div>
            <div className="pt-8 border-t border-white/20 mt-12 flex justify-center space-x-6">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;