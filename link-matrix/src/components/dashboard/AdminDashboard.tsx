// import React from 'react';
// import { useSelector } from 'react-redux';
// import {
//   Users,
//   Activity,
//   Shield,
//   Bell,
//   Settings,
//   LogOut,
//   ChevronRight,
//   BarChart2,
// } from 'lucide-react';
// // import type { RootState } from '../../store';

// const mockMetrics = {
//   totalUsers: 1234,
//   activeSessions: 567,
//   recentActivities: [
//     {
//       id: '1',
//       userId: 'user1',
//       type: 'login',
//       timestamp: '2024-03-10T10:00:00Z',
//       details: 'User logged in from new device',
//     },
//     {
//       id: '2',
//       userId: 'user2',
//       type: 'password_reset',
//       timestamp: '2024-03-10T09:45:00Z',
//       details: 'Password reset requested',
//     },
//   ],
// };

// export default function AdminDashboard() {
//   // const { user } = useSelector((state: RootState) => state.auth);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
//         <div className="flex flex-col h-full">
//           <div className="flex items-center justify-center h-16 px-4 border-b">
//             <h1 className="text-xl font-bold text-gray-800">Link-Matrix Admin</h1>
//           </div>
          
//           <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
//             <div className="py-4">
//               <a
//                 href="#"
//                 className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
//               >
//                 <Users className="w-5 h-5 mr-3" />
//                 Users
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
//               >
//                 <Activity className="w-5 h-5 mr-3" />
//                 Activity
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
//               >
//                 <Shield className="w-5 h-5 mr-3" />
//                 Security
//               </a>
//               <a
//                 href="#"
//                 className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
//               >
//                 <Settings className="w-5 h-5 mr-3" />
//                 Settings
//               </a>
//             </div>
//           </nav>

//           <div className="p-4 border-t">
//             <div className="flex items-center">
//               <img
//                 // src={user?.avatar || 'https://via.placeholder.com/40'}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               <div className="ml-3">
//                 <p className="text-sm font-medium text-gray-700">
//                   {/* {user?.firstName} {user?.lastName} */}
//                 </p>
//                 {/* <p className="text-xs text-black-800">{user?.email}</p> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="ml-64 p-8">
//         <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
//           <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
//             <div className="text-sm font-medium text-black-800 truncate">
//               Total Users
//             </div>
//             <div className="mt-1 text-3xl font-semibold text-gray-900">
//               {mockMetrics.totalUsers}
//             </div>
//           </div>
//           <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
//             <div className="text-sm font-medium text-black-800 truncate">
//               Active Sessions
//             </div>
//             <div className="mt-1 text-3xl font-semibold text-gray-900">
//               {mockMetrics.activeSessions}
//             </div>
//           </div>
//           <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
//             <div className="text-sm font-medium text-black-800 truncate">
//               Password Reset Requests
//             </div>
//             <div className="mt-1 text-3xl font-semibold text-gray-900">12</div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
//           <div className="w-full bg-white rounded-lg shadow">
//             <div className="px-4 py-5 border-b border-gray-200">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">
//                 Recent Activity
//               </h3>
//             </div>
//             <div className="p-4">
//               <div className="flow-root">
//                 <ul className="-my-5 divide-y divide-gray-200">
//                   {mockMetrics.recentActivities.map((activity) => (
//                     <li key={activity.id} className="py-4">
//                       <div className="flex items-center space-x-4">
//                         <div className="flex-shrink-0">
//                           <Activity className="h-6 w-6 text-gray-400" />
//                         </div>
//                         <div className="flex-1 min-w-0">
//                           <p className="text-sm font-medium text-gray-900 truncate">
//                             {activity.details}
//                           </p>
//                           <p className="text-sm text-black-800">
//                             {new Date(activity.timestamp).toLocaleString()}
//                           </p>
//                         </div>
//                         <div>
//                           <ChevronRight className="h-5 w-5 text-gray-400" />
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="w-full bg-white rounded-lg shadow">
//             <div className="px-4 py-5 border-b border-gray-200">
//               <h3 className="text-lg font-medium leading-6 text-gray-900">
//                 Security Alerts
//               </h3>
//             </div>
//             <div className="p-4">
//               <div className="flow-root">
//                 <ul className="-my-5 divide-y divide-gray-200">
//                   <li className="py-4">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <Bell className="h-6 w-6 text-yellow-400" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-900 truncate">
//                           Multiple failed login attempts detected
//                         </p>
//                         <p className="text-sm text-black-800">
//                           IP: 192.168.1.1 - 10 minutes ago
//                         </p>
//                       </div>
//                       <div>
//                         <ChevronRight className="h-5 w-5 text-gray-400" />
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import {
  Home,
  Users,
  BookOpen,
  Bell,
  Settings,
  Activity,
  Shield,
  ChevronRight,
  UserCheck,
  Calendar,
  TrendingUp,
  Award,
  Building,
  FileText,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// --------------------
// Mock Data
// --------------------
const mockUniversityData = {
  metrics: {
    totalStudents: 15234,
    activeStudents: 12567,
    totalCourses: 486,
    activeCourses: 324,
    facultyMembers: 892,
    pendingRequests: 23,
    totalAlumni: 45678,
    internationalStudents: 3456,
    researchGrants: 24,
    activeResearchProjects: 156,
  },
  enrollmentTrends: [
    { year: '2020', students: 11234, alumni: 40000, international: 2800 },
    { year: '2021', students: 12456, alumni: 42000, international: 3100 },
    { year: '2022', students: 13789, alumni: 43500, international: 3300 },
    { year: '2023', students: 14567, alumni: 44500, international: 3400 },
    { year: '2024', students: 15234, alumni: 45678, international: 3456 },
  ],
  departmentDistribution: [
    { name: 'Engineering', students: 4500 },
    { name: 'Business', students: 3800 },
    { name: 'Sciences', students: 3200 },
    { name: 'Arts', students: 2400 },
    { name: 'Medicine', students: 1334 },
  ],
  facultyPerformance: [
    { name: 'Dr. Smith', rating: 4.8 },
    { name: 'Prof. Johnson', rating: 4.5 },
    { name: 'Dr. Lee', rating: 4.7 },
    { name: 'Prof. Brown', rating: 4.6 },
    { name: 'Dr. Davis', rating: 4.9 },
  ],
  upcomingEvents: [
    {
      id: 'e1',
      title: 'Faculty Meeting',
      date: '2024-04-10T10:00:00Z',
      location: 'Conference Room A',
    },
    {
      id: 'e2',
      title: 'Research Symposium',
      date: '2024-04-15T09:00:00Z',
      location: 'Auditorium',
    },
    {
      id: 'e3',
      title: 'Alumni Reunion',
      date: '2024-04-20T18:00:00Z',
      location: 'Main Hall',
    },
  ],
  recentActivities: [
    {
      id: '1',
      type: 'enrollment',
      details: 'New course enrollment: Advanced Mathematics',
      user: 'Sarah Johnson',
      timestamp: '2024-03-21T10:30:00Z',
    },
    {
      id: '2',
      type: 'grade',
      details: 'Grades posted for Computer Science 101',
      user: 'Prof. Michael Chen',
      timestamp: '2024-03-21T09:45:00Z',
    },
  ],
  announcements: [
    {
      id: 'a1',
      title: 'COVID-19 Policy Update',
      content:
        'New guidelines have been implemented regarding campus safety.',
      timestamp: '2024-03-20T12:00:00Z',
    },
    {
      id: 'a2',
      title: 'Library Hours Extended',
      content:
        'The university library will now be open until 10 PM on weekdays.',
      timestamp: '2024-03-19T08:30:00Z',
    },
  ],
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// --------------------
// Top Navigation Bar Component
// --------------------
const TopNavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md border-b border-gray-200">
      {/* Search Input */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 text-gray-800"
        />
      </div>
      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-200 transition">
          <Bell className="w-5 h-5 text-gray-600" />
        </button>
        <div className="relative">
          <button className="flex items-center focus:outline-none">
            <img
              className="w-8 h-8 rounded-full"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
          </button>
          {/* Profile Dropdown Placeholder */}
        </div>
      </div>
    </div>
  );
};

// --------------------
// Sidebar Component
// --------------------
const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">UniAdmin</h1>
      </div>
      <nav className="mt-6">
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Home className="w-5 h-5" />
          <span className="ml-3">Dashboard</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Users className="w-5 h-5" />
          <span className="ml-3">Students</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <BookOpen className="w-5 h-5" />
          <span className="ml-3">Courses</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Building className="w-5 h-5" />
          <span className="ml-3">Departments</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <UserCheck className="w-5 h-5" />
          <span className="ml-3">Faculty</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Shield className="w-5 h-5" />
          <span className="ml-3">Research</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Bell className="w-5 h-5" />
          <span className="ml-3">Notifications</span>
        </a>
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Settings className="w-5 h-5" />
          <span className="ml-3">Settings</span>
        </a>
      </nav>
    </div>
  );
};

// --------------------
// Main Dashboard Component
// --------------------
const UniversityAdminDashboard = () => {
  const [enrollmentChartFilter, setEnrollmentChartFilter] = useState('both'); // 'both' | 'students' | 'international'

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation Bar */}
        <TopNavBar />

        <div className="p-8">
          {/* Welcome Banner */}
          <div className="mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold">Welcome, Admin!</h2>
                <p className="mt-2">
                  University Administration Dashboard - Academic Year 2024-2025
                </p>
              </div>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-sm">Semester</div>
                  <div className="font-semibold">Spring</div>
                </div>
                <div className="text-center">
                  <div className="text-sm">Week</div>
                  <div className="font-semibold">12</div>
                </div>
                <div className="relative">
                  <Bell className="w-8 h-8" />
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                    3
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <Users className="w-6 h-6 text-green-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Manage Students</h4>
                <p className="text-sm text-gray-500">View and edit student records</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <BookOpen className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Manage Courses</h4>
                <p className="text-sm text-gray-500">Add, update or remove courses</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold">Academic Calendar</h4>
                <p className="text-sm text-gray-500">Upcoming events & important dates</p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Total Students */}
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100">
                  <Users className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Total Students</div>
                  <div className="mt-1 text-2xl font-semibold">
                    {mockUniversityData.metrics.totalStudents.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {mockUniversityData.metrics.activeStudents.toLocaleString()} active
                  </div>
                </div>
              </div>
            </div>

            {/* Alumni Network */}
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100">
                  <Award className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Alumni Network</div>
                  <div className="mt-1 text-2xl font-semibold">
                    {mockUniversityData.metrics.totalAlumni.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-600">+2.4% this year</div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100">
                  <Building className="w-6 h-6 text-purple-500" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Departments</div>
                  <div className="mt-1 text-2xl font-semibold">5</div>
                  <div className="text-sm text-gray-600">
                    {mockUniversityData.metrics.activeCourses} active courses
                  </div>
                </div>
              </div>
            </div>

            {/* Research Projects */}
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100">
                  <TrendingUp className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Research Projects</div>
                  <div className="mt-1 text-2xl font-semibold">
                    {mockUniversityData.metrics.activeResearchProjects}
                  </div>
                  <div className="text-sm text-gray-600">
                    {mockUniversityData.metrics.researchGrants} active grants
                  </div>
                </div>
              </div>
            </div>

            {/* Total Courses */}
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Total Courses</div>
                  <div className="mt-1 text-2xl font-semibold">
                    {mockUniversityData.metrics.totalCourses.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    {mockUniversityData.metrics.activeCourses} active
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty Members */}
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100">
                  <UserCheck className="w-6 h-6 text-green-500" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Faculty Members</div>
                  <div className="mt-1 text-2xl font-semibold">
                    {mockUniversityData.metrics.facultyMembers.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Pending Requests */}
            <div className="px-4 py-5 bg-white rounded-lg shadow">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100">
                  <Bell className="w-6 h-6 text-red-500" />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-500">Pending Requests</div>
                  <div className="mt-1 text-2xl font-semibold">
                    {mockUniversityData.metrics.pendingRequests}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
            {/* Enrollment Trends with Filter */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Enrollment Trends</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEnrollmentChartFilter('both')}
                    className={`px-3 py-1 rounded ${
                      enrollmentChartFilter === 'both'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    } transition`}
                  >
                    Both
                  </button>
                  <button
                    onClick={() => setEnrollmentChartFilter('students')}
                    className={`px-3 py-1 rounded ${
                      enrollmentChartFilter === 'students'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    } transition`}
                  >
                    Students
                  </button>
                  <button
                    onClick={() => setEnrollmentChartFilter('international')}
                    className={`px-3 py-1 rounded ${
                      enrollmentChartFilter === 'international'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    } transition`}
                  >
                    International
                  </button>
                </div>
              </div>
              <LineChart width={500} height={300} data={mockUniversityData.enrollmentTrends}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                {(enrollmentChartFilter === 'both' || enrollmentChartFilter === 'students') && (
                  <Line type="monotone" dataKey="students" stroke="#8884d8" name="Students" />
                )}
                {(enrollmentChartFilter === 'both' || enrollmentChartFilter === 'international') && (
                  <Line type="monotone" dataKey="international" stroke="#82ca9d" name="International" />
                )}
              </LineChart>
            </div>

            {/* Department Distribution */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium mb-4">Department Distribution</h3>
              <PieChart width={500} height={300}>
                <Pie
                  data={mockUniversityData.departmentDistribution}
                  cx={250}
                  cy={150}
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="students"
                  label
                >
                  {mockUniversityData.departmentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>

          {/* Faculty Performance */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Faculty Performance</h3>
            <BarChart width={500} height={300} data={mockUniversityData.facultyPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[4, 5]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="rating" fill="#8884d8" name="Rating" />
            </BarChart>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
            <ul className="divide-y divide-gray-200">
              {mockUniversityData.upcomingEvents.map((event) => (
                <li key={event.id} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-6 h-6 text-indigo-500" />
                    <div className="ml-4">
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleString([], {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })}{' '}
                        &mdash; {event.location}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </li>
              ))}
            </ul>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-medium mb-4">Announcements</h3>
            <ul className="divide-y divide-gray-200">
              {mockUniversityData.announcements.map((announcement) => (
                <li key={announcement.id} className="py-4">
                  <div className="flex items-center space-x-4">
                    <FileText className="w-6 h-6 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{announcement.title}</p>
                      <p className="text-sm text-gray-500">{announcement.content}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(announcement.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium">Recent Activity</h3>
            </div>
            <div className="p-4">
              <ul className="-my-5 divide-y divide-gray-200">
                {mockUniversityData.recentActivities.map((activity) => (
                  <li key={activity.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Activity className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {activity.details}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.user} - {new Date(activity.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityAdminDashboard;

