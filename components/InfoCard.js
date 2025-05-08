import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoCard({ title, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#DCDCDC',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
});