import React, { useContext } from 'react';
import Loading from '../loading/Loading';
import Room from '../room/Room';
import Title from '../title/Title';
import { RoomContext } from '../../context/roomContext';

import { FeatureContainer, FeatureWrapper } from './FeaturedElements';

const Featured = () => {
  const { isLoading, featuredRooms: rooms } = useContext(RoomContext);

  return (
    <FeatureContainer>
      <Title titleName='featured rooms' />
      <FeatureWrapper>
        {isLoading ? (
          <Loading />
        ) : (
          rooms.map((room) => <Room key={room.id} room={room} />)
        )}
      </FeatureWrapper>
    </FeatureContainer>
  );
};

export default Featured;
