import React from 'react';
import { motion } from 'framer-motion';
import Footer from './utility/footer';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Innovations in Tech',
    date: 'February 1, 2025',
    excerpt: 'Discover the latest trends in technology and innovation that are reshaping the industry...',
    category: 'Tech',
  },
  {
    id: 2,
    title: 'The Culture of Creativity',
    date: 'January 20, 2025',
    excerpt: 'Explore how creative cultures are inspiring new ideas and innovative solutions in the workplace...',
    category: 'Culture',
  },
  {
    id: 3,
    title: 'Business Strategies for Growth',
    date: 'January 10, 2025',
    excerpt: 'Learn effective business strategies that drive growth and empower teams to succeed...',
    category: 'Business',
  },
  {
    id: 4,
    title: 'The Future of Remote Work',
    date: 'December 15, 2024',
    excerpt: 'An in-depth analysis of remote work trends and how companies are adapting to the new norm...',
    category: 'Tech',
  },
];

const getCategoryLogo = (category: string) => {
  // Returns an inline SVG icon based on the blog post category
  switch (category) {
    case 'Tech':
      return (
        <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V5h2v5z" />
        </svg>
      );
    case 'Culture':
      return (
        <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 3.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0110 5.5zm0 9a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0110 14.5z" />
        </svg>
      );
    case 'Business':
      return (
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h3v-2H5V5h10v10h-2v2h3a1 1 0 001-1V4a1 1 0 00-1-1H4z" />
        </svg>
      );
    default:
      return <div className="w-8 h-8 bg-gray-300 rounded-full"></div>;
  }
};

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Harshita Singh',
    avatar: 'https://i.pravatar.cc/150?img=1',
    quote: 'This blog has completely transformed my view on technology!',
  },
  {
    id: 2,
    name: 'Bhola',
    avatar: 'https://i.pravatar.cc/150?img=4',
    quote: 'A must-read resource for anyone curious about culture and innovation.',
  },
  {
    id: 3,
    name: 'Dhananjay Singh',
    avatar: 'https://i.pravatar.cc/150?img=7',
    quote: 'Engaging, insightful, and always ahead of the trends.',
  },
];

// Framer Motion variant for fade-in and upward motion
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.2,
    },
  }),
};

const Blog: React.FC = () => {
  // Use the first post as the featured post
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero/Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <svg className="w-16 h-16 mr-3 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 108 8 8.01 8.01 0 00-8-8zm1 11H9v-2h2zm0-4H9V5h2z" />
            </svg>
            <h1 className="text-5xl font-bold">Linked Matrix Blog</h1>
          </div>
          <p className="text-xl">Insights, Trends, and Stories from Our Community</p>
        </div>
      </motion.header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Featured Post Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="bg-white shadow-xl rounded-lg overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              {/* Replace with your featured image */}
              <img
                src="https://source.unsplash.com/random/800x600?tech"
                alt="Featured Post"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">{featuredPost.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {featuredPost.date} — {featuredPost.category}
              </p>
              <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
              <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors">
                Read More
              </button>
            </div>
          </div>
        </motion.section>

        {/* Latest Blog Posts Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={index + 3}
              >
                <div className="flex items-center space-x-4 mb-4">
                  {getCategoryLogo(post.category)}
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600">{post.title}</h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
                <p className="text-gray-700">{post.excerpt}</p>
                <button className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Read More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Explore Categories Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="bg-blue-50 shadow-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Explore Categories</h2>
          <div className="flex justify-around">
            <div className="flex flex-col items-center">
              {getCategoryLogo('Tech')}
              <span className="mt-2 text-blue-600 font-semibold">Tech</span>
            </div>
            <div className="flex flex-col items-center">
              {getCategoryLogo('Culture')}
              <span className="mt-2 text-pink-600 font-semibold">Culture</span>
            </div>
            <div className="flex flex-col items-center">
              {getCategoryLogo('Business')}
              <span className="mt-2 text-green-600 font-semibold">Business</span>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={6}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">What Our Readers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={testimonial.id + 6}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 text-center">{testimonial.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action Subscription Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={7}
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
          <p className="mb-6">
            Subscribe to our newsletter for the latest insights, trends, and updates.
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-md p-3 rounded-l-lg border-none outline-none text-gray-700"
            />
            <button className="bg-blue-900 px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
