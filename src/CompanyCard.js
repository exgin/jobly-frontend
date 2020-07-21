import React from 'react';
import './Card.css';
import { NavLink } from 'react-router-dom';
import { Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import defLogo from './default-image.png';
import './CompanyCard.css';

const CompanyCard = ({ item = {} }) => {
  return (
    <Col sm='3'>
      <NavLink className='CompanyCard-link' to={`/companies/${item.handle}`}>
        <Card>
          <CardImg top='50%' src={defLogo} />
          <CardBody>
            <CardTitle>
              <b>{item.name}</b>
            </CardTitle>
            <hr />
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </NavLink>
    </Col>
  );
};

export default CompanyCard;
