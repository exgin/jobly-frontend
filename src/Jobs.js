import React, { useState, useEffect } from 'react';
import JoblyAPI from './JoblyAPI';
import CardList from './CardList';
import Search from './Search';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getEveryJob() {
      let res = await JoblyAPI.getAllJobs();
      setJobs(res);
    }
    getEveryJob();
  }, []);

  const search = async (search) => {
    let res = await JoblyAPI.getJobs(search);
    setJobs(res);
  };

  useEffect(() => {
    search();
  }, []);

  const apply = async (idx) => {
    let jobsId = jobs[idx].id;
    let res = await JoblyAPI.applyToJob(jobsId);
    // if the clicked jobId is equal to the one clicked on, set the state to our returned message from our backendAPi
    setJobs((job) => job.map((j) => (j.id === jobsId ? { ...j, state: res } : job)));
  };

  return (
    <div className='Jobs'>
      <h1>Jobs!</h1>
      <Search lookFor={search} />
      <CardList res={jobs} apply={apply} />
    </div>
  );
};

export default Jobs;
