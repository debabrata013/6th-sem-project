// ManagementPage.tsx
import React, { useState, FormEvent } from 'react';

// -----------------------
// Type Definitions
// -----------------------
export type Student = {
  id: number;
  name: string;
  email: string;
  course: string;
};

export type Alumni = {
  id: number;
  name: string;
  email: string;
  graduationYear: number;
  placement: string;
};

export type Message = {
  id: number;
  content: string;
  timestamp: string;
};

export type EventAnnouncement = {
  id: number;
  title: string;
  description: string;
  date: string;
};

// -----------------------
// Main Management Page Component
// -----------------------
const ManagementPage: React.FC = () => {
  // Navigation state (tabs)
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'students' | 'alumni' | 'messages' | 'events' | 'reports'
  >('dashboard');

  // Demo Data States
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
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {/* Logo */}
                <img className="h-8 w-8" src="https://via.placeholder.com/40" alt="Logo" />
                <span className="font-bold ml-2 text-xl">UniAdmin</span>
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {(['dashboard', 'students', 'alumni', 'messages', 'events', 'reports'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium 
                      ${activeTab === tab ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        {activeTab === 'dashboard' && <Dashboard students={students} alumni={alumni} />}
        {activeTab === 'students' && <StudentManagement students={students} setStudents={setStudents} />}
        {activeTab === 'alumni' && <AlumniManagement alumni={alumni} setAlumni={setAlumni} />}
        {activeTab === 'messages' && <Messaging messages={messages} setMessages={setMessages} />}
        {activeTab === 'events' && <Events events={events} setEvents={setEvents} />}
        {activeTab === 'reports' && <Reports students={students} alumni={alumni} />}
      </div>
    </div>
  );
};

export default ManagementPage;

// -----------------------
// Dashboard Component
// -----------------------
type DashboardProps = {
  students: Student[];
  alumni: Alumni[];
};

const Dashboard: React.FC<DashboardProps> = ({ students, alumni }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Students Card */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-2">Total Students</h3>
        <p className="text-4xl">{students.length}</p>
      </div>
      {/* Alumni Card */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-2">Total Alumni</h3>
        <p className="text-4xl">{alumni.length}</p>
      </div>
      {/* Additional dummy analytics */}
      <div className="bg-white p-6 rounded shadow md:col-span-2">
        <h3 className="text-xl font-bold mb-2">Placements</h3>
        <p className="text-gray-700">Demo: {alumni.filter((a) => a.placement !== '').length} placements recorded.</p>
      </div>
    </div>
  );
};

// -----------------------
// Student Management Component
// -----------------------
type StudentManagementProps = {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
};

const StudentManagement: React.FC<StudentManagementProps> = ({ students, setStudents }) => {
  const [search, setSearch] = useState('');
  const [newStudent, setNewStudent] = useState({ name: '', email: '', course: '' });
  const [editId, setEditId] = useState<number | null>(null);
  const [editStudent, setEditStudent] = useState({ name: '', email: '', course: '' });

  // Add new student
  const handleAddStudent = (e: FormEvent) => {
    e.preventDefault();
    const id = Date.now();
    setStudents([...students, { id, ...newStudent }]);
    setNewStudent({ name: '', email: '', course: '' });
  };

  // Delete student
  const handleDelete = (id: number) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  // Begin edit student
  const handleEdit = (student: Student) => {
    setEditId(student.id);
    setEditStudent({ name: student.name, email: student.email, course: student.course });
  };

  // Save edited student
  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    setStudents(
      students.map((s) =>
        s.id === editId ? { ...s, name: editStudent.name, email: editStudent.email, course: editStudent.course } : s
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Student Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Course</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td className="px-4 py-2">
                  {editId === student.id ? (
                    <input
                      type="text"
                      value={editStudent.name}
                      onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td className="px-4 py-2">
                  {editId === student.id ? (
                    <input
                      type="email"
                      value={editStudent.email}
                      onChange={(e) => setEditStudent({ ...editStudent, email: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    student.email
                  )}
                </td>
                <td className="px-4 py-2">
                  {editId === student.id ? (
                    <input
                      type="text"
                      value={editStudent.course}
                      onChange={(e) => setEditStudent({ ...editStudent, course: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    student.course
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  {editId === student.id ? (
                    <>
                      <button onClick={handleSaveEdit} className="text-green-500 hover:underline mr-2">
                        Save
                      </button>
                      <button onClick={() => setEditId(null)} className="text-gray-500 hover:underline">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(student)} className="text-blue-500 hover:underline mr-2">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(student.id)} className="text-red-500 hover:underline">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {filteredStudents.length === 0 && (
              <tr>
                <td className="px-4 py-2 text-center" colSpan={4}>
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add New Student Form */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-2">Add New Student</h3>
        <form onSubmit={handleAddStudent} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="text"
            placeholder="Course"
            value={newStudent.course}
            onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <button type="submit" className="md:col-span-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

// -----------------------
// Alumni Management Component
// -----------------------
type AlumniManagementProps = {
  alumni: Alumni[];
  setAlumni: React.Dispatch<React.SetStateAction<Alumni[]>>;
};

const AlumniManagement: React.FC<AlumniManagementProps> = ({ alumni, setAlumni }) => {
  const [search, setSearch] = useState('');
  const [newAlumni, setNewAlumni] = useState({ name: '', email: '', graduationYear: '', placement: '' });
  const [editId, setEditId] = useState<number | null>(null);
  const [editAlumni, setEditAlumni] = useState({ name: '', email: '', graduationYear: '', placement: '' });

  // Add new alumni
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

  // Delete alumni
  const handleDelete = (id: number) => {
    setAlumni(alumni.filter((a) => a.id !== id));
  };

  // Begin edit alumni
  const handleEdit = (al: Alumni) => {
    setEditId(al.id);
    setEditAlumni({ name: al.name, email: al.email, graduationYear: String(al.graduationYear), placement: al.placement });
  };

  // Save edited alumni
  const handleSaveEdit = (e: FormEvent) => {
    e.preventDefault();
    setAlumni(
      alumni.map((a) =>
        a.id === editId
          ? { ...a, name: editAlumni.name, email: editAlumni.email, graduationYear: Number(editAlumni.graduationYear), placement: editAlumni.placement }
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Alumni Management</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search alumni..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Alumni Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Graduation Year</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Placement</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredAlumni.map((al) => (
              <tr key={al.id}>
                <td className="px-4 py-2">
                  {editId === al.id ? (
                    <input
                      type="text"
                      value={editAlumni.name}
                      onChange={(e) => setEditAlumni({ ...editAlumni, name: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    al.name
                  )}
                </td>
                <td className="px-4 py-2">
                  {editId === al.id ? (
                    <input
                      type="email"
                      value={editAlumni.email}
                      onChange={(e) => setEditAlumni({ ...editAlumni, email: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    al.email
                  )}
                </td>
                <td className="px-4 py-2">
                  {editId === al.id ? (
                    <input
                      type="number"
                      value={editAlumni.graduationYear}
                      onChange={(e) => setEditAlumni({ ...editAlumni, graduationYear: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    al.graduationYear
                  )}
                </td>
                <td className="px-4 py-2">
                  {editId === al.id ? (
                    <input
                      type="text"
                      value={editAlumni.placement}
                      onChange={(e) => setEditAlumni({ ...editAlumni, placement: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    al.placement
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  {editId === al.id ? (
                    <>
                      <button onClick={handleSaveEdit} className="text-green-500 hover:underline mr-2">
                        Save
                      </button>
                      <button onClick={() => setEditId(null)} className="text-gray-500 hover:underline">
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(al)} className="text-blue-500 hover:underline mr-2">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(al.id)} className="text-red-500 hover:underline">
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {filteredAlumni.length === 0 && (
              <tr>
                <td className="px-4 py-2 text-center" colSpan={5}>
                  No alumni found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add New Alumni Form */}
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-2">Add New Alumni</h3>
        <form onSubmit={handleAddAlumni} className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            value={newAlumni.name}
            onChange={(e) => setNewAlumni({ ...newAlumni, name: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newAlumni.email}
            onChange={(e) => setNewAlumni({ ...newAlumni, email: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="number"
            placeholder="Graduation Year"
            value={newAlumni.graduationYear}
            onChange={(e) => setNewAlumni({ ...newAlumni, graduationYear: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <input
            type="text"
            placeholder="Placement"
            value={newAlumni.placement}
            onChange={(e) => setNewAlumni({ ...newAlumni, placement: e.target.value })}
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
          <button type="submit" className="md:col-span-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
            Add Alumni
          </button>
        </form>
      </div>
    </div>
  );
};

// -----------------------
// Messaging Component
// -----------------------
type MessagingProps = {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

const Messaging: React.FC<MessagingProps> = ({ messages, setMessages }) => {
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Messaging</h2>
      <form onSubmit={handleSendMessage} className="mb-4">
        <textarea
          placeholder="Type your message..."
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          rows={3}
          required
        ></textarea>
        <button type="submit" className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Send Message
        </button>
      </form>
      <div className="bg-white p-4 rounded shadow max-h-60 overflow-y-auto">
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="border-b pb-2 mb-2">
              <p className="text-gray-800">{msg.content}</p>
              <p className="text-xs text-gray-500">{msg.timestamp}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// -----------------------
// Events & Announcements Component
// -----------------------
type EventsProps = {
  events: EventAnnouncement[];
  setEvents: React.Dispatch<React.SetStateAction<EventAnnouncement[]>>;
};

const Events: React.FC<EventsProps> = ({ events, setEvents }) => {
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Events & Announcements</h2>
      <form onSubmit={handleAddEvent} className="mb-6 bg-white p-4 rounded shadow">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="w-full border rounded px-3 py-2 mb-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
        <textarea
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          className="w-full border rounded px-3 py-2 mb-2 focus:outline-none focus:ring focus:border-blue-300"
          rows={3}
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
          Add Event
        </button>
      </form>
      <div className="bg-white p-4 rounded shadow">
        {events.length === 0 ? (
          <p>No events announced yet.</p>
        ) : (
          events.map((ev) => (
            <div key={ev.id} className="mb-4 border-b pb-2">
              <h3 className="font-bold">{ev.title}</h3>
              <p className="text-gray-700">{ev.description}</p>
              <p className="text-xs text-gray-500">{ev.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// -----------------------
// Reports & Analytics Component
// -----------------------
type ReportsProps = {
  students: Student[];
  alumni: Alumni[];
};

const Reports: React.FC<ReportsProps> = ({ students, alumni }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Reports & Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Student Enrollment</h3>
          <p>Total Students: {students.length}</p>
          <p className="text-sm text-gray-600 mt-2">Demo analytics on enrollment trends would be displayed here.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2">Alumni Placements</h3>
          <p>Total Alumni: {alumni.length}</p>
          <p className="text-sm text-gray-600 mt-2">Demo analytics on placements and trends would be displayed here.</p>
        </div>
      </div>
    </div>
  );
};
