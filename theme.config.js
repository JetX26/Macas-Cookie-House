import { createTheme } from "next-themes";

export const lightTheme = createTheme({
  mode: "light",
  colors: {
    primary: "#fff",
    foreground: "#333",
  },
});

export const darkTheme = createTheme({
  mode: "dark",
  colors: {
    primary: "#222",
    foreground: "#fff",
  },
});

export const defaultTheme = lightTheme;

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      themes={[lightTheme, darkTheme]}
      defaultTheme={defaultTheme}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
