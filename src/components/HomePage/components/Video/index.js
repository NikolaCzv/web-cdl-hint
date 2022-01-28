import React, { useRef, useState } from "react"
import homeVideo from "../../../../assets/videos/homeVideo.mp4";
import hamburger from "../../../../assets/icons/hamburger-menu.svg";
import { navigate } from "gatsby";
import { useOutsideClick } from "../../../../hooks/useOutsideClick"
import {
  Container,
  MobileMenu,
  MenuButtonsWrapper,
  VideoTextWrapper,
  VideoText
} from './style';
import {
    TopLogo,
    TopMenuButton,
    MobileMenuButton,
    TopMenu,
    TopButtonsWrapper,
    HamburgerMenu
 } from '../../../style';
import verticalLogo from '../../../../images/verticalLogo.png';

export const Video = ({ toggleContactUs }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenu = useRef();
  useOutsideClick(mobileMenu, () => setShowMobileMenu(false));

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
        <TopMenu>
            <TopLogo src={verticalLogo} />
            <TopButtonsWrapper>
              <TopMenuButton onClick={async () => await navigate('/about-us')}>
                ABOUT US
              </TopMenuButton>
              <TopMenuButton onClick={toggleContactUs}>
                CONTACT US
              </TopMenuButton>
              <TopMenuButton onClick={() => {
                window.open("https://app.cdlhint.com/login", "_blank")
              }}>
                LOGIN
              </TopMenuButton>
              <HamburgerMenu
                src={hamburger}
                ref={mobileMenu}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            </TopButtonsWrapper>
        </TopMenu>
        <MobileMenu show={showMobileMenu}>
            <MenuButtonsWrapper>
              <MobileMenuButton onClick={async () => {
                await navigate('/about-us');
                setShowMobileMenu(false);
              }}>
                ABOUT US
              </MobileMenuButton>
              <MobileMenuButton onClick={() => {
                toggleContactUs();
                setShowMobileMenu(false);
              }}>
                CONTACT US
              </MobileMenuButton>
              <MobileMenuButton onClick={() => {
                window.open("https://app.cdlhint.com/login", "_blank")
              }}>
                LOGIN
              </MobileMenuButton>
            </MenuButtonsWrapper>
        </MobileMenu>
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
