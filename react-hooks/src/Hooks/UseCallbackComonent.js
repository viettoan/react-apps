import {useCallback, useEffect, useRef, useState} from "react";
import Content from "../Components/UseCallback/Content";
export default function UseCallbackComonent() {

    const [count, setCount] = useState(0);
    // const [count2, setCount2] = useState(0);

    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, [])

    // const handleIncrease2 = useCallback(() => {
    //     setCount2(count2 +1);
    // }, [])

    return (
        <>
            <Content onIncrease={handleIncrease} />
            <h1>Count 1: {count}</h1>

            {/*<button onClick={handleIncrease2}>Increase 2</button>*/}
        </>
    )
}