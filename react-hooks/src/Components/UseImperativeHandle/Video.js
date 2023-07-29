import video1 from './../../video/Download.mp4'
import {forwardRef, useImperativeHandle, useRef} from "react";
function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    }))
    return (
        <>
            <video ref={videoRef} src={video1} height={500}/>
        </>
    )
}

export default forwardRef(Video)