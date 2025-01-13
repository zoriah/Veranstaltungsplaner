import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [id, setId] = useState()

  //Login
  const login = (token) => {
    // console.log(token)
    setIsAuthenticated(true)
    localStorage.setItem('token', token)
  };

  //Logout
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, setId, id }}>
      {children}
    </AuthContext.Provider>
  );
};
