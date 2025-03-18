import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import ResetPasswordForm from './components/auth/ResetPasswordForm';
import AdminDashboard from './components/dashboard/AdminDashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import ProtectedRoute from './components/layout/ProtectedRoute';
import SupperAdmin from './components/dashboard/SupperAdmin';
import University from './components/dashboard/UniversiySA';
import LandingPage from './components/landingpage/app';
import StudentManagement from './components/pages/Studentmanagement';
import AboutUs from './components/landingpage/aboutUs';
import Blog from './components/landingpage/Blog';
import HelpCenter from './components/landingpage/HelpCenter';

import StudentDasboard from'./components/userDashboard/home';
import Careers from './components/landingpage/carrer';


import StudentManagementUni from "./components/Universityadminpages/studentmanagement";
import Home from './components/landingpage/Home';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>

            <Route path="/landingpage" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sd" element={<StudentDasboard />} />
            <Route path ="/home" element={<Home/>}/>

            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/reset-password" element={<ResetPasswordForm />} />
            <Route path ="/ad"  element={<AdminDashboard/>}/>
            <Route path ="/sad"  element={<SupperAdmin/>}/>
            <Route path ="admin/universities"  element={<University/>}/>
            <Route path ="admin/studentmanagement"  element={<StudentManagement/>}/>

            
            

            
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;