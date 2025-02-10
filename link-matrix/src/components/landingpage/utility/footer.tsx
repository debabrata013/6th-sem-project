import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Grid: Branding, Quick Links, Contact, and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding & Social Media */}
          <div>
            <h2 className="text-2xl font-bold">Linked Matrix</h2>
            <p className="mt-2 text-gray-400">Connecting Alumni &amp; Students</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/landingpage"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/helpcenter"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link

                    to="/"
                    className="text-gray-400 hover:text-white transition-colors"
                    >
                    Login
                    </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-gray-400" />
                <span className="text-gray-400">support@linkedmatrix.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-gray-400" />
                <span className="text-gray-400">+91 8235456789</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 w-full rounded-l-md text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 p-2 rounded-r-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Linked Matrix. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
