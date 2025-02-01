import React, { useState, useEffect } from 'react';

// Custom Button Component
const CustomButton = ({ children, variant = 'default', className = '', onClick, ...props }: { children: React.ReactNode, variant?: 'default' | 'outline' | 'ghost' | 'icon', className?: string, onClick?: () => void }) => {
  const baseStyles = "px-4 py-2 rounded-lg transition-all duration-300 font-medium";
  const variants = {
    default: "bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-gray-300 hover:border-blue-500 hover:text-blue-500",
    ghost: "hover:bg-gray-100 dark:hover:bg-gray-700",
    icon: "p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Input Component
const CustomInput = ({ className = '', ...props }) => (
  <input
    className={`w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 ${className}`}
    {...props}
  />
);

// Custom Select Component
const CustomSelect = ({ children, value, className = '', onChange, ...props }: { children: React.ReactNode, value?: string | number, className?: string, onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => (
  <select
    className={`w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500 outline-none transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </select>
);

// Custom Modal Component
const CustomModal = ({ isOpen, onClose, children }: { isOpen: boolean, onClose: () => void, children: React.ReactNode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-50 w-full max-w-md transform transition-all duration-300 scale-100">
        {children}
      </div>
    </div>
  );
};

const StudentManagement = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{ key: keyof typeof students[0] | null, direction: 'asc' | 'desc' }>({ key: null, direction: 'asc' });
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', rollNumber: '2024001', course: 'Computer Science', status: 'Active', grade: 'A', attendance: '95%' },
    { id: 2, name: 'Jane Smith', rollNumber: '2024002', course: 'Engineering', status: 'Active', grade: 'B+', attendance: '88%' }
  ]);
  const [editingStudent, setEditingStudent] = useState<{
    id: number;
    name: string;
    rollNumber: string;
    course: string;
    status: string;
    grade: string;
    attendance: string;
  } | null>(null);
  const [newStudent, setNewStudent] = useState({
    name: '',
    rollNumber: '',
    course: '',
    status: 'Active',
    grade: '',
    attendance: ''
  });
  const [animateCard, setAnimateCard] = useState(false);

  useEffect(() => {
    setAnimateCard(true);
  }, []);

  // Sorting Logic
  const sortedStudents = [...students].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key as keyof typeof a];
    const bValue = b[sortConfig.key as keyof typeof b];
    
    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Filtering Logic
  const filteredStudents = sortedStudents.filter(student =>
    Object.values(student).some(value => 
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handleSort = (key: keyof typeof students[0]) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const handleAddStudent = () => {
    if (editingStudent) {
      setStudents(students.map(s => 
        s.id === editingStudent.id ? { ...newStudent, id: editingStudent.id } : s
      ));
    } else {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    }
    setIsModalOpen(false);
    setNewStudent({ 
      name: '', 
      rollNumber: '', 
      course: '', 
      status: 'Active', 
      grade: '', 
      attendance: '' 
    });
    setEditingStudent(null);
  };

  return (
    <div className={`min-h-screen p-4 transition-all duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      {/* Header */}
      <div className={`fixed top-0 left-0 right-0 z-10 ${
        isDarkMode ? 'bg-gray-900/70' : 'bg-white/70'
      } border-b backdrop-blur-xl transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Student Management System
          </h1>
          <CustomButton
            variant="icon"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '🌞' : '🌙'}
          </CustomButton>
        </div>
      </div>

      {/* Main Content */}
      <div className={`mt-24 transition-all duration-500 ${
        animateCard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Search and Filters */}
        <div className={`backdrop-blur-xl rounded-xl shadow-lg mb-6 p-4 ${
          isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
        }`}>
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <CustomInput
                type="text"
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
              />
            </div>
            <div className="w-32">
              <CustomSelect value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
              >
                <option value={5}>5 / page</option>
                <option value={10}>10 / page</option>
                <option value={20}>20 / page</option>
              </CustomSelect>
            </div>
          </div>
        </div>

        {/* Student Table */}
        <div className={`backdrop-blur-xl rounded-xl shadow-lg overflow-hidden ${
          isDarkMode ? 'bg-gray-800/50' : 'bg-white/50'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={isDarkMode ? 'border-gray-700' : 'border-gray-200'}>
                  {['name', 'rollNumber', 'course', 'status', 'grade', 'attendance'].map(header => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left cursor-pointer hover:bg-gray-100/10"
                      onClick={() => handleSort(header as keyof typeof students[0])}
                    >
                      <div className="flex items-center space-x-1">
                        <span>{header.charAt(0).toUpperCase() + header.slice(1)}</span>
                        {sortConfig.key === header && (
                          <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentStudents.map((student) => (
                  <tr
                    key={student.id}
                    className={`border-t transition-colors duration-200 ${
                      isDarkMode 
                        ? 'border-gray-700 hover:bg-gray-700/50' 
                        : 'border-gray-200 hover:bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4">{student.name}</td>
                    <td className="px-6 py-4">{student.rollNumber}</td>
                    <td className="px-6 py-4">{student.course}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        student.status === 'Active'
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-red-500/20 text-red-500'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{student.grade}</td>
                    <td className="px-6 py-4">{student.attendance}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <CustomButton
                          variant="icon"
                          onClick={() => {
                            setEditingStudent(student);
                            setNewStudent(student);
                            setIsModalOpen(true);
                          }}
                        >
                          ✏️
                        </CustomButton>
                        <CustomButton
                          variant="icon"
                          onClick={() => {
                            setStudents(students.filter(s => s.id !== student.id));
                          }}
                        >
                          🗑️
                        </CustomButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4 border-t">
            <span>
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredStudents.length)} of {filteredStudents.length}
            </span>
            <div className="flex space-x-2">
              <CustomButton
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
              >
                Previous
              </CustomButton>
              {Array.from({ length: totalPages }, (_, i) => (
                <CustomButton
                  key={i + 1}
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </CustomButton>
              ))}
              <CustomButton
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                variant="outline"
              >
                Next
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Floating Add Button */}
        <CustomButton
          className="fixed bottom-8 right-8 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
          onClick={() => setIsModalOpen(true)}
        >
          + Add Student
        </CustomButton>

        {/* Modal */}
        <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className={`rounded-xl p-6 shadow-xl ${
            isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'
          } backdrop-blur-xl`}>
            <h2 className="text-xl font-bold mb-4">
              {editingStudent ? 'Edit Student' : 'Add New Student'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Name</label>
                <CustomInput
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                  className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
                />
              </div>
              <div>
                <label className="block mb-1">Roll Number</label>
                <CustomInput
                  value={newStudent.rollNumber}
                  onChange={(e) => setNewStudent({ ...newStudent, rollNumber: e.target.value })}
                  className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
                />
              </div>
              <div>
                <label className="block mb-1">Course</label>
                <CustomInput
                  value={newStudent.course}
                  onChange={(e) => setNewStudent({ ...newStudent, course: e.target.value })}
                  className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
                />
              </div>
              <div>
                <label className="block mb-1">Status</label>
                <CustomSelect
                  value={newStudent.status}
                  onChange={(e) => setNewStudent({ ...newStudent, status: e.target.value })}
                  className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </CustomSelect>
              </div>
              <div>
                <label className="block mb-1">Grade</label>
                <CustomInput
                  value={newStudent.grade}
                  onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
                  className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
                />
              </div>
              <div>
              <label className="block mb-1">Attendance</label>
                <CustomInput
                  value={newStudent.attendance}
                  onChange={(e) => setNewStudent({ ...newStudent, attendance: e.target.value })}
                  className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}
                />
              </div>
            </div>

            <div className="flex justify-end mt-6 space-x-2">
              <CustomButton
                variant="outline"
                onClick={() => {
                  setIsModalOpen(false);
                  setEditingStudent(null);
                  setNewStudent({
                    name: '',
                    rollNumber: '',
                    course: '',
                    status: 'Active',
                    grade: '',
                    attendance: ''
                  });
                }}
              >
                Cancel
              </CustomButton>
              <CustomButton
                onClick={handleAddStudent}
              >
                {editingStudent ? 'Update' : 'Add'} Student
              </CustomButton>
            </div>
          </div>
        </CustomModal>
      </div>
    </div>
  );
};

export default StudentManagement;
