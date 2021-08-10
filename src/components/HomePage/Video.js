import React from 'react';
import homeVideo from "../../assets/videos/homeVideo.mp4";
import { VideoTitle } from './style';

const MainVideo = () => {
    return (
    <>
        <video 
            width="320" 
            height="240"
            autoplay
            muted
            style={{
                objectFit: "cover",
                width: "100vw",
                height: "80vh",
                position: "fixed",
                top: 0,
                left: 0,
            }}
            file={{
                autoplay: true
            }}
        >
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <VideoTitle>
            Come join CDL HINT family TODAY! 
        </VideoTitle>
    </>
    )
};

export default MainVideo;