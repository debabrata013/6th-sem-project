export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'mentor' | 'alumni' | 'admin';
  avatar?: string;
  title?: string;
  company?: string;
  lastLogin?: string;
  createdAt: string;
  status: 'active' | 'inactive' | 'suspended';
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
  rememberMe?: boolean;
}

export interface SignupData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'mentor' | 'alumni';
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