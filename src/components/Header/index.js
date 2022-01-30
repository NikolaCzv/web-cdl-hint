import React, { useRef, useState } from "react"
import { navigate } from "gatsby";
import { MobileMenu, MenuButtonsWrapper, HamburgerMenu, TopButtonsWrapper, TopLogo, TopMenuButton, MobileMenuButton, TopMenu } from "./style";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { APP_LOGIN_LINK } from "../../utils/constants"

import verticalLogo from '../../images/verticalLogo.png';
import hamburger from "../../assets/icons/hamburger-menu.svg";

export const Header = ({ toggleContactUs }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const mobileMenu = useRef();
  useOutsideClick(mobileMenu, () => setShowMobileMenu(false));

    return (
        <>
          <TopMenu>
            <TopLogo
              onClick={() => navigate("/")}
              src={verticalLogo}
            />
            <TopButtonsWrapper>
              <TopMenuButton onClick={async () => await navigate('/about-us')}>
                ABOUT US
              </TopMenuButton>
              <TopMenuButton onClick={toggleContactUs}>
                CONTACT US
              </TopMenuButton>
              <TopMenuButton onClick={() => {
                window.open(APP_LOGIN_LINK, "_blank")
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
                window.open(APP_LOGIN_LINK, "_blank")
              }}>
                LOGIN
              </MobileMenuButton>
            </MenuButtonsWrapper>
          </MobileMenu>
        </>
    )
}
