import React from 'react';
import { Link } from 'react-router-dom';

import { BtnPrimary } from '../helpers/GlobalStyles';
import { Hero, Banner, RoomsContainer } from '../components';

import roomsBg from '../images/room-11.jpeg';

const Rooms = () => {
  return (
    <>
      <Hero img={roomsBg}>
        <Banner title='our rooms'>
          <Link to='/'>
            <BtnPrimary>return home</BtnPrimary>
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
