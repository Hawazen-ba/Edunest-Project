import { create } from "zustand";

// const Colors = {
//   primary: "#102363",
//   secondary: "#3E4C94",
//   tertiary: "#00C2CB",
//   color2: "#FF6B6B",
//   color3: "#4A90E2",
//   background: "#f0f0f0",
//   text: "#000000",
//   subtitle: "#666",
//   error: "#FF6B6B",
// };

export const lightTheme = {
  primary: "#102363",
  secondary: "#3E4C94",
  tertiary: "#00C2CB",
  background: "#f0f0f0",
  color2: "#FF6B6B",
  color3: "#4A90E2",
  text: "#000000",
  subtitle: "#666",
  error: "#FF6B6B",
};

export const darkTheme = {
  primary: "#22223B",
  secondary: "#4A4E69",
  accent: "#9A8C98",
  background: "#232323",
  text: "#F5F6FA",
  card: "#393E46",
};

const defaultTheme = lightTheme;

export const useThemeStore = create((set) => ({
  theme: defaultTheme,
  setTheme: (newTheme) => set({ theme: { ...defaultTheme, ...newTheme } }),
}));
