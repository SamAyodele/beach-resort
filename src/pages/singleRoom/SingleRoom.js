import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { RoomContext } from '../../context/roomContext';
import { ErrorContainer, BtnPrimary } from '../../helpers/GlobalStyles';
import { Hero, Banner } from '../../components';

import {
  SingleRoomContainer,
  SingleRoomWrapper,
  SingleRoomInfo,
  Desc,
  Info,
  SingleRoomExtras,
  ExtrasList,
} from './SingleRoomElements';

const SingleRoom = (props) => {
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(props.match.params.slug);

  // if there is no such room as the slug states, return
  if (!room) {
    return (
      <ErrorContainer>
        <h3>no such room could be found...</h3>
        <Link to='/rooms'>
          <BtnPrimary>back to rooms</BtnPrimary>
        </Link>
      </ErrorContainer>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  // destructing the images array
  const [mainImg, ...restImgs] = images;

  return (
    <>
      <Hero img={mainImg}>
        <Banner title={`${name} room`}>
          <Link to='/rooms'>
            <BtnPrimary>back to rooms</BtnPrimary>
          </Link>
        </Banner>
      </Hero>
      <SingleRoomContainer>
        <SingleRoomWrapper>
          {restImgs.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </SingleRoomWrapper>
        <SingleRoomInfo>
          <Desc>
            <h3>details</h3>
            <p>{description}</p>
          </Desc>
          <Info>
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity:{' '}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
            <h6>{breakfast && 'free breakfast included'}</h6>
          </Info>
        </SingleRoomInfo>
      </SingleRoomContainer>
      <SingleRoomExtras>
        <h6>extras</h6>
        <ExtrasList>
          {extras.map((extra, index) => (
            <li key={index}>- {extra}</li>
          ))}
        </ExtrasList>
      </SingleRoomExtras>
    </>
  );
};

export default SingleRoom;
