import React from 'react';
import homeVideo from "../../assets/videos/homeVideo.mp4";
import hamburger from "../../assets/icons/hamburger-menu.svg";
import { 
    VideoTitle, 
    TopLogo, 
    TopMenuButton, 
    TopMenu,
    TopButtonsWrapper,
    HamburgerMenu
} from './style';
import verticalLogo from '../../images/verticalLogo.png';

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
                position: "absolute",
                top: 0,
                left: 0,
            }}
        >
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <TopMenu>
            <TopLogo src={verticalLogo} />
            <TopButtonsWrapper>
                <TopMenuButton>ABOUT US</TopMenuButton>
                <TopMenuButton>CONTACT US</TopMenuButton>
                <TopMenuButton>GIVEAWAY</TopMenuButton>
                <TopMenuButton>LOGIN</TopMenuButton>
                <HamburgerMenu src={hamburger}/>
            </TopButtonsWrapper>
        </TopMenu>
        <VideoTitle>
            Come join CDL HINT family TODAY! 
        </VideoTitle>
    </>
    )
};

export default MainVideo;