import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { initiateStravaAuth } from '../api/strava';
import useAuthStore from '../state/authStore';

export default function AuthScreen({ navigation }) {
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogin = async () => {
    try {
      const authResult = await initiateStravaAuth();
      if (authResult?.access_token) {
        setToken(authResult.access_token);
        navigation.replace('Activities');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vert.run React Native Assignment</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Conectar con Strava</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FC4C02', // Color naranja de Strava
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
