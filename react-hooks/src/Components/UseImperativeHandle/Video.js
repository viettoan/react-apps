import video from './../../video/Download.mp4'
import {forwardRef, useImperativeHandle, useRef} from "react";
function Video(prop, ref) {
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
            <video ref={videoRef} src={video} height={500}/>
        </>
    )
}

export default forwardRef(Video)