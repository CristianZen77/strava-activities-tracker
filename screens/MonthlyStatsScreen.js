import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { fetchMonthlyStats } from '../api/stravaApi';
import MonthlyStatsCard from '../components/MonthlyStatsCard';

export default function MonthlyStatsScreen() {
  const { data, error, isLoading } = useQuery('monthlyStats', fetchMonthlyStats);

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <MonthlyStatsCard stats={item} />}
        keyExtractor={(item) => item.month}
      />
    </View>
  );
}