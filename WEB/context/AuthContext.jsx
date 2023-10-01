import { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyUserDataService } from "../service";

export const AuthContext = createContext(null);

export const AuthProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyUserDataService({ token });
        setUser(data);
        setIsLogged(true);
      } catch (error) {
        setToken("");
        setUser(null);
        setIsLogged(false);
      }
    };
    if (token) getUserData();
  }, [token, setToken]);

  const login = (token) => {
    setToken(token);

  };

  useEffect(() => {
    if (token) {
        getMyUserDataService();
    }
}, [token]);

  const logout = () => {
    setToken("");
    setUser(null);
    setIsLogged(false);
    <Link to="/"></Link>;
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLogged,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};