import React from 'react';
import { 
    TopMenu, 
    TopMenuButton, 
    TopButtonsWrapper, 
    TopLogo, 
    HamburgerMenu 
} from './style';
import verticalLogo from '../../../images/verticalLogo.png';
import { navigate } from 'gatsby';
import hamburger from "../../../assets/icons/hamburger-menu.svg";

const NavBar = () => {

    const returnHome = () => {
        navigate('/');
    };

    const handleAboutUs = () => {
        navigate('/about-us');
    };

    const handleContactUs = () => {
        navigate('/contact-us');
    };

    const handleGiveaway = () => {
        navigate('/giveaway');
    };

    const handleLogin = () => {
        navigate('/');
    };

    return(
        <TopMenu>
            <TopLogo src={verticalLogo} onClick={() => returnHome()}/>
            <TopButtonsWrapper>
                <TopMenuButton onClick={() => handleAboutUs()}>ABOUT US</TopMenuButton>
                <TopMenuButton onClick={() => handleContactUs()}>CONTACT US</TopMenuButton>
                <TopMenuButton onClick={() => handleGiveaway()}>GIVEAWAY</TopMenuButton>
                <TopMenuButton onClick={() => handleLogin()}>LOGIN</TopMenuButton>
                <HamburgerMenu src={hamburger}/>
            </TopButtonsWrapper>
        </TopMenu>
    );
};

export default NavBar;