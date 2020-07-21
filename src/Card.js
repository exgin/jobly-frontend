import React from 'react';
import CompanyCard from './CompanyCard';
import JobCard from './JobCard';

/**
  Check if the item has either a handle or not, that determines what card componenet is rendered
 */

const Card = ({ item = {}, apply, idx }) => {
  // check if we have a handle in the card, if it is, it's a company card!
  if (item.handle) {
    return <CompanyCard item={item} />;
  } else {
    return <JobCard item={item} handleApply={() => apply(idx)} />;
  }
};

export default Card;
