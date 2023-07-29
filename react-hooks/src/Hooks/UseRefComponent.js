import {useEffect, useRef, useState} from "react";

export default function UseRefComponent() {

    const [count, setCount] = useState(0);
    const timerId = useRef()
    const h1Ref = useRef();
    useEffect(() => {
        console.log(h1Ref);
    }, [count])
    const test = null;
    const handleIncrease = () => {
        timerId.current = setInterval(() => {
            setCount((prevCount => prevCount +1));
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current);
    }

    return (
        <>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}