import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Images/splashscreen.png')} // Ensure the file path and extension are correct
        style={styles.image}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // Cover the entire screen while maintaining the aspect ratio
    },
  });
export  {SplashScreen}