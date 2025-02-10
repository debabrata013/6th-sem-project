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
  FaMapMarkerAlt 
} from "react-icons/fa";
import { IoMailOpen, IoPeopleCircle } from "react-icons/io5";

const AboutUs: React.FC = () => {
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
            At Linked Matrix, we aim to build a vibrant platform where alumni and students can connect, share experiences, and forge professional networks. Our mission is to empower individuals through meaningful interactions and collaborative growth.
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
            We envision a future where every student benefits from the invaluable guidance of alumni, creating a seamless bridge between academic life and the professional world. Together, we strive to foster a community of lifelong learning and collaboration.
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
            {/* Connectivity */}
            <motion.div
              className="bg-gray-100 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="bg-blue-600 text-white rounded-full inline-flex p-4 mb-4 mx-auto">
                <FaLinkedin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connectivity</h3>
              <p className="text-gray-600">
                Building bridges between alumni and students for lasting relationships.
              </p>
            </motion.div>

            {/* Growth */}
            <motion.div
              className="bg-gray-100 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="bg-blue-600 text-white rounded-full inline-flex p-4 mb-4 mx-auto">
                <FaUserGraduate size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">
                Empowering personal and professional development at every stage.
              </p>
            </motion.div>

            {/* Integrity */}
            <motion.div
              className="bg-gray-100 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="bg-blue-600 text-white rounded-full inline-flex p-4 mb-4 mx-auto">
                <FaRegHandshake size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                Upholding trust, transparency, and ethical standards in all our endeavors.
              </p>
            </motion.div>

            {/* Innovation */}
            <motion.div
              className="bg-gray-100 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="bg-blue-600 text-white rounded-full inline-flex p-4 mb-4 mx-auto">
                <FaCalendarAlt size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Fostering creative problem-solving and forward-thinking solutions.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
