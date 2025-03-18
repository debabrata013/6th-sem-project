import React, { useEffect, useState } from 'react';
import { motion,useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebook, FaTwitter, FaLinkedin, FaRegHandshake, FaUserGraduate, FaUniversity, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMailOpen, IoPeopleCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import CountUp from "react-countup";
import Foot from './utility/footer';
import AboutUs from './aboutUs';
// Define props for animated components


const stats = [
  { number: 250, label: "Partner Universities", icon: <FaUniversity /> },
  { number: 15000, label: "Active Students", icon: <FaUserGraduate /> },
  { number: 35000, label: "Alumni Connected", icon: <IoPeopleCircle /> },
  { number: 500, label: "Career Events", icon: <FaCalendarAlt /> }
];

const GlobalNetworkImpact = () => {
  const { ref, inView } = useInView({ triggerOnce: true }); // ✅ Proper use of useInView

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate((prev) => !prev); // ✅ Toggle animation when in view
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-16">Global Network Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-blue-600 text-4xl mb-4">{stat.icon}</div>
              {animate && (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  separator=","
                  className="text-5xl font-bold text-blue-900 mb-2"
                />
              )}
              <p className="text-gray-600 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface AnimatedNumberProps {
  number: number;
  className?: string;
}

// Animated Text Component
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

// Animated Number Component
const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ number, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 },
      }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {number}
    </motion.span>
  );
};const FeatureCard: React.FC<{ title: string; icon: React.ReactNode; description: string }> = 
({ title, icon, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-blue-50 group"
  >
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full flex items-center justify-center mb-6">
        <span className="text-3xl text-blue-600 group-hover:text-white">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-blue-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const HowItWorks = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-blue-900 mb-16 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: <FaUserGraduate />, title: "Create Profile", text: "Set up your academic profile with verified credentials" },
          { icon: <FaUniversity />, title: "Connect Institution", text: "Link with your university's network securely" },
          { icon: <IoPeopleCircle />, title: "Start Networking", text: "Engage with peers, alumni, and faculty members" }
        ].map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center text-center p-6"
          >
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.text}</p>
            <span className="mt-4 text-blue-600 font-bold text-xl">0{index + 1}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const EventsSection = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaCalendarAlt className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Alumni Career Fair 2025</p>
                  <p className="text-sm text-gray-500">June 15, 2025 | Virtual Event</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaMapMarkerAlt />
                <span>Online Platform</span>
              </div>
              <button className="mt-4 w-full bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-900 px-4 py-2 rounded-lg transition-colors">
                Register Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
    <div className="container mx-auto text-center">
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        className="bg-white rounded-2xl p-8 shadow-2xl mx-4"
      >
        <div className="max-w-2xl mx-auto">
          <IoMailOpen className="text-5xl text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6">Get updates on alumni events, career opportunities, and platform features</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);



const Testimonial: React.FC<{ name: string; role: string; testimonial: string }> = ({ name, role, testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
          {name[0]}
        </div>
        <div>
          <p className="font-bold text-blue-900">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic mt-4 border-l-4 border-blue-500 pl-4">"{testimonial}"</p>
    </motion.div>
  );
};

// Contact Form Component
import { FaUser, FaEnvelope, FaRegCommentDots } from 'react-icons/fa';
import axios from 'axios';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/submit-feedback', formData);
      alert('Feedback submitted successfully');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-2xl border border-gray-200 w-full max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
        Contact Us
      </h3>
      <div className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
            <FaUser />
          </span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>
        {/* Email Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-500">
            <FaEnvelope />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          />
        </div>
        {/* Message Textarea */}
        <div className="relative">
          <span className="absolute top-3 left-0 flex items-center pl-3 text-blue-500">
            <FaRegCommentDots />
          </span>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

// export default ContactForm;

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="text-xl font-bold mb-4">LinkedMatrix</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Bridging academic communities worldwide through innovative networking solutions.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['About Us', 'Careers', 'Blog', 'Help Center'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-300 hover:text-blue-200 text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <li key={link}>
                <a href="#" className="text-gray-300 hover:text-blue-200 text-sm">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
              <a key={index} href="#" className="text-2xl hover:text-blue-200 transition-colors">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-8 border-t border-blue-800 text-center">
        <p className="text-sm text-gray-400">
          © 2025 LinkedMatrix. All rights reserved. | Designed with ❤️ for better education
        </p>
      </div>
    </footer>
  );
};

// Landing Page Component
const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinNowClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Enhanced Hero Section */}
      <section
        className="
          relative 
          h-screen 
          flex flex-col 
          justify-center 
          items-center 
          text-center 
          overflow-hidden 
          bg-gradient-to-r from-blue-500 to-purple-300 
          bg-[length:600%_600%] 
          animate-gradient
        "
      >
        {/* SVG overlay with a subtle pulse animation */}
        <div
          className="
            absolute inset-0 
            opacity-20 
            bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTIwMCA2MDAiPjxwYXRoIGQ9Ik0xMjAwIDBMMCA2MDAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] 
            animate-pulse
          "
        ></div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-300 to-purple-100 bg-clip-text text-transparent">
              LinkedMatrix
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            The Next Generation Platform Connecting Universities, Students, and Alumni Worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                bg-purple-600 
                text-white 
                px-8 py-4 
                rounded-xl 
                shadow-xl 
                hover:bg-purple-700 
                transition-all 
                text-lg 
                font-semibold 
                flex 
                items-center 
                gap-2
              "
              onClick={handleJoinNowClick}
            >
              <FaRegHandshake className="text-xl" />
              Join Now
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Stats Section */}
      <GlobalNetworkImpact />

      {/* Enhanced Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-16 text-center">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaUniversity />}
              title="University Hub"
              description="Comprehensive university profiles with verified student and alumni networks"
            />
            <FeatureCard
              icon={<FaUserGraduate />}
              title="Career Services"
              description="Exclusive job opportunities, mentorship programs, and career counseling"
            />
            <FeatureCard
              icon={<FaRegHandshake />}
              title="Alumni Networking"
              description="Connect with successful alumni across industries and geographies"
            />
          </div>
        </div>
      </section>

      <HowItWorks />
      <EventsSection />
      <NewsletterSection />

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              name="John Doe"
              role="Alumni, University of XYZ"
              testimonial="Linked Matrix helped me reconnect with my alma mater and find amazing opportunities."
            />
            <Testimonial
              name="Jane Smith"
              role="Student, ABC University"
              testimonial="The platform is so easy to use, and I love the networking features!"
            />
            <Testimonial
              name="Alice Johnson"
              role="University Administrator"
              testimonial="A fantastic tool for managing alumni relations and student engagement."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer Section */}
    <Foot/>
    </div>
  );
};

export default LandingPage;

function useRef(arg0: null) {
  throw new Error('Function not implemented.');
}
