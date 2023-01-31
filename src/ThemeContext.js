import { useState, useContext, createContext  } from 'react';

const ThemeContext = createContext(
  'light-theme'
);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    'light'
  );

  function toggleTheme() {
    setTheme((currentTheme) =>
      currentTheme === 'light'
        ? 'dark'
        : 'light'
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error(`"useTheme" must be called inside a "ThemeProvider"`)
  }

  return context
}