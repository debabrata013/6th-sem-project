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
} from 'react-icons/fa';
import { IoMailOpen, IoPeopleCircle } from 'react-icons/io5';

// Reusable animated card for "Our Values" section
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
    className="bg-gray-100 rounded-lg p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="bg-blue-600 text-white rounded-full inline-flex p-4 mb-4 mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

// Types and component for team members
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

interface TeamMemberCardProps {
  member: TeamMember;
  delay: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, delay }) => (
  <motion.div
    className="bg-white rounded-lg shadow p-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold">{member.name}</h3>
    <p className="text-gray-600 mb-4">{member.role}</p>
    <div className="flex justify-center space-x-4">
      {member.socials?.facebook && (
        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 hover:text-blue-800" size={20} />
        </a>
      )}
      {member.socials?.twitter && (
        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 hover:text-blue-600" size={20} />
        </a>
      )}
      {member.socials?.linkedin && (
        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-700 hover:text-blue-900" size={20} />
        </a>
      )}
      {member.socials?.email && (
        <a href={`mailto:${member.socials.email}`} target="_blank" rel="noopener noreferrer">
          <IoMailOpen className="text-gray-600 hover:text-gray-800" size={20} />
        </a>
      )}
    </div>
  </motion.div>
);

const AboutUs: React.FC = () => {
  // Example team member data; replace image URLs and links as needed.
  const teamMembers: TeamMember[] = [
    {
      name: 'Alice Johnson',
      role: 'CEO & Founder',
      image: 'https://i.pravatar.cc/150?img=18',
      socials: {
        linkedin: 'https://linkedin.com/in/alicejohnson',
        twitter: 'https://twitter.com/alicejohnson',
        email: 'alice@example.com',
      },
    },
    {
      name: 'Bob Smith',
      role: 'CTO',
      image: 'https://i.pravatar.cc/150?img=52',
      socials: {
        linkedin: 'https://linkedin.com/in/bobsmith',
        twitter: 'https://twitter.com/bobsmith',
        email: 'bob@example.com',
      },
    },
    {
      name: 'Carol White',
      role: 'Head of Marketing',
      image: 'https://i.pravatar.cc/150?img=17',
      socials: {
        linkedin: 'https://linkedin.com/in/carolwhite',
        twitter: 'https://twitter.com/carolwhite',
        email: 'carol@example.com',
      },
    },
    {
      name: 'David Lee',
      role: 'Community Manager',
      image: 'https://i.pravatar.cc/150?img=65',
      socials: {
        linkedin: 'https://linkedin.com/in/davidlee',
        twitter: 'https://twitter.com/davidlee',
        email: 'david@example.com',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">About Linked Matrix</h1>
          <p className="text-2xl">Your Gateway to Alumni &amp; Student Connections</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Our Mission */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white rounded-full p-3 mr-3">
              <FaRegHandshake size={32} />
            </div>
            <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-700">
            At Linked Matrix, we aim to build a vibrant platform where alumni and
            students can connect, share experiences, and forge professional networks.
            Our mission is to empower individuals through meaningful interactions and
            collaborative growth.
          </p>
        </motion.section>

        {/* Our Vision */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 text-white rounded-full p-3 mr-3">
              <IoPeopleCircle size={32} />
            </div>
            <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2">
              Our Vision
            </h2>
          </div>
          <p className="text-gray-700">
            We envision a future where every student benefits from the invaluable
            guidance of alumni, creating a seamless bridge between academic life and
            the professional world. Together, we strive to foster a community of
            lifelong learning and collaboration.
          </p>
        </motion.section>

        {/* Our Values */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedCard
              icon={<FaLinkedin size={32} />}
              title="Connectivity"
              description="Building bridges between alumni and students for lasting relationships."
              delay={0.6}
            />
            <AnimatedCard
              icon={<FaUserGraduate size={32} />}
              title="Growth"
              description="Empowering personal and professional development at every stage."
              delay={0.7}
            />
            <AnimatedCard
              icon={<FaRegHandshake size={32} />}
              title="Integrity"
              description="Upholding trust, transparency, and ethical standards in all our endeavors."
              delay={0.8}
            />
            <AnimatedCard
              icon={<FaCalendarAlt size={32} />}
              title="Innovation"
              description="Fostering creative problem-solving and forward-thinking solutions."
              delay={0.9}
            />
          </div>
        </motion.section>

        {/* New Section: Meet Our Team */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-8 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                delay={1.1 + index * 0.1}
              />
            ))}
          </div>
        </motion.section>

        {/* New Section: Contact Us */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-2 mb-8 text-center">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <IoMailOpen size={32} className="text-blue-600 mr-3" />
              <span className="text-gray-700 text-lg">
                contact@linkedmatrix.com
              </span>
            </div>
            <div className="flex items-center mb-4 md:mb-0">
              <FaMapMarkerAlt size={32} className="text-blue-600 mr-3" />
              <span className="text-gray-700 text-lg">
                1234 University Ave, City, Country
              </span>
            </div>
            <div className="flex items-center">
              <FaUniversity size={32} className="text-blue-600 mr-3" />
              <span className="text-gray-700 text-lg">Linked Matrix HQ</span>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
