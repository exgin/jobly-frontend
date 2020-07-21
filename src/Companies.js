import React, { useState, useEffect } from 'react';
import JoblyAPI from './JoblyAPI';
import CardList from './CardList';
import Search from './Search';

/** Card list of all companies
 * When you click on a company card, you go to that specific company
 * Now you see all of the job cards that company has to offer
 */

const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getAllCompanies() {
      let res = await JoblyAPI.getCompanies();
      setCompanies(res);
    }
    getAllCompanies();
  }, []);

  const search = async (search) => {
    let res = await JoblyAPI.getCompanies(search);
    setCompanies(res);
  };

  return (
    <div className='Companies'>
      <Search lookFor={search} />
      <CardList res={companies} />
    </div>
  );
};

export default Companies;
