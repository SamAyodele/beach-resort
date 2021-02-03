import React from 'react';
import { Link } from 'react-router-dom';

import { BtnPrimary } from '../GlobalStyles';

import { Hero, Banner } from '../components';

const Rooms = () => {
  return (
    <Hero type='rooms'>
      <Banner title='our rooms'>
        <Link to='/'>
          <BtnPrimary>return home</BtnPrimary>
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
