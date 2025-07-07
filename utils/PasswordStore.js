import { create } from "zustand";

const usePasswordStore = create((set) => ({
  showPassword: false,
  togglePassword: () => set((state) => ({ showPassword: !state.showPassword })),
}));

export default usePasswordStore;
