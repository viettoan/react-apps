import {memo} from "react";
function Content({onIncrease}) {
    console.log(111);
    return (
        <>
            {/*<h1>*/}
            {/*    Count 2: {count2}*/}
            {/*</h1>*/}
            <button onClick={onIncrease}>Increase 1</button>
        </>
    )
}

export default memo(Content)