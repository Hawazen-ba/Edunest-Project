import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useOnBoardingStore = create((set) => ({
  isFirstLaunched: null, // null = loading, true = first launch, false = not first launch
  checkFirstLaunch: async () => {
    const value = await AsyncStorage.getItem("alreadyLaunched");
    if (value === null) {
      await AsyncStorage.setItem("alreadyLaunched", "true");
      set({ isFirstLaunched: true });
    } else {
      set({ isFirstLaunched: false });
    }
  },
  completeOnboarding: async () => {
    await AsyncStorage.setItem("alreadyLaunched", "true");
    set({ isFirstLaunched: false });
  },
}));

export default useOnBoardingStore;
