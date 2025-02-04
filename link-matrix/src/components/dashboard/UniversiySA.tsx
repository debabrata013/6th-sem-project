import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Interfaces
interface University {
  id: number;
  name: string;
  location: string;
  studentsEnrolled: number;
  registrationDate: string;
  status: 'Active' | 'Inactive';
}

interface UniversityRequest {
  id: number;
  name: string;
  contactPerson: string;
  email: string;
  location: string;
  submissionDate: string;
}

const UniversitiesManagementPage: React.FC = () => {
  const [universities, setUniversities] = useState<University[]>([]);
  const [universityRequests, setUniversityRequests] = useState<UniversityRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentUniversity, setCurrentUniversity] = useState<University | null>(null);

  // Get the current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [newUniversityForm, setNewUniversityForm] = useState({
    name: '',
    location: '',
    studentsEnrolled: 0,
    registrationDate: getCurrentDate(),
    status: 'Active' as 'Active' | 'Inactive'
  });

  useEffect(() => {
    // Fetch data from the backend
    const fetchUniversities = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/superadmin/show');
        setUniversities(response.data);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, []);

  const handleAddUniversity = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/superadmin/AddUniversity', newUniversityForm);
      console.log('University added:', response.data);
      // Update the universities state with the new university
      setUniversities([...universities, response.data]);
      // Close the modal and reset the form
      setIsAddModalOpen(false);
      setNewUniversityForm({
        name: '',
        location: '',
        studentsEnrolled: 0,
        registrationDate: getCurrentDate(),
        status: 'Active'
      });
    } catch (error) {
      console.error('Error adding university:', error);
    }
  };

  const handleEditUniversity = (university: University) => {
    setCurrentUniversity(university);
    setIsEditModalOpen(true);
  };

  const updateUniversity = () => {
    if (currentUniversity) {
      setUniversities(universities.map(uni => 
        uni.id === currentUniversity.id ? currentUniversity : uni
      ));
      setIsEditModalOpen(false);
    }
  };

  const handleDeleteUniversity = (id: number) => {
    setUniversities(universities.filter(uni => uni.id !== id));
  };

  const handleApproveRequest = (request: UniversityRequest) => {
    const newUniversity: University = {
      id: request.id,
      name: request.name,
      location: request.location,
      studentsEnrolled: 0,
      registrationDate: new Date().toISOString().split('T')[0],
      status: 'Active'
    };

    setUniversities([...universities, newUniversity]);
    setUniversityRequests(universityRequests.filter(req => req.id !== request.id));
  };

  const handleRejectRequest = (id: number) => {
    setUniversityRequests(universityRequests.filter(req => req.id !== id));
  };

  const filteredUniversities = universities.filter(
    (uni) => 
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">
          Universities Management
        </h1>

        {/* Universities Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-white font-semibold">Registered Universities</h2>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Add University
            </button>
          </div>
          
          <input 
            type="text" 
            placeholder="Search Universities" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full mb-4 px-4 py-2 bg-white bg-opacity-20 text-white placeholder-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white bg-opacity-10">
                <tr>
                  {['Name', 'Location', 'Students', 'Registration Date', 'Status', 'Actions'].map((header) => (
                    <th key={header} className="px-4 py-3 text-left text-white font-medium">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredUniversities.map((uni) => (
                  <tr key={uni.id} className="border-b border-white border-opacity-10">
                    <td className="px-4 py-3 text-white">{uni.name}</td>
                    <td className="px-4 py-3 text-white">{uni.location}</td>
                    <td className="px-4 py-3 text-white">{uni.studentsEnrolled}</td>
                    <td className="px-4 py-3 text-white">{uni.registrationDate}</td>
                    <td className="px-4 py-3 text-white">{uni.status}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleEditUniversity(uni)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors"
                        >
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteUniversity(uni.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* University Requests Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 mb-8 shadow-2xl">
          <h2 className="text-2xl text-white font-semibold mb-6">University Requests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universityRequests.map((request) => (
              <div 
                key={request.id} 
                className="bg-white bg-opacity-20 rounded-2xl p-6 space-y-3 shadow-lg"
              >
                <h3 className="text-xl text-white font-semibold">{request.name}</h3>
                <p className="text-blue-100">Contact: {request.contactPerson}</p>
                <p className="text-blue-100">Email: {request.email}</p>
                <p className="text-blue-100">Location: {request.location}</p>
                <p className="text-blue-100">Submitted: {request.submissionDate}</p>
                <div className="flex justify-between mt-4">
                  <button 
                    onClick={() => handleApproveRequest(request)}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Approve
                  </button>
                  <button 
                    onClick={() => handleRejectRequest(request.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add University Modal */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl">
              <h2 className="text-2xl text-white font-semibold mb-6">Add New University</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="University Name"
                  value={newUniversityForm.name}
                  onChange={(e) => setNewUniversityForm({
                    ...newUniversityForm, 
                    name: e.target.value
                  })}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={newUniversityForm.location}
                  onChange={(e) => setNewUniversityForm({
                    ...newUniversityForm, 
                    location: e.target.value
                  })}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Students Enrolled"
                  value={newUniversityForm.studentsEnrolled}
                  onChange={(e) => setNewUniversityForm({
                    ...newUniversityForm, 
                    studentsEnrolled: Number(e.target.value)
                  })}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <div className="flex justify-end space-x-4 mt-6">
                  <button 
                    onClick={() => setIsAddModalOpen(false)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddUniversity}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit University Modal */}
        {isEditModalOpen && currentUniversity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md shadow-2xl">
              <h2 className="text-2xl text-white font-semibold mb-6">Edit University</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="University Name"
                  value={currentUniversity.name}
                  onChange={(e) => setCurrentUniversity({
                    ...currentUniversity, 
                    name: e.target.value
                  })}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={currentUniversity.location}
                  onChange={(e) => setCurrentUniversity({
                    ...currentUniversity, 
                    location: e.target.value
                  })}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="number"
                  placeholder="Students Enrolled"
                  value={currentUniversity.studentsEnrolled}
                  onChange={(e) => setCurrentUniversity({
                    ...currentUniversity, 
                    studentsEnrolled: Number(e.target.value)
                  })}
                  className="w-full px-4 py-2 bg-white bg-opacity-20 text-white placeholder-blue-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <div className="flex justify-end space-x-4 mt-6">
                  <button 
                    onClick={() => setIsEditModalOpen(false)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={updateUniversity}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniversitiesManagementPage;