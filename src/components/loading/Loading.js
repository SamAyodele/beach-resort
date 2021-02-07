import React from 'react';

import loadingGif from '../../images/gif/loading-gear.gif';

import { LoadingContainer } from './LoadingElements';

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={loadingGif} alt='' />
    </LoadingContainer>
  );
};

export default Loading;
