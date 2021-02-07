import React from 'react';
import { Link } from 'react-router-dom';

import { BtnPrimary } from '../helpers/GlobalStyles';

import { Hero, Banner } from '../components';

const Error = () => {
  return (
    <Hero>
      <Banner title='404' subtitle='page not found'>
        <Link to='/'>
          <BtnPrimary>return home</BtnPrimary>
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
