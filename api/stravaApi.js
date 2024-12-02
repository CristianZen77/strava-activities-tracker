import axios from 'axios';
import useAuthStore from '../state/authStore';

const BASE_URL = 'https://www.strava.com/api/v3';

export const fetchActivities = async () => {
  const token = useAuthStore.getState().token;
  const response = await axios.get(`${BASE_URL}/athlete/activities`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchMonthlyStats = async () => {
  const token = useAuthStore.getState().token;
  const response = await axios.get(`${BASE_URL}/athlete/activities`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const activities = response.data;
  const monthlyStats = activities.reduce((acc, activity) => {
    const month = new Date(activity.start_date).toLocaleString('default', { month: 'long' });
    if (!acc[month]) {
      acc[month] = {
        total_distance: 0,
        total_time: 0,
        total_elevation_gain: 0,
      };
    }
    acc[month].total_distance += activity.distance;
    acc[month].total_time += activity.moving_time;
    acc[month].total_elevation_gain += activity.total_elevation_gain;
    return acc;
  }, {});
  return Object.entries(monthlyStats).map(([month, stats]) => ({ month, ...stats }));
};