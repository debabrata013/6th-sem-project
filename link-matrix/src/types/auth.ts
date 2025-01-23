export interface User {
  // id: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  role: 'user' | 'mentor' | 'alumni' | 'admin';
  avatar?: string;
  title?: string;
  company?: string;
  lastLogin?: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'suspended';
  college?: string;
  department?: string;
  yearOfEnrollment?: number;
  yearOfGraduation?: number;
  degree?: string;
  designation?: string;
  industry?: string;
  yearsOfExperience?: number;
  linkedInProfile?: string;
  skills?: string[];
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  name:string;
  role: 'user' | 'mentor' | 'alumni';
  college?: string;
  department?: string;
  yearOfEnrollment?: number;
  yearOfGraduation?: number;
  degree?: string;
  company?: string;
  designation?: string;
  industry?: string;
  yearsOfExperience?: number;
  linkedInProfile?: string;
  skills?: string[];
}

export interface PasswordResetRequest {
  email: string;
  token?: string;
  newPassword?: string;
}

export interface SystemMetrics {
  totalUsers: number;
  activeSessions: number;
  recentActivities: Activity[];
  resetRequests: PasswordResetRequest[];
}

export interface Activity {
  id: string;
  userId: string;
  type: 'login' | 'logout' | 'password_reset' | 'profile_update';
  timestamp: string;
  details: string;
}