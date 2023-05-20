import Video from "../Components/UseImperativeHandle/Video";
import {useEffect, useRef} from "react";
export default function UseImperativeHandle() {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }


    return (
        <>
            <Video ref={videoRef}></Video>
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </>
    )
}