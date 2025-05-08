import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Image } from 'react-native';
import { Text } from 'react-native';

export default function HorizontalItem({ imageUrl, profile }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text>{profile}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F3F4F6',
      borderRadius: 8,
      marginRight: 10,
      height: 100,
  },
  image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 8,
  },
  text: {
      fontSize: 16,
      color: '#000',
      textAlign: 'center',
  },
});
