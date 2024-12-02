import axios from 'axios';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const STRAVA_BASE_URL = 'https://www.strava.com/api/v3';
const CLIENT_ID = '141562';
const CLIENT_SECRET = '2312569bd56752e02b7d28dfd7aeb306d6566644';
const REDIRECT_URI = 'exp://localhost:19000/--/oauth2redirect';

const stravaApi = axios.create({
  baseURL: STRAVA_BASE_URL,
});

// Interceptor para añadir el token a las peticiones
stravaApi.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('strava_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const initiateStravaAuth = async () => {
  try {
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=activity:read_all`;
    const result = await WebBrowser.openAuthSessionAsync(authUrl, REDIRECT_URI);
    
    if (result.type === 'success') {
      const { queryParams } = Linking.parse(result.url);
      if (queryParams.code) {
        return await exchangeCodeForToken(queryParams.code);
      }
    }
    throw new Error('Authentication failed');
  } catch (error) {
    console.error('Auth error:', error);
    throw error;
  }
};

export const exchangeCodeForToken = async (code) => {
  try {
    const response = await axios.post(`${STRAVA_BASE_URL}/oauth/token`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    });
    
    await SecureStore.setItemAsync('strava_token', response.data.access_token);
    await SecureStore.setItemAsync('strava_refresh_token', response.data.refresh_token);
    
    return response.data;
  } catch (error) {
    console.error('Token exchange error:', error);
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = await SecureStore.getItemAsync('strava_refresh_token');
    if (!refreshToken) throw new Error('No refresh token available');

    const response = await axios.post(`${STRAVA_BASE_URL}/oauth/token`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    });

    await SecureStore.setItemAsync('strava_token', response.data.access_token);
    await SecureStore.setItemAsync('strava_refresh_token', response.data.refresh_token);
    
    return response.data;
  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
};

export const getActivities = async (page = 1) => {
  try {
    const response = await stravaApi.get('/athlete/activities', {
      params: {
        page,
        per_page: 30,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      await refreshToken();
      return getActivities(page);
    }
    throw error;
  }
};

export const getActivityById = async (id) => {
  try {
    const response = await stravaApi.get(`/activities/${id}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 401) {
      await refreshToken();
      return getActivityById(id);
    }
    throw error;
  }
};
