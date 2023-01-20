import { useTheme } from "../hooks/useTheme"
import './ThemeSelector.css'
import modeIcon from '../assets/darkmode-icon.svg'

export default function ThemeSelector() {
    const themeColors = ['#58249c', '#249c6b', '#b70233'];
    const { mode, changeColor, changeMode } = useTheme();

    const handleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    console.log('mode is : ' + mode)

    return (
        <div className="theme-selector">
            <div className="mod-toggle">
                <img
                    src={modeIcon}
                    alt="dark/light mode icon"
                    onClick={handleMode}
                    style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
                />
            </div>
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
