import React, { createContext, useState, useEffect } from 'react';

import items from '../constants/data';

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  // setting up local state when component first mounts
  useEffect(() => {
    const roomsData = formatData(items);

    setRooms(roomsData);
    setFeaturedRooms(roomsData.filter((room) => room.featured));
    setSortedRooms(roomsData);
    setIsLoading(false);
  }, []);

  return (
    <RoomContext.Provider
      value={{ rooms, sortedRooms, featuredRooms, isLoading, getRoom }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export { RoomContext, RoomContextProvider };
