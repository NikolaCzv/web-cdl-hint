import React from 'react';
import { Image } from './style';
import { 
    TopLogo,
    TopMenuButton,
    TopMenu,
    TopButtonsWrapper,
    HamburgerMenu
 } from '../../../style';

import aboutUs from '../../../../images/aboutUs.png';
import hamburger from "../../../../assets/icons/hamburger-menu.svg";
import verticalLogo from '../../../../images/verticalLogo.png';
import { navigate } from "gatsby";


const MainImage = ({ toggleContactUs }) => {
    return (
        <div>
            <Image src={aboutUs}/>
            <TopMenu>
                <TopLogo src={verticalLogo} />
                <TopButtonsWrapper>
                    <TopMenuButton onClick={() => navigate('/')}>
                        HOME
                    </TopMenuButton>
                    <TopMenuButton onClick={toggleContactUs}>
                        CONTACT US
                    </TopMenuButton>
                    {/* <TopMenuButton>GIVEAWAY</TopMenuButton> */}
                    <TopMenuButton>LOGIN</TopMenuButton>
                    <HamburgerMenu src={hamburger}/>
                </TopButtonsWrapper>
            </TopMenu>
        </div>
    );
};

export default MainImage;
