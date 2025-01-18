import React from 'react';
import { useSelector } from 'react-redux';
import {
  Users,
  Activity,
  Shield,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  BarChart2,
} from 'lucide-react';
import type { RootState } from '../../store';

const mockMetrics = {
  totalUsers: 1234,
  activeSessions: 567,
  recentActivities: [
    {
      id: '1',
      userId: 'user1',
      type: 'login',
      timestamp: '2024-03-10T10:00:00Z',
      details: 'User logged in from new device',
    },
    {
      id: '2',
      userId: 'user2',
      type: 'password_reset',
      timestamp: '2024-03-10T09:45:00Z',
      details: 'Password reset requested',
    },
  ],
};

export default function AdminDashboard() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b">
            <h1 className="text-xl font-bold text-gray-800">Link-Matrix Admin</h1>
          </div>
          
          <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
            <div className="py-4">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
              >
                <Users className="w-5 h-5 mr-3" />
                Users
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
              >
                <Activity className="w-5 h-5 mr-3" />
                Activity
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
              >
                <Shield className="w-5 h-5 mr-3" />
                Security
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-50"
              >
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </a>
            </div>
          </nav>

          <div className="p-4 border-t">
            <div className="flex items-center">
              <img
                src={user?.avatar || 'https://via.placeholder.com/40'}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Total Users
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {mockMetrics.totalUsers}
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Active Sessions
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {mockMetrics.activeSessions}
            </div>
          </div>
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              Password Reset Requests
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">12</div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <div className="w-full bg-white rounded-lg shadow">
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Recent Activity
              </h3>
            </div>
            <div className="p-4">
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  {mockMetrics.recentActivities.map((activity) => (
                    <li key={activity.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Activity className="h-6 w-6 text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {activity.details}
                          </p>
                          <p className="text-sm text-gray-500">
                            {new Date(activity.timestamp).toLocaleString()}
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

          <div className="w-full bg-white rounded-lg shadow">
            <div className="px-4 py-5 border-b border-gray-200">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Security Alerts
              </h3>
            </div>
            <div className="p-4">
              <div className="flow-root">
                <ul className="-my-5 divide-y divide-gray-200">
                  <li className="py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Bell className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Multiple failed login attempts detected
                        </p>
                        <p className="text-sm text-gray-500">
                          IP: 192.168.1.1 - 10 minutes ago
                        </p>
                      </div>
                      <div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}