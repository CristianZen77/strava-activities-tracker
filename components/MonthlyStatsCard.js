import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MonthlyStatsCard({ stats }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{stats.month}</Text>
      <Text>Total Distance: {stats.total_distance} km</Text>
      <Text>Total Time: {stats.total_time} min</Text>
      <Text>Total Elevation Gain: {stats.total_elevation_gain} m</Text>
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