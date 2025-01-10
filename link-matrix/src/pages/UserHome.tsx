import React, { useEffect, useState } from 'react';
// import { supabase } from '../lib/supabase';
import { User } from 'lucide-react';

interface Profile {
  username: string;
  role: string;
}

export default function UserHome() {
  const [profile, setProfile] = useState<Profile | null>(null);

  // useEffect(() => {
  //   async function fetchProfile() {
  //     const { data: { user } } = await supabase.auth.getUser();
      
  //     if (user) {
  //       const { data } = await supabase
  //         .from('profiles')
  //         .select('username, role')
  //         .eq('id', user.id)
  //         .single();

  //       if (data) {
  //         setProfile(data);
  //       }
  //     }
  //   }

  //   fetchProfile();
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center space-x-3">
                  <User className="h-10 w-10 text-gray-400" />
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Welcome, {profile?.username}!
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      You are logged in as a {profile?.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}