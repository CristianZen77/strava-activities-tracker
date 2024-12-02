import create from 'zustand';

const useActivityStore = create((set) => ({
  activities: [],
  setActivities: (activities) => set({ activities }),
  clearActivities: () => set({ activities: [] }),
}));

export default useActivityStore;