import React, { useEffect, useState } from 'react';
import Footer from './utility/footer';
import { 
  FaCode, 
  FaServer, 
  FaPaintBrush, 
  FaBullhorn, 
  FaDollarSign, 
  FaClock, 
  FaChartLine, 
  FaLightbulb, 
  FaArrowRight, 
  FaQuoteLeft, 
  FaUserTie 
} from 'react-icons/fa';

const Careers: React.FC = () => {
  // State to trigger CSS transitions on mount
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Utility function to conditionally add animation classes
  const animateClass = (delayClass: string) =>
    `${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'} ${delayClass}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="text-xl mt-2">
            Explore exciting career opportunities with Linked Matrix
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Current Openings */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Current Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Job Card 1 - Frontend Developer */}
            <div
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 ${animateClass('delay-150')}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaCode size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Frontend Developer
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Work on modern web technologies to create stunning user interfaces for our platform.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Apply Now <FaArrowRight className="inline ml-2" />
              </button>
            </div>

            {/* Job Card 2 - Backend Developer */}
            <div
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 ${animateClass('delay-300')}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaServer size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Backend Developer
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Develop robust APIs and scalable backend services that power our platform.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Apply Now <FaArrowRight className="inline ml-2" />
              </button>
            </div>

            {/* Job Card 3 - UX/UI Designer */}
            <div
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 ${animateClass('delay-450')}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaPaintBrush size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">
                  UX/UI Designer
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Design intuitive and engaging user experiences for our alumni and student interactions.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Apply Now <FaArrowRight className="inline ml-2" />
              </button>
            </div>

            {/* Job Card 4 - Marketing Specialist */}
            <div
              className={`bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 ${animateClass('delay-600')}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaBullhorn size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600">
                  Marketing Specialist
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Drive the growth of our platform through creative marketing strategies and campaigns.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Apply Now <FaArrowRight className="inline ml-2" />
              </button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section
          className={`bg-white shadow-lg rounded-lg p-8 transform transition-all duration-500 ${animateClass('delay-750')}`}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-2">
                <FaDollarSign size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                Competitive Salary
              </h3>
              <p className="text-gray-600">
                We offer industry-leading salaries that reward your skills and experience.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-2">
                <FaClock size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                Flexible Work Hours
              </h3>
              <p className="text-gray-600">
                Enjoy a flexible schedule that promotes a healthy work-life balance.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-2">
                <FaChartLine size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Take advantage of professional development opportunities and continuous learning.
              </p>
            </div>
            <div className="p-4 flex flex-col items-center text-center">
              <div className="bg-blue-100 p-3 rounded-full mb-2">
                <FaLightbulb size={24} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                Innovative Environment
              </h3>
              <p className="text-gray-600">
                Join a team that thrives on creativity, innovation, and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section
          className={`bg-blue-50 shadow-lg rounded-lg p-8 transform transition-all duration-500 ${animateClass('delay-900')}`}
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-6">
            Our Culture
          </h2>
          <p className="text-gray-700 mb-4">
            At Linked Matrix, our culture is built on collaboration, innovation, and continuous learning. We believe in nurturing a supportive environment where every voice is heard.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Open communication and teamwork</li>
            <li>Inclusive and diverse workplace</li>
            <li>Opportunities for creative expression</li>
            <li>Commitment to professional growth</li>
          </ul>
        </section>

        {/* Employee Testimonials */}
        <section
          className={`transform transition-all duration-500 ${animateClass('delay-1050')}`}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Employee Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaQuoteLeft size={24} className="text-blue-600 mb-2" />
              <p className="italic text-gray-600 mb-4">
                "Working at Linked Matrix has been a transformative experience. The collaborative environment and innovative projects keep me motivated every day."
              </p>
              <p className="font-bold text-blue-600">
                - Alex Johnson, Frontend Developer
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaQuoteLeft size={24} className="text-blue-600 mb-2" />
              <p className="italic text-gray-600 mb-4">
                "The culture here is amazing. It feels like a community where your growth is as important as the company's success."
              </p>
              <p className="font-bold text-blue-600">
                - Maria Rodriguez, UX/UI Designer
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action for Future Opportunities */}
        <section
          className={`bg-blue-100 rounded-lg p-8 text-center transform transition-all duration-500 ${animateClass('delay-1200')}`}
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">
            Don't See a Role That Fits?
          </h2>
          <p className="text-blue-700 mb-6">
            We’re always looking for passionate individuals. Reach out to us with your resume, and we'll keep you in mind for future opportunities!
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
            <FaUserTie className="inline mr-2" /> Submit Your Resume
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
