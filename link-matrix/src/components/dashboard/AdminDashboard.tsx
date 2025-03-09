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


import React, { useState, FormEvent } from 'react';
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

// -----------------------------------------------------------------------------
// MOCK DATA FOR UNIVERSITY DASHBOARD (Main Dashboard View)
// -----------------------------------------------------------------------------
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
      content: 'New guidelines have been implemented regarding campus safety.',
      timestamp: '2024-03-20T12:00:00Z',
    },
    {
      id: 'a2',
      title: 'Library Hours Extended',
      content: 'The university library will now be open until 10 PM on weekdays.',
      timestamp: '2024-03-19T08:30:00Z',
    },
  ],
};

// Colors for the PieChart
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
interface Student {
  id: number;
  name: string;
  email: string;
  course: string;
}

interface Alumni {
  id: number;
  name: string;
  email: string;
  graduationYear: number;
  placement: string;
}

interface Message {
  id: number;
  content: string;
  timestamp: string;
}

interface EventAnnouncement {
  id: number;
  title: string;
  description: string;
  date: string;
}

export const ManagementOverview: React.FC<{ students: Student[]; alumni: Alumni[] }> = ({
  students,
  alumni,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      {/* Students Card */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg shadow-lg text-white">
        <div className="flex items-center">
          <div className="bg-white p-3 rounded-full mr-4">
            {/* Student Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Total Students</h3>
            <p className="text-4xl font-extrabold">{students.length}</p>
          </div>
        </div>
      </div>
      {/* Alumni Card */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg shadow-lg text-white">
        <div className="flex items-center">
          <div className="bg-white p-3 rounded-full mr-4">
            {/* Alumni Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold">Total Alumni</h3>
            <p className="text-4xl font-extrabold">{alumni.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StudentManagement: React.FC<{
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}> = ({ students, setStudents }) => {
  const [search, setSearch] = useState('');
  const [newStudent, setNewStudent] = useState({ name: '', email: '', course: '' });
  const [editId, setEditId] = useState<number | null>(null);
  const [editStudent, setEditStudent] = useState({ name: '', email: '', course: '' });

  const handleAddStudent = (e: FormEvent) => {
    e.preventDefault();
    const id = Date.now();
    setStudents([...students, { id, ...newStudent }]);
    setNewStudent({ name: '', email: '', course: '' });
  };

  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleEdit = (student: Student) => {
    setEditId(student.id);
    setEditStudent({ name: student.name, email: student.email, course: student.course });
  };

  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    setStudents(
      students.map((s) =>
        s.id === editId
          ? { ...s, name: editStudent.name, email: editStudent.email, course: editStudent.course }
          : s
      )
    );
    setEditId(null);
    setEditStudent({ name: '', email: '', course: '' });
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.course.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-2xl font-bold mb-4">Student Management</h3>
      <input
        type="text"
        placeholder="Search students..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Course</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  {editId === student.id ? (
                    <input
                      type="text"
                      value={editStudent.name}
                      onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td className="px-4 py-3">
                  {editId === student.id ? (
                    <input
                      type="email"
                      value={editStudent.email}
                      onChange={(e) => setEditStudent({ ...editStudent, email: e.target.value })}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring"
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td className="px-4 py-3">
                  {editId === student.id ? (
                    <input
                      type="text"
                      value={editStudent.course}
                      onChange={(e) => setEditStudent({ ...editStudent, course: e.target.value })}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring"
                    />
                  ) : (
                    student.course
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {editId === student.id ? (
                    <>
                      <button
                        onClick={handleSaveEdit}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(student)}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td className="px-4 py-3 text-center" colSpan={4}>
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <form onSubmit={handleAddStudent} className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newStudent.email}
          onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          placeholder="Course"
          value={newStudent.course}
          onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button type="submit" className="md:col-span-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Add Student
        </button>
      </form>
    </div>
  );
};

export const AlumniManagement: React.FC<{
  alumni: Alumni[];
  setAlumni: React.Dispatch<React.SetStateAction<Alumni[]>>;
}> = ({ alumni, setAlumni }) => {
  const [search, setSearch] = useState('');
  const [newAlumni, setNewAlumni] = useState({ name: '', email: '', graduationYear: '', placement: '' });
  const [editId, setEditId] = useState<number | null>(null);
  const [editAlumni, setEditAlumni] = useState({ name: '', email: '', graduationYear: '', placement: '' });

  const handleAddAlumni = (e: FormEvent) => {
    e.preventDefault();
    const id = Date.now();
    setAlumni([
      ...alumni,
      {
        id,
        name: newAlumni.name,
        email: newAlumni.email,
        graduationYear: Number(newAlumni.graduationYear),
        placement: newAlumni.placement,
      },
    ]);
    setNewAlumni({ name: '', email: '', graduationYear: '', placement: '' });
  };

  const handleDelete = (id: number) => {
    setAlumni(alumni.filter((a) => a.id !== id));
  };

  const handleEdit = (al: Alumni) => {
    setEditId(al.id);
    setEditAlumni({
      name: al.name,
      email: al.email,
      graduationYear: String(al.graduationYear),
      placement: al.placement,
    });
  };

  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    setAlumni(
      alumni.map((a) =>
        a.id === editId
          ? {
              ...a,
              name: editAlumni.name,
              email: editAlumni.email,
              graduationYear: Number(editAlumni.graduationYear),
              placement: editAlumni.placement,
            }
          : a
      )
    );
    setEditId(null);
    setEditAlumni({ name: '', email: '', graduationYear: '', placement: '' });
  };

  const filteredAlumni = alumni.filter(
    (a) =>
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.email.toLowerCase().includes(search.toLowerCase()) ||
      String(a.graduationYear).includes(search) ||
      a.placement.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-2xl font-bold mb-4">Alumni Management</h3>
      <input
        type="text"
        placeholder="Search alumni..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Graduation Year</th>
              <th className="px-4 py-3">Placement</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAlumni.map((al) => (
              <tr key={al.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3">
                  {editId === al.id ? (
                    <input
                      type="text"
                      value={editAlumni.name}
                      onChange={(e) => setEditAlumni({ ...editAlumni, name: e.target.value })}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring"
                    />
                  ) : (
                    al.name
                  )}
                </td>
                <td className="px-4 py-3">
                  {editId === al.id ? (
                    <input
                      type="email"
                      value={editAlumni.email}
                      onChange={(e) => setEditAlumni({ ...editAlumni, email: e.target.value })}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring"
                    />
                  ) : (
                    al.email
                  )}
                </td>
                <td className="px-4 py-3">
                  {editId === al.id ? (
                    <input
                      type="number"
                      value={editAlumni.graduationYear}
                      onChange={(e) => setEditAlumni({ ...editAlumni, graduationYear: e.target.value })}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring"
                    />
                  ) : (
                    al.graduationYear
                  )}
                </td>
                <td className="px-4 py-3">
                  {editId === al.id ? (
                    <input
                      type="text"
                      value={editAlumni.placement}
                      onChange={(e) => setEditAlumni({ ...editAlumni, placement: e.target.value })}
                      className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring"
                    />
                  ) : (
                    al.placement
                  )}
                </td>
                <td className="px-4 py-3 text-center">
                  {editId === al.id ? (
                    <>
                      <button
                        onClick={handleSaveEdit}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditId(null)}
                        className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 transition"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(al)}
                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(al.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {filteredAlumni.length === 0 && (
              <tr>
                <td className="px-4 py-3 text-center" colSpan={5}>
                  No alumni found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <form onSubmit={handleAddAlumni} className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={newAlumni.name}
          onChange={(e) => setNewAlumni({ ...newAlumni, name: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newAlumni.email}
          onChange={(e) => setNewAlumni({ ...newAlumni, email: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="number"
          placeholder="Graduation Year"
          value={newAlumni.graduationYear}
          onChange={(e) => setNewAlumni({ ...newAlumni, graduationYear: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="text"
          placeholder="Placement"
          value={newAlumni.placement}
          onChange={(e) => setNewAlumni({ ...newAlumni, placement: e.target.value })}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button type="submit" className="md:col-span-4 bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
          Add Alumni
        </button>
      </form>
    </div>
  );
};

export const Messaging: React.FC<{
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}> = ({ messages, setMessages }) => {
  const [messageContent, setMessageContent] = useState('');
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (!messageContent.trim()) return;
    const newMsg: Message = {
      id: Date.now(),
      content: messageContent,
      timestamp: new Date().toLocaleString(),
    };
    setMessages([newMsg, ...messages]);
    setMessageContent('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-2xl font-bold mb-4">Messaging</h3>
      <form onSubmit={handleSendMessage}>
        <textarea
          placeholder="Type your message..."
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
      <div className="mt-6 bg-gray-50 p-4 rounded shadow max-h-60 overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="border-b border-gray-200 pb-2 mb-2">
              <p className="text-gray-800">{msg.content}</p>
              <p className="text-xs text-gray-500">{msg.timestamp}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export const Events: React.FC<{
  events: EventAnnouncement[];
  setEvents: React.Dispatch<React.SetStateAction<EventAnnouncement[]>>;
}> = ({ events, setEvents }) => {
  const [newEvent, setNewEvent] = useState({ title: '', description: '' });
  const handleAddEvent = (e: FormEvent) => {
    e.preventDefault();
    if (!newEvent.title.trim() || !newEvent.description.trim()) return;
    const event: EventAnnouncement = {
      id: Date.now(),
      title: newEvent.title,
      description: newEvent.description,
      date: new Date().toLocaleDateString(),
    };
    setEvents([event, ...events]);
    setNewEvent({ title: '', description: '' });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-2xl font-bold mb-4">Events & Announcements</h3>
      <form onSubmit={handleAddEvent} className="mb-6 bg-gray-50 p-4 rounded border border-gray-200">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Add Event
        </button>
      </form>
      <div className="bg-gray-50 p-4 rounded border border-gray-200">
        {events.length === 0 ? (
          <p className="text-center text-gray-500">No events announced yet.</p>
        ) : (
          events.map((ev) => (
            <div key={ev.id} className="mb-4 border-b border-gray-200 pb-2">
              <h4 className="text-xl font-bold mb-1">{ev.title}</h4>
              <p className="text-gray-700 mb-1">{ev.description}</p>
              <p className="text-xs text-gray-500">{ev.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
const Reports: React.FC<{ students: Student[]; alumni: Alumni[] }> = ({ students, alumni }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-6">Reports & Analytics</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Student Enrollment Report */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-white rounded-full mr-3">
              {/* Enrollment Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 1.343-3 3 0 2.21 3 6 3 6s3-3.79 3-6c0-1.657-1.343-3-3-3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a7 7 0 00-7 7c0 2.761 3 7 7 7s7-4.239 7-7a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold">Student Enrollment</h4>
          </div>
          <p className="text-3xl font-bold">{students.length}</p>
          <p className="mt-2 text-sm">Enrollment trends info here.</p>
        </div>

        {/* Alumni Placements Report */}
        <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-lg shadow-lg text-white">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-white rounded-full mr-3">
              {/* Placement Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h3l-4 8m-3-8h3l-4 8m13-8h3l-4 8m0 0h3l-4-8m-7-4V4m0 0h4m-4 0H7"
                />
              </svg>
            </div>
            <h4 className="text-xl font-semibold">Alumni Placements</h4>
          </div>
          <p className="text-3xl font-bold">{alumni.length}</p>
          <p className="mt-2 text-sm">Placement trends info here.</p>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// "STUDENT & ALUMNI MANAGEMENT" VIEW (Displayed when the "Students" sidebar link is clicked)
// -----------------------------------------------------------------------------
const StudentAlumniManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'students' | 'alumni' | 'messages' | 'events' | 'reports'
  >('overview');
  // Demo data (local state)
  const [students, setStudents] = useState<Student[]>([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', course: 'Computer Science' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', course: 'Electrical Engineering' },
  ]);
  const [alumni, setAlumni] = useState<Alumni[]>([
    { id: 1, name: 'Charlie Brown', email: 'charlie@example.com', graduationYear: 2018, placement: 'Tech Corp' },
    { id: 2, name: 'Diana Prince', email: 'diana@example.com', graduationYear: 2016, placement: 'Innovate Ltd.' },
  ]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [events, setEvents] = useState<EventAnnouncement[]>([]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Student & Alumni Management</h2>
      {/* Tab Navigation */}
      <div className="mb-4 border-b">
        {(['overview', 'students', 'alumni', 'messages', 'events', 'reports'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`mr-4 pb-2 border-b-2 text-sm font-medium ${
              activeTab === tab ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      <div>
        {activeTab === 'overview' && <ManagementOverview students={students} alumni={alumni} />}
        {activeTab === 'students' && <StudentManagement students={students} setStudents={setStudents} />}
        {activeTab === 'alumni' && <AlumniManagement alumni={alumni} setAlumni={setAlumni} />}
        {activeTab === 'messages' && <Messaging messages={messages} setMessages={setMessages} />}
        {activeTab === 'events' && <Events events={events} setEvents={setEvents} />}
        {activeTab === 'reports' && <Reports students={students} alumni={alumni} />}
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// TOP NAVIGATION BAR (Appears on every page)
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// SIDEBAR (Left Navigation)
// The sidebar is modified to accept props so that clicking on "Dashboard" or "Students" sets the current view.
// -----------------------------------------------------------------------------
type SidebarProps = {
  currentView: 'dashboard' | 'management';
  setCurrentView: React.Dispatch<React.SetStateAction<'dashboard' | 'management'>>;
};

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">UniAdmin</h1>
      </div>
      <nav className="mt-6">
        <button
          onClick={() => setCurrentView('dashboard')}
          className={`flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition w-full text-left ${
            currentView === 'dashboard' ? 'bg-gray-200' : ''
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="ml-3">Dashboard</span>
        </button>
        <button
          onClick={() => setCurrentView('management')}
          className={`flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition w-full text-left ${
            currentView === 'management' ? 'bg-gray-200' : ''
          }`}
        >
          <Users className="w-5 h-5" />
          <span className="ml-3">Students</span>
        </button>
      
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Building className="w-5 h-5" />
          <span className="ml-3">Departments</span>
        </a>
       
        
        <a href="#" className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-200 transition">
          <Bell className="w-5 h-5" />
          <span className="ml-3">Notifications</span>
        </a>
       
      </nav>
    </div>
  );
};

// -----------------------------------------------------------------------------
// MAIN UNIVERSITY ADMIN DASHBOARD COMPONENT
// This component toggles between the main dashboard view and the "Student & Alumni Management" view.
// -----------------------------------------------------------------------------
const UniversityAdminDashboard: React.FC = () => {
  // currentView: 'dashboard' for the main dashboard; 'management' for the student/alumni management page.
  const [currentView, setCurrentView] = useState<'dashboard' | 'management'>('dashboard');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      {/* Main Content Area */}
      <div className="ml-64">
        <TopNavBar />
        <div className="p-8">
          {currentView === 'dashboard' ? (
            // -----------------------------------------------------------------
            // MAIN DASHBOARD CONTENT (Metrics, Charts, etc.)
            // -----------------------------------------------------------------
            <div>
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

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
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
                
            
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">Enrollment Trends</h3>
                  </div>
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
                            — {event.location}
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
                            <p className="text-sm font-medium truncate">{activity.details}</p>
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
          ) : (
            // -----------------------------------------------------------------
            // STUDENT & ALUMNI MANAGEMENT VIEW
            // -----------------------------------------------------------------
            <StudentAlumniManagementPage />
          )}
        </div>
      </div>
    </div>
  );
};

export default UniversityAdminDashboard;
