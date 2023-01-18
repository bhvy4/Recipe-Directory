import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme =()=> {

    const theme = useContext(ThemeContext);
    if(theme === undefined){
        throw new Error("must be used inside themeprovider")
    }
    return theme
}