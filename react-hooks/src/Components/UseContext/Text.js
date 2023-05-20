import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
export default function Text()
{
    const context = useContext(ThemeContext);

    return (
        <p className={context.theme}>Text</p>
    )
}