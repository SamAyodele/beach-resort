import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import {
  NavContainer,
  NavCenter,
  NavHeader,
  NavBtn,
  NavIcon,
  NavLinks,
} from './NavBarElements';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <NavCenter>
        <NavHeader>
          <Link to='/'>
            <img src={logo} alt='Beach Resort' />
          </Link>
          <NavBtn type='button' onClick={handleToggle}>
            <NavIcon />
          </NavBtn>
        </NavHeader>

        <NavLinks isOpen={isOpen}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/rooms'>Rooms</Link>
          </li>
        </NavLinks>
      </NavCenter>
    </NavContainer>
  );
};

export default NavBar;
