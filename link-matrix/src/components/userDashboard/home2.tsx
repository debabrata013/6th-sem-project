import React, { useState, useRef, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Mock data for demonstration
const mockBlogs = [
  { id: 1, title: "Career Transition Tips for Indian Students", author: "Aditi Sharma", tags: ["career", "advice"], likes: 24, comments: 5, content: "In India, transitioning careers can be challenging. Here are some tips to navigate this journey.", date: "2025-03-15" },
  { id: 2, title: "My Internship Experience in a Tech Startup", author: "Rahul Verma", tags: ["internship", "experience"], likes: 18, comments: 3, content: "I interned at a startup in Bangalore and learned a lot about the tech industry.", date: "2025-03-10" },
  { id: 3, title: "Networking Strategies for Indian Professionals", author: "Priya Singh", tags: ["networking", "career"], likes: 32, comments: 7, content: "Networking is crucial in India. Here are some effective strategies to build your network.", date: "2025-03-05" }
];

const mockEvents = [
  { id: 1, title: "Alumni Networking Event in Delhi", date: "2025-04-15", time: "18:00", location: "India Habitat Centre, Delhi", attendees: 45, description: "Connect with alumni from various industries in this casual networking event." },
  { id: 2, title: "Webinar on Indian Tech Trends", date: "2025-04-20", time: "14:00", location: "Virtual (Zoom)", attendees: 120, description: "Learn about the latest trends in the Indian tech industry from our distinguished alumni panel." },
  { id: 3, title: "Career Fair Preparation Workshop", date: "2025-05-05", time: "15:30", location: "Learning Commons, Mumbai", attendees: 30, description: "Get tips on how to make the most of the upcoming career fair." }
];

const mockConnections = [
  { id: 1, name: "Aditi Sharma", role: "Alumni", industry: "Technology", batch: "2018", skills: ["Machine Learning", "Python", "Data Science"], status: "connected" },
  { id: 2, name: "Rahul Verma", role: "Student", industry: "Marketing", batch: "2024", skills: ["Digital Marketing", "Content Creation", "SEO"], status: "pending" },
  { id: 3, name: "Priya Singh", role: "Alumni", industry: "Finance", batch: "2015", skills: ["Financial Analysis", "Investment Banking", "Excel"], status: "connected" },
  { id: 4, name: "Ravi Kumar", role: "Student", industry: "Design", batch: "2025", skills: ["UI/UX", "Graphic Design", "Figma"], status: "recommended" }
];

const mockMessages = [
  { id: 1, sender: "Aditi Sharma", content: "Hi! I saw your post about internships in tech. I'd love to share my experience.", timestamp: "2025-03-19T14:30:00", read: true },
  { id: 2, sender: "You", content: "That sounds great! I'm interested in learning more about your journey.", timestamp: "2025-03-19T14:35:00", read: true },
  { id: 3, sender: "Aditi Sharma", content: "Let's connect over a call next week to discuss further.", timestamp: "2025-03-19T14:40:00", read: false }
];

const userProfile = {
  name: "Sam Johnson",
  role: "Student",
  batch: "2026",
  bio: "Computer Science student passionate about software development and artificial intelligence.",
  education: [
    { degree: "BS Computer Science", institution: "State University", year: "2022-2026" }
  ],
  experience: [
    { title: "Software Development Intern", company: "TechCorp", duration: "Summer 2024" }
  ],
  skills: ["JavaScript", "React", "Python", "Machine Learning"],
  contact: {
    email: "sam.johnson@email.com",
    phone: "(555) 123-4567"
  },
  socialMedia: {
    linkedin: "linkedin.com/in/samjohnson",
    github: "github.com/samjohnson"
  }
};

// Navigation Bar Component
const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">LinkedMatrix</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/sd/" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/sd' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Blogs</Link>
            <Link to="/sd/events" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/sd/events' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Events</Link>
            <Link to="/sd/connections" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/sd/connections' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Connections</Link>
            <Link to="/sd/messages" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/sd/messages' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Messages</Link>
            <Link to="/sd/profile" className={`px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/sd/profile' ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`}>Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Blog Page Component
export const BlogPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");
  
    const filteredBlogs = mockBlogs.filter(
      (blog) =>
        (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.author.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedTag === "" || blog.tags.includes(selectedTag))
    );
  
    const allTags = [...new Set(mockBlogs.flatMap((blog) => blog.tags))];
  
    return (
      <div className="h-full w-full px-3">
        <Navbar />
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Blog Posts
        </h1>
  
        {/* Search & Filter Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-72 focus:ring-2 focus:ring-indigo-500 transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
  
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            <button
              className={`px-4 py-2 text-sm rounded-full transition ${
                selectedTag === "" ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedTag("")}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-2 text-sm rounded-full transition ${
                  selectedTag === tag ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
  
        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-900">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  By {blog.author} • {blog.date}
                </p>
                <p className="text-gray-700 mb-4">{blog.content}</p>
  
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
  
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <button className="flex items-center mr-4 hover:text-red-500 transition">
                      ❤️ {blog.likes}
                    </button>
                    <button className="flex items-center hover:text-blue-500 transition">
                      💬 {blog.comments}
                    </button>
                  </div>
                  <button className="text-indigo-600 hover:underline">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
// Events Page Component
export const EventsPage = () => {
    return (
      <div className="h-full w-full px-3">
        <Navbar />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105">
              <div className="bg-indigo-600 px-4 py-2 text-white text-center font-semibold">
                <div className="text-sm">{event.date} • {event.time}</div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-indigo-800">{event.title}</h2>
                <div className="flex items-center text-gray-600 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  {event.attendees} attendees
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 flex-1 font-semibold transition">
                    Register
                  </button>
                  <button className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 flex items-center justify-center transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Past Events</h2>
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-500">Past events will appear here.</p>
          </div>
        </div>
      </div>
    );
  };
  

// Connections Page Component
export const ConnectionsPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [industryFilter, setIndustryFilter] = useState("");
  
    const industries = [...new Set(mockConnections.map((connection) => connection.industry))];
  
    const filteredConnections = mockConnections.filter(
      (connection) =>
        (connection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          connection.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))) &&
        (industryFilter === "" || connection.industry === industryFilter)
    );
  
    return (
      <div className="h-full w-full px-3">
        <Navbar />
        
        {/* Search & Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search by name or skill..."
            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-72 focus:ring-2 focus:ring-indigo-500 transition mb-4 md:mb-0"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
  
          <select
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 transition"
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
          >
            <option value="">All Industries</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
  
        {/* Connection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConnections.map((connection) => (
            <div
              key={connection.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-4">
                    {connection.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl text-gray-800">{connection.name}</h2>
                    <p className="text-sm text-gray-600">
                      {connection.role} • {connection.batch}
                    </p>
                  </div>
                </div>
  
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Industry</div>
                  <div className="font-medium text-gray-700">{connection.industry}</div>
                </div>
  
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {connection.skills.map((skill) => (
                      <span key={skill} className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
  
                <div className="mt-4">
                  {connection.status === "connected" ? (
                    <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
                      Message
                    </button>
                  ) : connection.status === "pending" ? (
                    <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
                      Pending
                    </button>
                  ) : (
                    <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                      Connect
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
// Messages Page Component


export const MessagesPage = () => {
  // State declarations
  const [messages, setMessages] = useState(
    mockMessages.map(msg => ({
      ...msg,
      recipient: msg.sender === 'You' ? 'Aditi Sharma' : 'You', // Initial recipients for demo
    }))
  );
  const [newMessage, setNewMessage] = useState('');
  const [selectedConversation, setSelectedConversation] = useState('Aditi Sharma');
  const [searchTerm, setSearchTerm] = useState('');
  const conversationRef = useRef(null);

  // Derive contacts from messages
  const contacts = [...new Set(messages.map(message => message.sender).filter(sender => sender !== 'You'))];
  const filteredContacts = contacts.filter(contact =>
    contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter messages for the selected conversation
  const conversationMessages = messages.filter(
    message =>
      (message.sender === selectedConversation && message.recipient === 'You') ||
      (message.sender === 'You' && message.recipient === selectedConversation)
  );

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newId = Math.max(...messages.map(m => m.id)) + 1;
    const newMessageObj = {
      id: newId,
      sender: 'You',
      recipient: selectedConversation,
      content: newMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage('');
  };

  // Auto-scroll to the bottom when messages change or conversation switches
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [messages, selectedConversation]);

  return (
    <div className="h-screen w-screen">
      <Navbar />
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <div className="flex h-full">
          {/* Contacts Sidebar */}
          <div className="w-1/3 border-r bg-gray-50">
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search conversations..."
                className="px-4 py-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="overflow-y-auto h-[calc(100vh-64px)]">
              {filteredContacts.map(contact => {
                const contactMessages = messages.filter(
                  msg =>
                    (msg.sender === contact && msg.recipient === 'You') ||
                    (msg.sender === 'You' && msg.recipient === contact)
                );
                const lastMessage = contactMessages.sort(
                  (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
                )[0];

                return (
                  <div
                    key={contact}
                    className={`p-4 border-b cursor-pointer transition-colors ${
                      selectedConversation === contact ? 'bg-indigo-100' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setSelectedConversation(contact)}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-3">
                        {contact.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-800">{contact}</div>
                        <div className="text-sm text-gray-500 truncate">
                          {lastMessage ? lastMessage.content : 'No messages yet'}
                        </div>
                      </div>
                      <div className="text-xs text-gray-400 ml-2">
                        {lastMessage
                          ? new Date(lastMessage.timestamp).toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : ''}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Conversation Area */}
          <div className="w-2/3 flex flex-col">
            <div className="p-4 border-b flex items-center bg-indigo-50">
              <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700 font-bold mr-3">
                {selectedConversation.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="font-medium text-gray-800">{selectedConversation}</div>
                <div className="text-xs text-gray-500">Online</div>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto bg-gray-100" ref={conversationRef}>
              {conversationMessages.length === 0 ? (
                <div className="text-center text-gray-500 mt-8">No messages yet</div>
              ) : (
                conversationMessages.map(message => (
                  <div
                    key={message.id}
                    className={`mb-4 flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs rounded-lg p-3 shadow-sm ${
                        message.sender === 'You'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-800'
                      }`}
                    >
                      <div>{message.content}</div>
                      <div
                        className={`text-xs mt-1 ${
                          message.sender === 'You' ? 'text-indigo-200' : 'text-gray-500'
                        }`}
                      >
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t bg-white">
              <form onSubmit={handleSendMessage} className="flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Page Component


// Sample Indian user profile data
const initialUserProfile = {
  name: 'Priya Sharma',
  role: 'Software Engineer',
  batch: 'B.Tech 2023',
  bio: 'Passionate about building scalable web applications and exploring AI technologies. Based in Bengaluru.',
  education: [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Indian Institute of Technology (IIT) Delhi',
      year: '2019 - 2023',
    },
    {
      degree: 'Class XII (CBSE)',
      institution: 'Delhi Public School, R.K. Puram',
      year: '2017 - 2019',
    },
  ],
  experience: [
    {
      title: 'Software Developer Intern',
      company: 'Tata Consultancy Services (TCS)',
      duration: 'June 2022 - Dec 2022',
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      duration: 'Jan 2021 - May 2022',
    },
  ],
  skills: ['React', 'Node.js', 'Python', 'Machine Learning', 'AWS', 'MongoDB'],
  contact: {
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
  },
  socialMedia: {
    linkedin: 'linkedin.com/in/priya-sharma',
    github: 'github.com/priya-sharma',
  },
};

export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(initialUserProfile);

  // Handle input changes during editing
  const handleChange = (e, field, subField = null) => {
    if (subField) {
      setUserProfile({
        ...userProfile,
        [field]: {
          ...userProfile[field],
          [subField]: e.target.value,
        },
      });
    } else {
      setUserProfile({ ...userProfile, [field]: e.target.value });
    }
  };

  // Handle skills update (comma-separated input)
  const handleSkillsChange = (e) => {
    const skillsArray = e.target.value.split(',').map(skill => skill.trim());
    setUserProfile({ ...userProfile, skills: skillsArray });
  };

  // Toggle edit mode and save changes
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 h-48 relative">
            <div className="absolute -bottom-16 left-8">
              <div className="w-32 h-32 bg-indigo-200 rounded-full border-4 border-white flex items-center justify-center text-indigo-700 text-4xl font-bold shadow-md">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <button
                className="px-4 py-2 bg-white text-indigo-600 rounded-md shadow-sm hover:bg-indigo-50 transition-colors"
                onClick={toggleEdit}
              >
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </button>
            </div>
          </div>

          {/* Profile Content */}
          <div className="pt-20 pb-8 px-8">
            {isEditing ? (
              <input
                type="text"
                value={userProfile.name}
                onChange={(e) => handleChange(e, 'name')}
                className="text-2xl font-bold w-full border-b border-gray-300 focus:outline-none focus:border-indigo-500 mb-2"
              />
            ) : (
              <h1 className="text-2xl font-bold text-gray-800">{userProfile.name}</h1>
            )}
            <div className="text-gray-600 mb-4">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={userProfile.role}
                    onChange={(e) => handleChange(e, 'role')}
                    className="border-b border-gray-300 focus:outline-none focus:border-indigo-500 mr-2"
                  />
                  •
                  <input
                    type="text"
                    value={userProfile.batch}
                    onChange={(e) => handleChange(e, 'batch')}
                    className="border-b border-gray-300 focus:outline-none focus:border-indigo-500 ml-2"
                  />
                </>
              ) : (
                `${userProfile.role} • ${userProfile.batch}`
              )}
            </div>

            {isEditing ? (
              <textarea
                value={userProfile.bio}
                onChange={(e) => handleChange(e, 'bio')}
                className="w-full border rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
                rows="3"
              />
            ) : (
              <p className="text-gray-700 mb-6">{userProfile.bio}</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Education</h2>
                {userProfile.education.map((edu, index) => (
                  <div key={index} className="mb-4 p-4 bg-gray-50 rounded-md shadow-sm">
                    <div className="font-medium text-gray-800">{edu.degree}</div>
                    <div className="text-gray-600">{edu.institution}</div>
                    <div className="text-sm text-gray-500">{edu.year}</div>
                  </div>
                ))}

                <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Experience</h2>
                {userProfile.experience.map((exp, index) => (
                  <div key={index} className="mb-4 p-4 bg-gray-50 rounded-md shadow-sm">
                    <div className="font-medium text-gray-800">{exp.title}</div>
                    <div className="text-gray-600">{exp.company}</div>
                    <div className="text-sm text-gray-500">{exp.duration}</div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills</h2>
                {isEditing ? (
                  <input
                    type="text"
                    value={userProfile.skills.join(', ')}
                    onChange={handleSkillsChange}
                    className="w-full border rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Enter skills separated by commas"
                  />
                ) : (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {userProfile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Contact Information</h2>
                <div className="mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {isEditing ? (
                    <input
                      type="email"
                      value={userProfile.contact.email}
                      onChange={(e) => handleChange(e, 'contact', 'email')}
                      className="border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  ) : (
                    <span>{userProfile.contact.email}</span>
                  )}
                </div>
                <div className="mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6.28V5z"
                    />
                  </svg>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userProfile.contact.phone}
                      onChange={(e) => handleChange(e, 'contact', 'phone')}
                      className="border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                    />
                  ) : (
                    <span>{userProfile.contact.phone}</span>
                  )}
                </div>

                <h2 className="text-xl font-semibold mt-6 mb-4 text-gray-800">Social Media</h2>
                <div className="flex flex-col space-y-2">
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        value={userProfile.socialMedia.linkedin}
                        onChange={(e) => handleChange(e, 'socialMedia', 'linkedin')}
                        className="border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder="LinkedIn URL"
                      />
                      <input
                        type="text"
                        value={userProfile.socialMedia.github}
                        onChange={(e) => handleChange(e, 'socialMedia', 'github')}
                        className="border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                        placeholder="GitHub URL"
                      />
                    </>
                  ) : (
                    <>
                      <a
                        href={`https://${userProfile.socialMedia.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                      >
                        LinkedIn
                      </a>
                      <a
                        href={`https://${userProfile.socialMedia.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:underline"
                      >
                        GitHub
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  return (
    <div>

      <div className="content">
        <Routes>
          <Route path="/" element={<BlogPage />} />
          <Route path="/sd/events" element={<EventsPage />} />
          <Route path="/sd/connections" element={<ConnectionsPage />} />
          <Route path="/sd/messages" element={<MessagesPage />} />
          <Route path="/sd/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
