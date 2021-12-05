import React from 'react';
import homeVideo from "../../../../assets/videos/homeVideo.mp4";
import hamburger from "../../../../assets/icons/hamburger-menu.svg";
import { navigate } from "gatsby"  
import { 
    VideoTitle, 
    VideoText
} from './style';

import { 
    TopLogo,
    TopMenuButton,
    TopMenu,
    TopButtonsWrapper,
    HamburgerMenu
 } from '../../../style';
import verticalLogo from '../../../../images/verticalLogo.png';

const MainVideo = () => {
    return (
    <>  
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
                zIndex: "auto",
            }}
        >
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <TopMenu>
            <TopLogo src={verticalLogo} />
            <TopButtonsWrapper>
                <TopMenuButton onClick={() => navigate('/about-us')}>
                    ABOUT US
                </TopMenuButton>
                <TopMenuButton onClick={() => navigate('/contact-us')}>
                    CONTACT US
                </TopMenuButton>
                {/* <TopMenuButton>GIVEAWAY</TopMenuButton> */}
                <TopMenuButton>LOGIN</TopMenuButton>
                <HamburgerMenu src={hamburger}/>
            </TopButtonsWrapper>
        </TopMenu>
        <VideoTitle>
            Come join CDL HINT family TODAY!
            <VideoText>
                You are only a few click away from your dream job! 
                We tend to be the safest bridge you will cross in your career!
            </VideoText>
        </VideoTitle>
    </>
    )
};

export default MainVideo;