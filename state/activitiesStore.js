import create from 'zustand';

const useActivitiesStore = create((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities }),
  monthlyStats: {},
  setMonthlyStats: (monthlyStats) => set({ monthlyStats }),
  selectedMonth: null,
  setSelectedMonth: (month) => set({ selectedMonth: month }),
}));

export default useActivitiesStore;
