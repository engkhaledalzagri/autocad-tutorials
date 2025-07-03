
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
    
    console.log('Auth initialization - Supabase configured:', hasSupabase);
    
    if (!hasSupabase) {
      console.log('Supabase not configured, running in demo mode');
      // Set a demo user for testing
      const demoUser = { id: 'demo', email: 'admin@demo.com' };
      setUser(demoUser);
      setIsAdmin(true);
      console.log('Demo user set:', demoUser);
    }
    
    setLoading(false);
  }, []);

  const signOut = async () => {
    console.log('Signing out user');
    setUser(null);
    setIsAdmin(false);
  };

  const signIn = async (email: string, password: string) => {
    console.log('Attempting sign in for:', email);
    
    // Demo login - accept any credentials
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      const newUser = { id: 'demo', email };
      const isUserAdmin = email.includes('admin') || email === 'admin@demo.com';
      
      setUser(newUser);
      setIsAdmin(isUserAdmin);
      
      console.log('Demo login successful:', { user: newUser, isAdmin: isUserAdmin });
      return {};
    }
    
    return { error: { message: 'Supabase not configured' } };
  };

  const signUp = async (email: string, password: string) => {
    console.log('Attempting sign up for:', email);
    
    // Demo signup - accept any credentials
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      const newUser = { id: 'demo', email };
      setUser(newUser);
      console.log('Demo signup successful:', newUser);
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

  console.log('Auth context current state:', { user, loading, isAdmin });

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
