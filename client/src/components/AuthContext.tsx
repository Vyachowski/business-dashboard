import {createContext, useEffect, useState} from 'react';
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState({
    fullName: null,
    email: null,
    id: null,
  });

  // @ts-ignore
  useEffect(() => {
    async function checkAuthentication() {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');

        document.cookie = `accessToken=${accessToken}; path=/`;
        document.cookie = `refreshToken=${refreshToken}; path=/`;

        const response = await axios.get('http://localhost:3011/api/user/profile', {
          withCredentials: true
        });
        if (response.status === 200) {
          const { fullName, email, id } = response.data;

          setProfile({ fullName, email, id});

          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Authentication check failed:', error.message);
        setIsAuthenticated(false);
      }
    }
    checkAuthentication().then(r => r);
  }, []);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, profile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;