import React from 'react';
import { Link } from 'react-router-dom';

import { BtnPrimary } from '../GlobalStyles';
import { Hero, Banner, Services } from '../components';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title='luxurious rooms'
          subtitle='deluxe rooms starting at $299'
        >
          <Link to='/rooms'>
            <BtnPrimary>our rooms</BtnPrimary>
          </Link>
        </Banner>
      </Hero>

      <Services />
    </>
  );
};

export default Home;
