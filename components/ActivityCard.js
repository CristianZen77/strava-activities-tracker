import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ActivityCard({ activity }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{activity.name}</Text>
      <Text>Date: {activity.date}</Text>
      <Text>Distance: {activity.distance} km</Text>
      <Text>Time: {activity.time} min</Text>
      <Text>Elevation Gain: {activity.elevation_gain} m</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});