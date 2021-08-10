import React from 'react';
import homeVideo from "../../assets/videos/homeVideo.mp4";
import { VideoTitle } from './style';

const MainVideo = () => {
    return (
    <>
        <video
            autoplay="autoplay"
            muted
            loop
            style={{
                objectFit: "cover",
                width: "100vw",
                height: "80vh",
                position: "fixed",
                top: 0,
                left: 0,
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