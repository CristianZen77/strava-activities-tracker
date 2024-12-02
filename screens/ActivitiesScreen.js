import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { fetchActivities } from '../api/stravaApi';
import ActivityCard from '../components/ActivityCard';

export default function ActivitiesScreen() {
  const { data, error, isLoading } = useQuery('activities', fetchActivities);

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
        renderItem={({ item }) => <ActivityCard activity={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}