import React from 'react';

import { HeroContainer } from './HeroElements';

const Hero = ({ children, img }) => {
  return <HeroContainer img={img}>{children}</HeroContainer>;
};

export default Hero;
