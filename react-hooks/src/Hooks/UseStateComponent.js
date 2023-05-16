import {useState} from "react";

const orders = [100,200,300];
export default function UseStateComponent() {
    // Syntax
    // const [state, setState] = useState(initialState)


    // use state without initial value
    // const [count, setCount] = useState();

    // use state with initial value
    const [count, setCount] = useState(() => orders.reduce((total, current) => total + current));
    const handleIncrease = () => {
        setCount(count+1);

        // set state with callback
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </>
    )
}