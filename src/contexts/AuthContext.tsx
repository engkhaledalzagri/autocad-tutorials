
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAdmin: boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<{ error?: any }>;
  signUp: (email: string, password: string) => Promise<{ error?: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if Supabase is configured
    const hasSupabase = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    if (!hasSupabase) {
      console.log('Supabase not configured, running in demo mode');
      // Set a demo user for testing
      setUser({ id: 'demo', email: 'demo@example.com' });
      setIsAdmin(true);
    }
    
    setLoading(false);
  }, []);

  const signOut = async () => {
    setUser(null);
    setIsAdmin(false);
  };

  const signIn = async (email: string, password: string) => {
    // Demo login - accept any credentials
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      setUser({ id: 'demo', email });
      setIsAdmin(email.includes('admin'));
      return {};
    }
    
    return { error: { message: 'Supabase not configured' } };
  };

  const signUp = async (email: string, password: string) => {
    // Demo signup - accept any credentials
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      setUser({ id: 'demo', email });
      return {};
    }
    
    return { error: { message: 'Supabase not configured' } };
  };

  const value = {
    user,
    loading,
    isAdmin,
    signOut,
    signIn,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
