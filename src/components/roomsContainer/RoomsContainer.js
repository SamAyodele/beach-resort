import React, { useContext } from 'react';

import { RoomContext } from '../../context/roomContext';

import RoomsFilter from '../roomsFilter/RoomsFilter';
import RoomsList from '../roomsList/RoomsList';
import Loading from '../loading/Loading';

const RoomsContainer = () => {
  const { isLoading, sortedRooms, rooms } = useContext(RoomContext);

  // return the loading component if isLoading is true;
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
};

export default RoomsContainer;
