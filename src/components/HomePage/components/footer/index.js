import React from 'react';
import { 
    BottomLogo, 
    Container, 
    FollowSub, 
    MediaWrapper, 
    Media, 
    FooterButton, 
    Copyright 
    } from './style';
import verticalLogo from '../../../../images/verticalLogo.png';
import facebook from '../../../../assets/icons/facebook.svg';
import instagram from '../../../../assets/icons/instagram.svg';
import linkedin from '../../../../assets/icons/linkedin.svg';

import { navigate } from "gatsby"  

const Footer = () => {
    return(
        <Container>
            <BottomLogo src={verticalLogo}/>
            <FollowSub>
                FOLLOW US ON SOCIAL MEDIA
            </FollowSub>
            <MediaWrapper>
                <Media src={facebook}/>
                <Media src={instagram}/>
                <Media src={linkedin}/>
            </MediaWrapper>
            <div>
                <FooterButton onClick={() => navigate('/about-us')}>
                    ABOUT US
                </FooterButton>
                {/* <FooterButton>
                    MY ACCOUNT
                </FooterButton> */}
                <FooterButton>
                    TERMS & CONDITIONS
                </FooterButton>
                <FooterButton onClick={() => navigate('/contact-us')}>
                    CONTACT US
                </FooterButton>
            </div>
            <Copyright>Copyright CDL Hint ® 2021. All Rights Reserved.</Copyright>
        </Container>
    )
};

export default Footer;

