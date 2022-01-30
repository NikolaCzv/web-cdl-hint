import React from "react"
import {
  Container,
  VideoTextWrapper,
  VideoText
} from './style';

import homeVideo from "../../../../assets/videos/homeVideo.mp4";

import { Header } from "../../../Header";

export const Video = ({ toggleContactUs }) => {
    return (
    <Container>
        <video
            autoPlay="autoplay"
            muted
            loop
            style={{
                objectFit: "cover",
                width: "100%",
                height: "80vh",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
        >
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <Header toggleContactUs={toggleContactUs} />
        <VideoTextWrapper>
            Come join CDL HINT family TODAY!
            <VideoText>
                You are only a few clicks away from your dream job!
                We tend to be the safest bridge you will cross in your career!
            </VideoText>
        </VideoTextWrapper>
    </Container>
    )
};
