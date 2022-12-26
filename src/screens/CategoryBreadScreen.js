import {FlatList} from 'react-native'
import React, {useEffect } from 'react'
import BreadItem from '../components/BreadItem'

import {useSelector, useDispatch, connect} from 'react-redux'
import { filteredBread, selectBread } from "../store/actions/bread.action";

  
const CategoryBreadScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const categoryBreads = useSelector((state) => state.breads.filteredBread);
  const category = useSelector((state) => state.categories.selected);
  
    useEffect(() => {
    dispatch(filteredBread(category.id));
  }, []);

  const handleSelectedCategory = (item) => {
    dispatch(selectBread(item.id))
    navigation.navigate('Details', {
        productID:item.id,
        name: item.name,
      }); 

  };

  const renderBreadItem = ({ item }) => (
    <BreadItem item={item} onSelected={handleSelectedCategory} />
  );
  
  return (
    <FlatList
      data={categoryBreads}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
      
    />
  );
};

export default connect() (CategoryBreadScreen);

