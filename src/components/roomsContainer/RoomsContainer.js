import React from 'react';

import RoomsFilter from '../roomsFilter/RoomsFilter';
import RoomsList from '../roomsList/RoomsList';

const RoomsContainer = () => {
  return (
    <>
      hello from rooms container
      <RoomsFilter />
      <RoomsList />
    </>
  );
};

export default RoomsContainer;
