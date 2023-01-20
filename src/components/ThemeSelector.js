import { useTheme } from "../hooks/useTheme"
import './ThemeSelector.css'

export default function ThemeSelector() {
    const themeColors = ['#58249c', '#249c6b', '#b70233'];
    const { changeColor } = useTheme();

    return (
        <div className="theme-selector">
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div
                        key={color}
                        style={{ background: color }}
                        onClick={() => changeColor(color)}
                    />
                ))}

            </div>

        </div>
    )
}
