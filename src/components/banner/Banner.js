import React from 'react';

import { BannerContainer } from './BannerElements';

const Banner = ({ title, subtitle, children }) => {
  return (
    <BannerContainer>
      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </BannerContainer>
  );
};

export default Banner;
