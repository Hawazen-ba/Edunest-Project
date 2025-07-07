import { useThemeStore } from "../../utils/ThemeStore";

const useColors = () => {
  const theme = useThemeStore((state) => state.theme);
  return {
    primary: theme.primary,
    secondary: theme.secondary,
    tertiary: theme.tertiary,
    color2: theme.color2,
    color3: theme.color3,
    background: theme.background,
    text: theme.text,
    subtitle: theme.subtitle,
    error: theme.error,
  };
};

export default useColors;
