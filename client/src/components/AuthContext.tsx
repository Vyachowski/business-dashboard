import {createContext, useState} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const prevAccessToken = localStorage.getItem('accessToken');
  const prevRefreshToken = localStorage.getItem('refreshToken');

  if (prevAccessToken && prevRefreshToken) {
    setAccessToken(prevAccessToken);
    setRefreshToken(prevRefreshToken);
    return;
  }

  // After successful login
  const handleLogin = (newAccessToken, newRefreshToken) => {
    setAccessToken(newAccessToken);
    setAccessToken(newRefreshToken);
    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
  };

  // When the user logs out
  const handleLogout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [profile, setProfile] = useState({
  //   fullName: null,
  //   email: null,
  //   id: null,
  // });

  // useEffect(() => {
  //   const accessToken = localStorage.getItem('accessToken');
  //   const refreshToken = localStorage.getItem('refreshToken');
  //
  //   if (accessToken && refreshToken) {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get('http://localhost:3011/api/user/profile', {
  //           withCredentials: true,
  //         });
  //
  //         if (response.status === 200) {
  //           const { fullName, email, id } = response.data;
  //
  //           setIsAuthenticated(true);
  //           setProfile({ fullName, email, id });
  //         }
  //       } catch (error) {
  //         console.error('Error while loading user profile:', error);
  //       }
  //     };
  //
  //     fetchData();
  //   }
  // }, []);

  // const login = async (accessToken: string, refreshToken: string) => {
  //   localStorage.setItem('accessToken', accessToken);
  //   localStorage.setItem('refreshToken', refreshToken);
  //
  //   document.cookie = `accessToken=${accessToken}; path=/`;
  //   document.cookie = `refreshToken=${refreshToken}; path=/`;
  //
  //   const response = await axios.get('http://localhost:3011/api/user/profile', {
  //     withCredentials: true
  //   });
  //   if (response.status === 200) {
  //     const {fullName, email, id} = response.data;
  //
  //     setIsAuthenticated(true);
  //     setProfile({fullName, email, id});
  //   }
  // };

  // const logout = () => {
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('refreshToken');
  //
  //   setIsAuthenticated(false);
  //   setProfile({
  //     fullName: null,
  //     email: null,
  //     id: null,
  //   });
  // };

  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, accessToken, refreshToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
