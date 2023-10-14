import {createContext, useEffect, useState} from 'react';
import axios from "axios";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState({
    fullName: null,
    email: null,
    id: null,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (accessToken && refreshToken) {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3011/api/user/profile', {
            withCredentials: true,
          });

          if (response.status === 200) {
            const { fullName, email, id } = response.data;

            setIsAuthenticated(true);
            setProfile({ fullName, email, id });
          }
        } catch (error) {
          console.error('Error while loading user profile:', error);
        }
      };

      fetchData();
    }
  }, []);

  const login = async (accessToken: string, refreshToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);

    document.cookie = `accessToken=${accessToken}; path=/`;
    document.cookie = `refreshToken=${refreshToken}; path=/`;

    const response = await axios.get('http://localhost:3011/api/user/profile', {
      withCredentials: true
    });
    if (response.status === 200) {
      const {fullName, email, id} = response.data;

      setIsAuthenticated(true);
      setProfile({fullName, email, id});
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    setIsAuthenticated(false);
    setProfile({
      fullName: null,
      email: null,
      id: null,
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, profile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
