import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useOnBoardingStore = create((set) => ({
  isFirstLaunched: true,
  checkFirstLaunch: () => {
    set({ isFirstLaunched: true });

    // const value = AsyncStorage.getItem("alreadyLaunched");
    // if (value === null) {
    //   AsyncStorage.setItem("alreadyLaunched", "true");
    //   set({ isFirstLaunched: true });
    // } else {
    //   set({ isFirstLaunched: false });
    // }
  },
}));

export default useOnBoardingStore;
