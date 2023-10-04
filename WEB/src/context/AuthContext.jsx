import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyUserDataService } from '../services';

export const AuthContext = createContext(null);

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (token) {
          const data = await getMyUserDataService({ token });
          setUser(data);
        }
      } catch (error) {
        setUser(null);
      }
    };

    getUserData();

    localStorage.setItem('token', token);
  }, [token, setToken, navigate]);

  const logIn = (token) => {
    setToken(token);
  };

  return <AuthContext.Provider value={{ token, user, logIn }}>{children}</AuthContext.Provider>;
};
