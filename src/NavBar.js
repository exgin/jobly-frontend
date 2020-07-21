import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import Context from './Context';
import './NavBar.css';

const NavBar = () => {
  // get our current user
  const { currUser, handleLogout } = useContext(Context);

  const loggedIn = () => {
    return (
      <Navbar expand='sm'>
        <NavLink exact to='/' className='navbar-brand'>
          Jobly
        </NavLink>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/companies'>Companies</NavLink>
          </NavItem>
        </Nav>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/jobs'>Jobs</NavLink>
          </NavItem>
        </Nav>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink onClick={handleLogout} to='/'>
              Logout
            </NavLink>
          </NavItem>
        </Nav>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/profile'>Profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  };

  const loggedOut = () => {
    return (
      <Navbar expand='sm'>
        <NavLink exact to='/' className='navbar-brand'>
          Jobly
        </NavLink>

        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink to='/login'>Login</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  };

  return <div className='NavBar'>{currUser ? loggedIn() : loggedOut()}</div>;
};

export default NavBar;
