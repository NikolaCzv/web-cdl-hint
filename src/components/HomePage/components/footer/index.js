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
import Facebook from '../../../../assets/icons/fb.png';
import Instagram from '../../../../assets/icons/insta.png';
import Twitter from '../../../../assets/icons/twitter.png';
import Youtube from '../../../../assets/icons/youtube.png';

const Footer = () => {
    return(
        <Container>
            <BottomLogo src={verticalLogo}/>
            <FollowSub>
                Subscribe and Follow!
            </FollowSub>
            <MediaWrapper>
                <Media src={Facebook}/>
                <Media src={Instagram}/>
                <Media src={Twitter}/>
                <Media src={Youtube} />
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

