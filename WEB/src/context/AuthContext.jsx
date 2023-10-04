import { createContext, useContext, useState } from 'react';
import { getMyUserDataService } from '../services';

export const AuthContext = createContext(null);

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

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

  const logIn = (token) => {
    setToken(token);
    loadUserData();
  };

  return <AuthContext.Provider value={{ token, user, logIn, loadUserData }}>{children}</AuthContext.Provider>;
};
