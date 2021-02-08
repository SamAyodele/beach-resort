import React, { useContext } from 'react';

import { RoomContext } from '../../context/roomContext';

import Title from '../title/Title';
import {
  FilterContainer,
  FilterForm,
  FormGroup,
  SizeInputs,
  SingleExtra,
} from './RoomsFilterElements';

const RoomsFilter = ({ rooms }) => {
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = useContext(RoomContext);

  // function for getting all unique types from data-set
  const getUniqueValues = (items, value) => {
    return new Set(items.map((item) => item[value]));
  };

  // constant to hold unique room types
  const roomTypes = ['all', ...getUniqueValues(rooms, 'type')];

  // constant to hold room capacity
  const roomCapacity = [...getUniqueValues(rooms, 'capacity')];

  return (
    <FilterContainer>
      <Title titleName='search rooms' />
      <FilterForm>
        {/* start of select type */}
        <FormGroup>
          <label htmlFor='type'>room type</label>
          <select name='type' id='type' value={type} onChange={handleChange}>
            {roomTypes.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </FormGroup>
        {/* end of select type */}

        {/* start of guests */}
        <FormGroup>
          <label htmlFor='capacity'>Guests</label>
          <select
            name='capacity'
            id='capacity'
            value={capacity}
            onChange={handleChange}
          >
            {roomCapacity.map((room, index) => (
              <option key={index} value={room}>
                {room}
              </option>
            ))}
          </select>
        </FormGroup>
        {/* end of guests */}

        {/* start of room price */}
        <FormGroup>
          <label htmlFor='price'>room price ${price}</label>
          <input
            type='range'
            name='price'
            value={price}
            min={minPrice}
            max={maxPrice}
            id='price'
            onChange={handleChange}
          />
        </FormGroup>
        {/* end of room price */}

        {/* start of room size */}
        <FormGroup>
          <label htmlFor='size'>room size</label>
          <SizeInputs>
            <input
              type='number'
              name='minSize'
              id='size'
              value={minSize}
              onChange={handleChange}
            />
            <input
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
            />
          </SizeInputs>
        </FormGroup>
        {/* end of room size */}

        {/* checkboxes */}
        <FormGroup>
          <SingleExtra>
            <input
              type='checkbox'
              name='breakfast'
              id='breakfast'
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor='breakfast'>breakfast</label>
          </SingleExtra>

          <SingleExtra>
            <input
              type='checkbox'
              name='pets'
              id='pets'
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor='pets'>pets</label>
          </SingleExtra>
        </FormGroup>
        {/* end of checkboxes */}
      </FilterForm>
    </FilterContainer>
  );
};

export default RoomsFilter;
