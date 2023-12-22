'use client';
import React, { useState, useEffect, createContext } from 'react';
import { ReactNode } from "react";
import { UserInfo, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';

interface Props {
  children?: ReactNode
}

interface AuthContextType {
  user: UserInfo | null;
}

export const AuthContext = createContext<AuthContextType>({ user: null });

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
        console.log(user)
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user: currentUser }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider

