import React from 'react';

import { HeroContainer } from './HeroElements';

const Hero = ({ children, type = 'default' }) => {
  return <HeroContainer type={type}>{children}</HeroContainer>;
};

export default Hero;
