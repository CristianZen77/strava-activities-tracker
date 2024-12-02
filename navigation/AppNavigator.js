import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import MonthlyStatsScreen from '../screens/MonthlyStatsScreen';
import useAuthStore from '../state/authStore';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const token = useAuthStore((state) => state.token);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!token ? (
          <Stack.Screen 
            name="Auth" 
            component={AuthScreen} 
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen 
              name="Activities" 
              component={ActivitiesScreen}
              options={{ title: 'Mis Actividades' }}
            />
            <Stack.Screen 
              name="MonthlyStats" 
              component={MonthlyStatsScreen}
              options={{ title: 'Estadísticas Mensuales' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}