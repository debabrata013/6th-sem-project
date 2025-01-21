import React from 'react';
import { useSelector } from 'react-redux';
import {
  User,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  Activity,
  LogOut,
} from 'lucide-react';
import type { RootState } from '../../store';

export default function UserDashboard() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.firstName}!</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Bell className="h-6 w-6" />
              </button>
              <img
                src={user?.avatar || 'https://via.placeholder.com/40'}
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Profile Overview */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-6">
              <img
                src={user?.avatar || 'https://via.placeholder.com/80'}
                alt="Profile"
                className="h-20 w-20 rounded-full"
              />
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {user?.firstName} {user?.lastName}
                </h2>
                <p className="text-gray-500">{user?.title || 'No title set'}</p>
                <p className="text-gray-500">{user?.company || 'No company set'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <User className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Profile Settings</h3>
                  <p className="text-gray-500">Update your personal information</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Edit profile
              </a>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Security</h3>
                  <p className="text-gray-500">Manage your account security</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View settings
              </a>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <HelpCircle className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Help & Support</h3>
                  <p className="text-gray-500">Get help or contact support</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Get help
              </a>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul className="-mb-8">
                <li className="relative pb-8">
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                        <Activity className="h-5 w-5 text-white" />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                      <div>
                        <p className="text-sm text-gray-500">
                          Logged in from new device
                        </p>
                      </div>
                      <div className="text-right text-sm whitespace-nowrap text-gray-500">
                        <time dateTime="2024-03-10">1 hour ago</time>
                      </div>
                    </div>
                  </div>
                </li>
              </ul> </div>
          </div>
        </div>
      </main>
    </div>
  );
}