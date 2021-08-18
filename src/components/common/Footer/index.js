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
import verticalLogo from '../../../images/verticalLogo.png';
import facebook from '../../../assets/icons/facebook.svg';
import instagram from '../../../assets/icons/instagram.svg';
import linkedin from '../../../assets/icons/linkedin.svg';

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
                <FooterButton>
                    ABOUT US
                </FooterButton>
                <FooterButton>
                    MY ACCOUNT
                </FooterButton>
                <FooterButton>
                    TERMS & CONDITIONS
                </FooterButton>
                <FooterButton>
                    CONTACT US
                </FooterButton>
            </div>
            <Copyright>Copyright 2021. All Rights Reserved.</Copyright>
        </Container>
    )
};

export default Footer;

