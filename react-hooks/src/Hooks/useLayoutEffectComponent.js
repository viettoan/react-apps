import {useEffect, useLayoutEffect, useState} from "react";

export default function UseLayoutEffectComponent() {

    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])

    // useEffect(() => {
    //     if (count > 3) {
    //         setCount(0);
    //     }
    // }, [count]);
    const handleIncrease = () => {
        setCount(count+1);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
}