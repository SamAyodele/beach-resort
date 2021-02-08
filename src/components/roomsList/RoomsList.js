import React from 'react';

import Room from '../room/Room';
import {
  EmptySearch,
  RoomsListContainer,
  RoomsListWrapper,
} from './RoomsListElements';

const RoomsList = ({ rooms }) => {
  // conditionally returning an error message if no room match specified params
  if (rooms.length === 0) {
    return (
      <EmptySearch>
        <h3>unfortunately, no rooms matched your search parameters</h3>
      </EmptySearch>
    );
  }

  return (
    <RoomsListContainer>
      <RoomsListWrapper>
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </RoomsListWrapper>
    </RoomsListContainer>
  );
};

export default RoomsList;
