import "./ThemeSelector.css";

import { useTheme } from "../hooks/useTheme";

const themeColors = ["#53119E", "#457A4D", "#FA2855"];

export default function ThemeSelector() {
  const { changeColor } = useTheme();
  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}
