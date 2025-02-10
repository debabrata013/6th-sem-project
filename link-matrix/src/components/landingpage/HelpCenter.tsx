import React, { useEffect, useState } from 'react';
import Footer from './utility/footer';
import {
  FaQuestionCircle,
  FaSearch,
  FaUserCircle,
  FaMoneyBillWave,
  FaTools,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaBook,
  FaWrench,
} from 'react-icons/fa';

const HelpCenter: React.FC = () => {
  // State used to trigger mount animations
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper function to generate animation classes with a delay
  const getAnimationClasses = (delay: string) =>
    `transition-all duration-500 ${
      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
    } ${delay}`;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          {/* Animated Logo */}
          <div className="flex justify-center items-center mb-4">
            <FaQuestionCircle size={64} className="mr-3 animate-bounce" />
            <h1 className="text-5xl font-bold">Help Center</h1>
          </div>
          <p className="text-xl">
            We're here to help you with any questions or issues you may have.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 space-y-12">
        {/* Search Help Section */}
        <section className={getAnimationClasses('delay-150')}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Search for Help
          </h2>
          <div className="flex justify-center">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full max-w-md pl-10 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </section>

        {/* Popular Topics Section */}
        <section className={getAnimationClasses('delay-300')}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Popular Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Topic Card 1: Account Issues */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4 mb-4">
                <FaUserCircle size={40} className="text-blue-600" />
                <h3 className="text-xl font-bold">Account Issues</h3>
              </div>
              <p className="text-gray-600">
                Learn how to manage your account settings, recover your password,
                and secure your profile.
              </p>
            </div>
            {/* Topic Card 2: Billing & Payments */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4 mb-4">
                <FaMoneyBillWave size={40} className="text-green-600" />
                <h3 className="text-xl font-bold">Billing & Payments</h3>
              </div>
              <p className="text-gray-600">
                Get information on billing processes, payment methods, and invoicing.
              </p>
            </div>
            {/* Topic Card 3: Technical Support */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4 mb-4">
                <FaTools size={40} className="text-pink-600" />
                <h3 className="text-xl font-bold">Technical Support</h3>
              </div>
              <p className="text-gray-600">
                Find troubleshooting tips, FAQs, and guides for technical issues.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={getAnimationClasses('delay-450')}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-2">
                <FaQuestionCircle size={32} className="text-blue-600" />
                <h3 className="text-xl font-bold">How do I reset my password?</h3>
              </div>
              <p className="text-gray-600">
                To reset your password, click on the "Forgot Password" link on the
                login page and follow the instructions.
              </p>
            </div>
            {/* FAQ Item 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-2">
                <FaQuestionCircle size={32} className="text-green-600" />
                <h3 className="text-xl font-bold">
                  Where can I view my billing history?
                </h3>
              </div>
              <p className="text-gray-600">
                Your billing history can be found in the "Billing" section under
                your account settings.
              </p>
            </div>
            {/* FAQ Item 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-2">
                <FaQuestionCircle size={32} className="text-pink-600" />
                <h3 className="text-xl font-bold">
                  How do I contact technical support?
                </h3>
              </div>
              <p className="text-gray-600">
                You can contact our technical support team by submitting a ticket
                through our contact form.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className={getAnimationClasses('delay-600')}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Phone Contact */}
            <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <FaPhoneAlt size={40} className="text-blue-600" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            {/* Email Contact */}
            <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <FaEnvelope size={40} className="text-green-600" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-600">support@linkedmatrix.com</p>
              </div>
            </div>
            {/* Live Chat Contact */}
            <div className="flex items-center space-x-4 bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <FaComments size={40} className="text-pink-600" />
              <div>
                <h3 className="text-xl font-bold">Live Chat</h3>
                <p className="text-gray-600">Chat with our support team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Section: Tutorials & Guides */}
        <section className={getAnimationClasses('delay-750')}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Tutorials &amp; Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tutorial Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4 mb-4">
                <FaBook size={40} className="text-blue-600" />
                <h3 className="text-xl font-bold">Getting Started</h3>
              </div>
              <p className="text-gray-600">
                Learn the basics of using our platform with our comprehensive guides.
              </p>
            </div>
            {/* Tutorial Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="flex items-center space-x-4 mb-4">
                <FaWrench size={40} className="text-green-600" />
                <h3 className="text-xl font-bold">Advanced Features</h3>
              </div>
              <p className="text-gray-600">
                Dive deeper into our platform's advanced capabilities and learn how to
                make the most of them.
              </p>
            </div>
          </div>
        </section>

        {/* Additional Section: Community Forums */}
        <section className={getAnimationClasses('delay-900')}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Community Forums
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Join discussions, ask questions, and share insights with other users.
          </p>
          <div className="flex justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded hover:bg-blue-700 transition-colors">
              Visit Forums
            </button>
          </div>
        </section>

        {/* Additional Section: Submit a Ticket */}
        <section className={getAnimationClasses('delay-1050')}>
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Submit a Ticket
          </h2>
          <p className="text-gray-600 text-center mb-8">
            If you need further assistance, please fill out the form below and our
            support team will get back to you as soon as possible.
          </p>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
              >
                Submit Ticket
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
