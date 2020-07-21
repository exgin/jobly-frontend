import React from 'react';
import './Card.css';
import { Button, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './JobCard.css';

const JobCard = ({ item = {}, handleApply }) => {
  return (
    <Col sm='2'>
      <Card className='JobCard'>
        <CardBody>
          <CardTitle>{item.title}</CardTitle>
          <hr />
          <CardText>
            <div>Salary: {item.salary}</div>
            <div>Equity: {item.equity}</div>
          </CardText>
          <Button className='bg-primary' onClick={handleApply} disabled={item.state}>
            {item.state ? 'Applied' : 'Apply'}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JobCard;
