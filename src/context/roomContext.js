import React, { createContext, useState, useEffect } from 'react';

import items from '../constants/data';

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filterData, setFilterData] = useState({
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  // function to get all necessary data from large array
  const formatData = (items) => {
    const tempItems = items.map((item) => {
      const id = item.sys.id;
      const images = item.fields.images.map((image) => image.fields.file.url);

      return { ...item.fields, images, id };
    });

    return tempItems;
  };

  // function to get specific room by its slug
  const getRoom = (slug) => {
    const tempRooms = [...rooms];

    return tempRooms.find((room) => room.slug === slug);
  };

  // function for handling changes in filter params
  const handleChange = (event) => {
    let { type, name, value, checked } = event.target;
    value = type === 'checkbox' ? checked : value;

    setFilterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // function for filtering rooms
  const filterRooms = () => {
    let {
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = filterData;

    let tempRooms = [...rooms];

    capacity = parseInt(capacity); //convert capacity string into int
    price = parseInt(price); //convert price string into int

    if (type !== 'all') {
      //filtering by type
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    if (capacity !== 1) {
      //filtering by capacity
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    tempRooms = tempRooms.filter((room) => room.price <= price); //filtering by price

    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize //filtering by size
    );

    if (breakfast) {
      // filtering by breakfast
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      // filtering by pets
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setSortedRooms(tempRooms);
  };

  // running the filter rooms function whenever the filter data changes
  useEffect(filterRooms, [filterData, rooms]);

  // setting up local state when component first mounts
  useEffect(() => {
    const roomsData = formatData(items);

    setRooms(roomsData);
    setFeaturedRooms(roomsData.filter((room) => room.featured));
    setSortedRooms(roomsData);
    setIsLoading(false);

    setFilterData((prevState) => ({
      ...prevState,
      price: Math.max(...roomsData.map((room) => room.price)),
      maxPrice: Math.max(...roomsData.map((room) => room.price)),
      minPrice: Math.min(...roomsData.map((room) => room.price)),
      maxSize: Math.max(...roomsData.map((room) => room.size)),
    }));
  }, []);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        sortedRooms,
        featuredRooms,
        isLoading,
        getRoom,
        handleChange,
        ...filterData,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomContextProvider };
