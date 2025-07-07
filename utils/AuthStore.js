import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,
  loggedIn: (user) => set({ user: user, isLoggedIn: true }),
  loggedOut: () => set({ user: null, isLoggedIn: false }),
}));

export default useAuthStore;
