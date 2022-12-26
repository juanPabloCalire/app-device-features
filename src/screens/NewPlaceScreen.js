import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { COLORS } from '../const'
import { useDispatch } from 'react-redux'
import { addPlace } from '../store/actions/places.actions'
import ImageSelector from '../components/ImageSelector'
import LocationSelector from '../components/LocationSelector'
  


const NewPlaceScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    console.log(route, "Nueva Direccion");
  }, [route]);

  const handleTitleChange = (text) => setTitle(text);

  const handleSave = () => {
    dispatch(addPlace(title, image, location));
    navigation.navigate("Direcciones");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Titulo</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTitleChange}
        />
        <ImageSelector onImage={setImage} />
        <LocationSelector
          onLocation={setLocation}
          mapLocation={route?.params?.mapLocation}
        />
        <Button
          title="Grabar direccion"
          color={COLORS.MAROON}
          onPress={handleSave}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 70,
    marginLeft: 10,
    marginRight:10,
    
    
  },
  label: {
    fontSize: 18,
    marginBottom: 1,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
    paddingVertical: 4,
  },
});

export default NewPlaceScreen;
