import {FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import PlaceItem from '../components/PlaceItem';

const PlaceListScreen = () => {
  const places = useSelector((state) => state.places);
  useEffect(() => {
    console.log(places);
  }, [places]);

  const renderItem = ({ item }) => (
    <PlaceItem
      title={item.title}
      image={item.image}
      aaddress={item.address}
      onSelect={() => navigation.navigate("Detalle", { placeId: item.id })}
    />
  );

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}

export default PlaceListScreen


