import React, { useContext } from 'react';
import Context from './Context';
import './Home.css';

const Home = () => {
  const { currUser } = useContext(Context);

  return <div className='Home'>{!currUser ? <h1>Welcome to Jobly</h1> : <h1>Go Apply To Jobs!</h1>}</div>;
};

export default Home;
