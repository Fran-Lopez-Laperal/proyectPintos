import React, { createContext, useState, useEffect } from 'react';
import { getMyUserDataService } from '../services';

export const AuthContext = createContext();

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        if (token) {
          const data = await getMyUserDataService({ token });
          setUser(data);
        }
      } catch (error) {
        setUser(null);
      }
    };

    loadUserData();
  }, [token]);

  const logIn = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken);
  };

  return <AuthContext.Provider value={{ token, user, logIn }}>{children}</AuthContext.Provider>;
};
