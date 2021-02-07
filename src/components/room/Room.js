import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import fallbackImg from '../../images/room-1.jpeg';

import {
  RoomContainer,
  ImgContainer,
  PriceWrapper,
  RoomLink,
  RoomInfo,
} from './RoomElements';

const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <>
      <RoomContainer>
        <ImgContainer>
          <img src={images[0] || fallbackImg} alt='single room' />
          <PriceWrapper>
            <h6>${price}</h6>
            <p>per night</p>
          </PriceWrapper>
          <Link to={`/rooms/${slug}`}>
            <RoomLink>Featured</RoomLink>
          </Link>
          <RoomInfo>{name}</RoomInfo>
        </ImgContainer>
      </RoomContainer>
    </>
  );
};

// setting up prop types
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Room;
