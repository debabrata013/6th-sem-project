import React, { useState } from 'react';
import { 
  BellIcon, 
  BriefcaseIcon, 
  ChatBubbleLeftRightIcon, 
  HomeIcon, 
  MagnifyingGlassIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import { 
  ChevronDownIcon, 
  EllipsisHorizontalIcon 
} from '@heroicons/react/24/solid';

const NetworkDashboard: React.FC = () => {
  const [showOpportunityModal, setShowOpportunityModal] = useState(true);
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <header className="bg-white shadow fixed top-0 w-full z-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          {/* Left Section - Logo and Search */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div className="ml-4 relative">
              <div className="flex items-center border rounded bg-gray-100 px-3 py-1">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Explore Connections"
                  className="bg-transparent border-none focus:outline-none ml-2 w-64"
                />
              </div>
            </div>
          </div>
          
          {/* Right Section - Navigation Icons */}
          <nav className="flex items-center space-x-2">
            <a href="#" className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-black">
              <HomeIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Dashboard Home </span>
            </a>
            <a href="#" className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-black">
              <UserGroupIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Connections</span>
            </a>
            <a href="#" className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-black">
              <BriefcaseIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Opportunities</span>
            </a>
            <a href="#" className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-black">
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Chats</span>
            </a>
            <a href="#" className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-black">
              <BellIcon className="h-6 w-6" />
              <span className="text-xs mt-1">Event Alerts</span>
            </a>
            <a href="#" className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-black">
              <img src="/api/placeholder/32/32" alt="Profile" className="h-6 w-6 rounded-full" />
              <div className="flex items-center text-xs mt-1">
                <span>My Profile</span>
                <ChevronDownIcon className="h-3 w-3 ml-1" />
              </div>
            </a>
            <div className="border-l h-10 mx-2"></div>
            <a href="#" className="flex flex-col items-center px-3 py-1 text-gray-500 hover:text-black">
              <div className="grid grid-cols-3 gap-1">
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              </div>
              <div className="flex items-center text-xs mt-1">
                <span>Network Tools</span>
                <ChevronDownIcon className="h-3 w-3 ml-1" />
              </div>
            </a>
            <a href="#" className="text-green-800 text-xs ml-2">
              Explore Premium Features
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-6xl mx-auto px-4 flex">
          {/* Left Sidebar - Profile */}
          <div className="w-64 mr-6">
            <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
              <div className="h-20 bg-cover bg-center" style={{ backgroundImage: `url('/api/placeholder/256/80')` }}></div>
              <div className="px-4 pt-4 pb-6 text-center relative">
                <img 
                  src="/api/placeholder/80/80" 
                  alt="Profile" 
                  className="h-16 w-16 rounded-full border-4 border-white absolute -top-8 left-1/2 transform -translate-x-1/2" 
                />
                <h2 className="font-medium text-lg mt-8">Alex Rodriguez</h2>
                <p className="text-sm text-gray-600 mt-1">Software Engineer at Tech Innovations</p>
                <p className="text-xs text-gray-500 mt-1">San Francisco, California</p>
                <div className="mt-3 text-xs text-gray-500 flex items-center justify-center space-x-1">
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.32 15.32A7 7 0 0110 3a7 7 0 014.68 12.32c-.15.2-.48.14-.62-.07a8.53 8.53 0 00-1.3-1.57 8.53 8.53 0 00-1.56-1.3c-.21-.14-.27-.47-.07-.62A7 7 0 0115.32 5.32 7 7 0 115.32 15.32z" clipRule="evenodd" />
                  </svg>
                  <span>Tech Innovations Inc.</span>
                </div>
              </div>
              <div className="border-t px-4 py-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Profile Views</span>
                  <span className="text-green-600 font-medium">42</span>
                </div>
              </div>
              <div className="border-t px-4 py-2">
                <a href="#" className="text-sm text-gray-600 hover:text-green-600">View Network Analytics</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <p className="text-sm">Accelerate Your Career Path</p>
              <a href="#" className="flex items-center text-sm text-green-800 mt-2">
                <span className="w-4 h-4 bg-green-100 text-green-800 mr-2 flex items-center justify-center rounded">
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </span>
                Unlock Premium Insights
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  <span className="text-sm font-medium">Bookmarks</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  <span className="text-sm font-medium">Professional Groups</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
                  </svg>
                  <span className="text-sm font-medium">Industry Insights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="h-4 w-4 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Networking Events</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle Section - Feed */}
          <div className="flex-1 space-y-4">
            {/* Opportunity Question Modal */}
            {showOpportunityModal && (
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex justify-between">
                  <div></div>
                  <button onClick={() => setShowOpportunityModal(false)} className="text-gray-500 hover:text-gray-700">
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col items-center mt-2">
                  <img src="/api/placeholder/120/80" alt="Opportunity illustration" className="mb-4" />
                  <h3 className="text-lg font-medium mb-1">Hi Alex, are you exploring new career opportunities?</h3>
                  <p className="text-sm text-gray-600 mb-4">Your response is confidential and only visible to you.</p>
                  <div className="flex space-x-3 w-full">
                    <button className="flex-1 py-2 px-4 border border-green-600 text-green-600 rounded-full hover:bg-green-50">Yes, actively looking</button>
                    <button className="flex-1 py-2 px-4 border border-green-600 text-green-600 rounded-full hover:bg-green-50">Open to opportunities</button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Post Creation */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4">
                <div className="flex items-center">
                  <img src="/api/placeholder/48/48" alt="Profile" className="h-12 w-12 rounded-full mr-3" />
                  <button className="flex-1 border border-gray-300 rounded-full px-4 py-2.5 text-left text-gray-600 hover:bg-gray-100">
                    Start a post
                  </button>
                </div>
                <div className="flex justify-between mt-3">
                  <button className="flex items-center text-gray-600 px-3 py-1 rounded hover:bg-gray-100">
                    <svg className="h-6 w-6 text-green-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M18 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <span>Video</span>
                  </button>
                  <button className="flex items-center text-gray-600 px-3 py-1 rounded hover:bg-gray-100">
                    <svg className="h-6 w-6 text-blue-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M18 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <span>Photo</span>
                  </button>
                  <button className="flex items-center text-gray-600 px-3 py-1 rounded hover:bg-gray-100">
                    <svg className="h-6 w-6 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" />
                    </svg>
                    <span>Write article</span>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Feed Sorting */}
            <div className="flex justify-end">
              <div className="flex items-center text-sm text-gray-600">
                <span>Sort by:</span>
                <button className="flex items-center ml-2 font-medium">
                  Top
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
            
            {/* Post 1 */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4">
                {/* Post Header */}
                <div className="flex justify-between">
                  <div className="flex">
                    <img src="/api/placeholder/48/48" alt="Profile" className="h-12 w-12 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">user name</h4>
                        <span className="text-gray-500 ml-2 text-sm">• 1st</span>
                      </div>
                      <p className="text-sm text-gray-600">Student at  University </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <svg className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span>1w</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-gray-500 hover:text-gray-700">
                      <EllipsisHorizontalIcon className="h-6 w-6" />
                    </button>
                    <button className="ml-2 text-gray-500 hover:text-gray-700">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="mt-3">
                  <p>
                    Thrilled to complete my Web Development Internship at Main Flow Services and
                    Technologies Pvt. Ltd. (Dec 15, 2024 – Feb 15, 2025)! ...more
                  </p>
                  
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <img src="/api/placeholder/400/200" alt="Certificate 1" className="w-full rounded" />
                    <img src="/api/placeholder/400/200" alt="Certificate 2" className="w-full rounded" />
                  </div>
                  
                  <div className="mt-3 flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-blue-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M18 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <span>user name and 23 others</span>
                  </div>
                  
                  <div className="mt-3 pt-3 border-t flex justify-between">
                    <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                      </svg>
                      <span>Like</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                      </svg>
                      <span>Comment</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                      </svg>
                      <span>Repost</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Post */}
            <div className="bg-white rounded-lg shadow">
              <div className="p-4">
                <div className="flex justify-between">
                  <div className="flex">
                    <img src="/api/placeholder/48/48" alt="Profile" className="h-12 w-12 rounded-full mr-3" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium">user name </h4>
                        <span className="text-gray-500 ml-2 text-sm">• 1st</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        BTech Pre-Final Year | Machine Learning Enthusiast
                      </p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <span>4d</span>
                        <svg className="h-3 w-3 mx-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-500 hover:text-gray-700">
                      <EllipsisHorizontalIcon className="h-6 w-6" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="mt-3">
                  <p>
                    Excited to share my latest project on machine learning algorithms. 
                    Check out the details and let me know your thoughts!
                  </p>
                  <div className="mt-4">
                    <img src="/api/placeholder/600/300" alt="Project preview" className="w-full rounded" />
                  </div>
                  <div className="mt-3 flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-blue-600 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M18 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM3 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                    <span>user name  and 10 others</span>
                  </div>
                </div>
                
                {/* Post Actions */}
                <div className="mt-3 pt-3 border-t flex justify-between">
                  <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span>Like</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                    <span>Comment</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <span>Repost</span>
                  </button>
                  <button className="flex items-center text-gray-600 hover:bg-gray-100 px-3 py-1.5 rounded">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default NetworkDashboard;
