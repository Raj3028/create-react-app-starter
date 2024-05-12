import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../postlogin/layout/Layout';

const GlobalPermissionContext = createContext();

const IsAuthenticated = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const tokenFromStorage = localStorage.getItem("token");

  useEffect(() => {
    const checkUserToken = () => {
      const token = localStorage.getItem("token");
      if (!token || token === undefined) {
        setIsLoggedIn(false);
        return navigate("/")
      }
      setIsLoggedIn(true);
    }
    checkUserToken();
  }, [navigate]);

  return (
    isLoggedIn && <>
      {tokenFromStorage ? <GlobalPermissionContext.Provider>
        <Layout>
                {isLoggedIn ? children : null}
        </Layout>
      </GlobalPermissionContext.Provider> : children}
    </>
  )
}

const useGlobalState = () => {
  const context = useContext(GlobalPermissionContext);
  if (!context) {
      throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { IsAuthenticated, useGlobalState };