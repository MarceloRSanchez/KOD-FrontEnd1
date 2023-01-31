import "./styles.css";
import { useTheme } from './ThemeContext'

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <h1>Current theme: {theme}</h1>
      <p>
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
    </div>
  );
}
