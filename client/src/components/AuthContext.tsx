import {createContext, useEffect, useState} from 'react';
import axios from "axios";
import {baseUrl} from "../App.tsx";
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [profile, setProfile] = useState({
    id: undefined,
    fullName: undefined,
    email: undefined,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/user/profile`, {
          withCredentials: true,
        });

        if (response.status === 200 || response.status === 201) {
          const { fullName, email, id } = response.data;
          setProfile({ fullName, email, id });
        }
      } catch (error) {
        console.error('Error while loading user profile:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(`${baseUrl}/api/user/sign-in/`, {
        email,
        password,
      }, {
        withCredentials: true,
      });
      if (response.status === 200 || response.status === 201) {
        console.log(response.data)
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${baseUrl}/api/user/sign-out/`, null, {
        withCredentials: true,
      });

      setProfile({
        id: undefined,
        fullName: undefined,
        email: undefined,
      });
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, profile }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
