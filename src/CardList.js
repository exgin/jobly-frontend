import React from 'react';
import Card from './Card';
import { v4 as uuid } from 'uuid';
import { Row } from 'reactstrap';
import './CardList.css';

// res is our data from our backend server
const CardList = ({ res = [], apply }) => {
  return (
    <div className='CardList'>
      <Row>
        {/* we need the index of every card to handle the apply */}
        {res.map((resData, idx) => (
          <Card item={resData} key={uuid()} apply={apply} idx={idx} />
        ))}
      </Row>
    </div>
  );
};

export default CardList;
