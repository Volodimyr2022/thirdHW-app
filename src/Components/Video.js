import React, {useRef, useState } from "react";
import Video from "../Video/pexels-pixabay-854759-1280x720-30fps.mp4"

const VideoPlayer = () => {

    const videoRef = useRef()
    const [isPlay, setIsPlay] = useState(false)

    const playButton = () => {
        videoRef.current.play();
        setIsPlay(true)
    }

    const pauseButton = () => {
        videoRef.current.pause();
        setIsPlay(false)
    }

    const totalPlay = () => {
        videoRef.current.duration()
    }

    return (
        <div>
            <Video ref={videoRef}>
             <source src={Video} />  
            </Video>
            <div>
                <button className="button" onClick={playButton}>Play</button>
                <button className="button" onClick={pauseButton}>Pause</button> 
            </div>
            <p>Time - {totalPlay}</p>
        </div>
    )

}

export default VideoPlayer