import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BreadItem = ({ item, onSelected }) => {
    return (
        <View style={styles.breadItem}> 
            

            <TouchableOpacity
                onPress={() => onSelected(item)}
                style={{
                    ...styles.container,
                    backgroundColor:item.color
                
                }}
            >
          
            <View  style={styles.viewBox}>
                <View style={styles.viewImage}>
                        <Image
                            style={styles.imageContainer} source={{ uri: item.image }}
                        />
                    
                </View>
                <View style={styles.viewText}>
                        <Text
                            style={styles.title}>{item.name}
                        </Text>
                        <Text
                            style={styles.details}>$ {item.price}
                        </Text>
                        <Text
                            style={styles.details}>Peso: {item.weight}
                        </Text>
                </View>
               
            </View>
          
            </TouchableOpacity>
        </View>
    );
};

export default BreadItem;

const styles = StyleSheet.create({
    breadItem: {
        
        margin: 10,
        borderRadius: 10,
        
        
        height: 130,
        
    },
    container: {
        flex: 1,
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        
        padding: 8,
        
        
    },
    
    imageContainer: {
        height: 100,
        width: 100, 
        borderRadius:10,
    },
    title: {
        fontSize: 20,
        fontFamily: 'ComfortaaBold',
        
    },
    details: {
        fontsize: 18
    },
   
    viewImage: {
        marginTop:5,
    },
    viewText: {
        marginTop:39,
    },
    viewBox: {
        flex:1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',  
    }

});