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
//                 {/* <p className="text-xs text-gray-500">{user?.email}</p> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="ml-64 p-8">
//         <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
//           <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
//             <div className="text-sm font-medium text-gray-500 truncate">
//               Total Users
//             </div>
//             <div className="mt-1 text-3xl font-semibold text-gray-900">
//               {mockMetrics.totalUsers}
//             </div>
//           </div>
//           <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
//             <div className="text-sm font-medium text-gray-500 truncate">
//               Active Sessions
//             </div>
//             <div className="mt-1 text-3xl font-semibold text-gray-900">
//               {mockMetrics.activeSessions}
//             </div>
//           </div>
//           <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
//             <div className="text-sm font-medium text-gray-500 truncate">
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
//                           <p className="text-sm text-gray-500">
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
//                         <p className="text-sm text-gray-500">
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

import React from 'react';
import {
  Users,
  GraduationCap,
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
  Building
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
  Cell
} from 'recharts';

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
    activeResearchProjects: 156
  },
  enrollmentTrends: [
    { year: '2020', students: 11234, alumni: 40000, international: 2800 },
    { year: '2021', students: 12456, alumni: 42000, international: 3100 },
    { year: '2022', students: 13789, alumni: 43500, international: 3300 },
    { year: '2023', students: 14567, alumni: 44500, international: 3400 },
    { year: '2024', students: 15234, alumni: 45678, international: 3456 }
  ],
  departmentDistribution: [
    { name: 'Engineering', students: 4500 },
    { name: 'Business', students: 3800 },
    { name: 'Sciences', students: 3200 },
    { name: 'Arts', students: 2400 },
    { name: 'Medicine', students: 1334 }
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
    }
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const UniversityAdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - keeping the existing sidebar code */}
      
      {/* Main content */}
      <div className="ml-64 p-8">
        {/* Welcome Banner */}
        <div className="mb-8 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Welcome to University Admin Dashboard</h2>
              <p className="text-gray-600 mt-2">Academic Year 2024-2025</p>
            </div>
            <div className="flex space-x-4">
              <div className="text-center">
                <div className="text-sm text-gray-500">Semester</div>
                <div className="font-semibold">Spring</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500">Week</div>
                <div className="font-semibold">12</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-4">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Students
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  {mockUniversityData.metrics.totalStudents.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  {mockUniversityData.metrics.activeStudents.toLocaleString()} active
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <Award className="w-6 h-6 text-green-500" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Alumni Network
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  {mockUniversityData.metrics.totalAlumni.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">
                  +2.4% this year
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100">
                <Building className="w-6 h-6 text-purple-500" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Departments
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  5
                </div>
                <div className="text-sm text-gray-600">
                  {mockUniversityData.metrics.activeCourses} active courses
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100">
                <TrendingUp className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Research Projects
                </div>
                <div className="mt-1 text-2xl font-semibold text-gray-900">
                  {mockUniversityData.metrics.activeResearchProjects}
                </div>
                <div className="text-sm text-gray-600">
                  {mockUniversityData.metrics.researchGrants} active grants
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
          {/* Enrollment Trends */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium mb-4">Enrollment Trends</h3>
            <LineChart width={500} height={300} data={mockUniversityData.enrollmentTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="students" stroke="#8884d8" name="Students" />
              <Line type="monotone" dataKey="international" stroke="#82ca9d" name="International" />
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

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Activity
            </h3>
          </div>
          <div className="p-4">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {mockUniversityData.recentActivities.map((activity) => (
                  <li key={activity.id} className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Activity className="h-6 w-6 text-blue-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {activity.details}
                        </p>
                        <p className="text-sm text-gray-500">
                          {activity.user} - {new Date(activity.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
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