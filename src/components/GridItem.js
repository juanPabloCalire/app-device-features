import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'

const GridItem = ({item, onSelected,}) => {
  return (
        <View style={styles.gridItem}> 
          
          
           <TouchableOpacity
              style=
              {{
                  ...styles.container,
                  backgroundColor: item.color
                  
              }}
              onPress={() => onSelected(item)}
            >
              <View style={styles.viewBox}>
                  <View style={styles.viewImage}>
                      <Image style={styles.imageContainer} source={{ uri: item.image }} />
                      
                  </View>
                  <View style={styles.viewText}>
                       <Text style={styles.title}>
                            {item.title}
                       </Text>
                     
                  </View>

                  
              </View>
          </TouchableOpacity>
       </View>
    )
}

export default GridItem

const styles = StyleSheet.create({
    gridItem: {
        
        borderRadius: 6,
        margin: 10,
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
    title: {
        fontFamily: 'ComfortaaBold',
        fontSize:30
        
    },
    viewImage: {
        marginTop:5,
        
    },
    viewText: {
        marginTop:39,
        
    },
   
    
    imageContainer: {
        height: 100,
        width: 100, 
        borderRadius:10,
    },
    viewBox: {
        flex:1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',  
    }



})