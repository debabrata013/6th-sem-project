// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, User } from 'lucide-react';
// import { signup } from '../../store/slices/authSlice';
// import type { AppDispatch, RootState } from '../../store';

// export default function SignupForm() {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state: RootState) => state.auth);

//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     firstName: '',
//     lastName: '',
//     name: '',
//     username: '',
//     role: 'user' as 'user' | 'mentor' | 'alumni',
//     college: '',
//     department: '',
//     yearOfEnrollment: 0,
//     yearOfGraduation: 0,
//     degree: '',
//     company: '',
//     designation: '',
//     industry: '',
//     yearsOfExperience: 0,
//     linkedInProfile: '',
//     skills: [] as string[],
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const updatedFormData = { ...formData, name: `${formData.firstName} ${formData.lastName}` };
//       // Dispatch signup action
//       await dispatch(signup(updatedFormData)).unwrap();
//       // Navigate to dashboard upon successful signup
//       navigate('/dashboard');
//     } catch (err) {
//       // Error is handled by the reducer
//       console.error('Error during signup:', err);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white/25 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
//           <p className="mt-2 text-gray-600">Join Link-Matrix today</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 First Name
//               </label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   required
//                   className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="First name"
//                   value={formData.firstName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, firstName: e.target.value })
//                   }
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Last Name
//               </label>
//               <div className="mt-1 relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                   <User className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   required
//                   className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Last name"
//                   value={formData.lastName}
//                   onChange={(e) =>
//                     setFormData({ ...formData, lastName: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Username
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                 <User className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 required
//                 className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={(e) =>
//                   setFormData({ ...formData, username: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                 <Mail className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 required
//                 className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="mt-1 relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//                 <Lock className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="password"
//                 required
//                 className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                 placeholder="Create a password"
//                 value={formData.password}
//                 onChange={(e) =>
//                   setFormData({ ...formData, password: e.target.value })
//                 }
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Role
//             </label>
//             <select
//               className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               value={formData.role}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   role: e.target.value as 'user' | 'mentor' | 'alumni',
//                 })
//               }
//             >
//               <option value="user">User</option>
//               <option value="mentor">Mentor</option>
//               <option value="alumni">Alumni</option>
//             </select>
//           </div>

//           {formData.role === 'user' && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   College
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="College"
//                   value={formData.college}
//                   onChange={(e) =>
//                     setFormData({ ...formData, college: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Department
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Department"
//                   value={formData.department}
//                   onChange={(e) =>
//                     setFormData({ ...formData, department: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Year of Enrollment
//                 </label>
//                 <input
//                   type="number"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Year of Enrollment"
//                   value={formData.yearOfEnrollment.toString()}
//                   onChange={(e) =>
//                     setFormData({ ...formData, yearOfEnrollment: Number(e.target.value) })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Year of Graduation
//                 </label>
//                 <input
//                   type="number"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Year of Graduation"
//                   value={formData.yearOfGraduation.toString()}
//                   onChange={(e) =>
//                     setFormData({ ...formData, yearOfGraduation: Number(e.target.value) })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Degree
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Degree"
//                   value={formData.degree}
//                   onChange={(e) =>
//                     setFormData({ ...formData, degree: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Skills
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Skills (comma separated)"
//                   value={formData.skills.join(', ')}
//                   onChange={(e) =>
//                     setFormData({ ...formData, skills: e.target.value.split(',').map(skill => skill.trim()) })
//                   }
//                 />
//               </div>
//             </>
//           )}

//           {formData.role === 'alumni' && (
//             <>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Company
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Company"
//                   value={formData.company}
//                   onChange={(e) =>
//                     setFormData({ ...formData, company: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Designation
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Designation"
//                   value={formData.designation}
//                   onChange={(e) =>
//                     setFormData({ ...formData, designation: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Industry
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Industry"
//                   value={formData.industry}
//                   onChange={(e) =>
//                     setFormData({ ...formData, industry: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Years of Experience
//                 </label>
//                 <input
//                   type="number"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Years of Experience"
//                   value={formData.yearsOfExperience}
//                   onChange={(e) =>
//                     setFormData({ ...formData, yearsOfExperience: Number(e.target.value) })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   LinkedIn Profile
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="LinkedIn Profile"
//                   value={formData.linkedInProfile}
//                   onChange={(e) =>
//                     setFormData({ ...formData, linkedInProfile: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Skills
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//                   placeholder="Skills (comma separated)"
//                   value={formData.skills.join(', ')}
//                   onChange={(e) =>
//                     setFormData({ ...formData, skills: e.target.value.split(',').map(skill => skill.trim()) })
//                   }
//                 />
//               </div>
//             </>
//           )}

//           {error && (
//             <div className="text-red-600 text-sm text-center">{error}</div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//           >
//             {loading ? 'Creating account...' : 'Create account'}
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <Link
//             to="/login"
//             className="font-medium text-indigo-600 hover:text-indigo-500"
//           >
//             Sign in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// } 

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { signup } from '../../store/slices/authSlice';
import type { AppDispatch, RootState } from '../../store';

export default function SignupForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  // Step 1: Personal Info, Step 2: Professional/Education Info
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    // Personal Information
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    name: '',
    username: '',
    role: 'user' as 'user' | 'mentor' | 'alumni',

    // Education fields (for "user")
    college: '',
    department: '',
    yearOfEnrollment: 0,
    yearOfGraduation: 0,
    degree: '',

    // Professional fields (for "mentor" and "alumni")
    company: '',
    designation: '',
    industry: '',
    yearsOfExperience: 0,
    linkedInProfile: '',
    
    // Common field
    skills: [] as string[],
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    // Optionally, add validation for step 1 fields here
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Combine first and last name
    const updatedFormData = {
      ...formData,
      name: `${formData.firstName} ${formData.lastName}`,
    };

    try {
      // Dispatch signup action
      await dispatch(signup(updatedFormData)).unwrap();
      // Navigate to dashboard upon successful signup
      navigate('/dashboard');
    } catch (err) {
      console.error('Error during signup:', err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/25 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            {step === 1 ? 'Create Your Account' : 'Additional Information'}
          </h2>
          <p className="mt-2 text-gray-600">
            {step === 1
              ? 'Enter your personal details'
              : 'Tell us more about your background'}
          </p>
        </div>

        <form onSubmit={step === 1 ? handleNext : handleSubmit} className="space-y-4">
          {step === 1 && (
            <>
              {/* Personal Information */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    required
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <select
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      role: e.target.value as 'user' | 'mentor' | 'alumni',
                    })
                  }
                >
                  <option value="user">User (Student)</option>
                  <option value="mentor">Mentor</option>
                  <option value="alumni">Alumni</option>
                </select>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {formData.role === 'user' ? (
                <>
                  {/* Education Section for Users */}
                  <h3 className="text-xl font-semibold text-gray-800">Education Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">College</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="College"
                      value={formData.college}
                      onChange={(e) =>
                        setFormData({ ...formData, college: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Department</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Department"
                      value={formData.department}
                      onChange={(e) =>
                        setFormData({ ...formData, department: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Year of Enrollment</label>
                    <input
                      type="number"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Year of Enrollment"
                      value={
                        formData.yearOfEnrollment === 0
                          ? ''
                          : formData.yearOfEnrollment.toString()
                      }
                      onChange={(e) =>
                        setFormData({ ...formData, yearOfEnrollment: Number(e.target.value) })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Year of Graduation</label>
                    <input
                      type="number"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Year of Graduation"
                      value={
                        formData.yearOfGraduation === 0
                          ? ''
                          : formData.yearOfGraduation.toString()
                      }
                      onChange={(e) =>
                        setFormData({ ...formData, yearOfGraduation: Number(e.target.value) })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Degree</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Degree"
                      value={formData.degree}
                      onChange={(e) =>
                        setFormData({ ...formData, degree: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Skills (comma separated)"
                      value={formData.skills.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: e.target.value.split(',').map((skill) => skill.trim()),
                        })
                      }
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Professional Section for Mentors and Alumni */}
                  <h3 className="text-xl font-semibold text-gray-800">Professional Information</h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Designation</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Designation"
                      value={formData.designation}
                      onChange={(e) =>
                        setFormData({ ...formData, designation: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Industry</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Industry"
                      value={formData.industry}
                      onChange={(e) =>
                        setFormData({ ...formData, industry: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Years of Experience</label>
                    <input
                      type="number"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Years of Experience"
                      value={formData.yearsOfExperience === 0 ? '' : formData.yearsOfExperience}
                      onChange={(e) =>
                        setFormData({ ...formData, yearsOfExperience: Number(e.target.value) })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="LinkedIn Profile URL"
                      value={formData.linkedInProfile}
                      onChange={(e) =>
                        setFormData({ ...formData, linkedInProfile: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                    <input
                      type="text"
                      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Skills (comma separated)"
                      value={formData.skills.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          skills: e.target.value.split(',').map((skill) => skill.trim()),
                        })
                      }
                    />
                  </div>
                </>
              )}
            </>
          )}

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div className="flex justify-between">
            {step === 2 && (
              <button
                type="button"
                onClick={handleBack}
                className="py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              disabled={loading}
              className="ml-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {step === 1
                ? 'Next'
                : loading
                ? 'Creating account...'
                : 'Create account'}
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
