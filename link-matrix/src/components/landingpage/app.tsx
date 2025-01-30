import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define props for animated components
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
};

// Testimonial Component
const Testimonial: React.FC<{ name: string; role: string; testimonial: string }> = ({ name, role, testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <p className="text-gray-700 italic">"{testimonial}"</p>
      <div className="mt-4">
        <p className="font-bold text-blue-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
};

// Contact Form Component
const ContactForm: React.FC = () => {
  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  );
};

// Footer Component
const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2023 Linked Matrix. All rights reserved.</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-blue-300 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

// Landing Page Component
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-blue-900 mb-4"
        >
          Welcome to <AnimatedText text="Linked Matrix" className="text-blue-600" />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl text-gray-700 mb-8"
        >
          Connecting Universities, Students, and Alumni
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Get Started
        </motion.button>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <AnimatedNumber number={100} className="text-6xl font-bold text-blue-600" />
              <p className="text-gray-700">Universities Registered</p>
            </div>
            <div>
              <AnimatedNumber number={5000} className="text-6xl font-bold text-blue-600" />
              <p className="text-gray-700">Active Students</p>
            </div>
            <div>
              <AnimatedNumber number={10000} className="text-6xl font-bold text-blue-600" />
              <p className="text-gray-700">Alumni Connected</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['University Registration', 'Student Interaction', 'Alumni Networking'].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{feature}</h3>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
      <Footer />
    </div>
  );
};

export default LandingPage;