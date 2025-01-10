import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { supabase } from '../lib/supabase';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: 'admin' | 'user';
}

export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    async function checkAuth() {
      // const { data: { session } } = await supabase.auth.getSession();
      const session = 1;
      if (!session) {
        setIsAuthorized(false);
        setLoading(false);
        return;
      }

      //  const { data: profile } = await supabase
      //   .from('profiles')
      //   .select('role')
      //   .eq('id', session.user.id)
      //   .single();
      // const profile = { role: 'admin' };

      // setIsAuthorized(profile?.role === role);
      // setLoading(false);
    }

    checkAuth();
  }, [role]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}