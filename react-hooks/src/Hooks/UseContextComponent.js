import Content from "../Components/UseContext/Content";
import {ThemeContext} from "../Components/UseContext/ThemeContext";
import {useContext} from "react";
export default function UseContextComponent()
{
    const context = useContext(ThemeContext);
    return (
        <>
            <button onClick={context.toogle}>Toogle theme</button>
            <Content></Content>
        </>
    )
}