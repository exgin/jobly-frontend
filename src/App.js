import React, { useEffect, useState } from 'react';
import { decode } from 'jsonwebtoken';
import './App.css';
import Routes from './Routes';
import useLocalStorage from './hooks/useLocalStorage';
import JoblyAPI from './JoblyAPI';
import Context from './Context';

export const BASE_TOKEN = 'default-token';

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [token, setToken] = useLocalStorage(BASE_TOKEN);

  useEffect(() => {
    const getCurrUser = async () => {
      try {
        let { username } = decode(token);
        console.log(`Username:`, username);
        let res = await JoblyAPI.getCurrentUser(username);
        setCurrUser(res);
      } catch (error) {
        console.error(`getCurrUser error: ${error}`);
        setCurrUser(null);
      }
    };
    getCurrUser();
  }, [token]);

  const handleLogout = () => {
    setToken('NO-TOKEN');
    setCurrUser(null);
  };

  return (
    <Context.Provider value={{ currUser, setCurrUser, handleLogout }}>
      <div className='App'>
        <Routes setToken={setToken} />
      </div>
    </Context.Provider>
  );
}

export default App;
