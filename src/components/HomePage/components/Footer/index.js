import React from 'react';
import {
  BottomLogo,
  Container,
  MediaWrapper,
  Media,
  Copyright,
  FollowUs,
  ButtonsWrapper,
  Button
} from "./style";
import verticalLogo from '../../../../images/verticalLogo.png';
import facebook from '../../../../assets/icons/facebook.svg';
import instagram from '../../../../assets/icons/instagram.svg';
import linkedin from '../../../../assets/icons/linkedin.svg';

import { navigate } from "gatsby"
import { FACEBOOK_LINK, LINKEDIN_LINK, INSTAGRAM_LINK } from "../../../../utils/constants"

export const Footer = ({ toggleContactUs }) => {
  const handleSocialMediaUrl = (url) => () => window.open(url, "_blank");

    return(
        <Container>
            <BottomLogo src={verticalLogo}/>
            <FollowUs>
                FOLLOW US ON SOCIAL MEDIA
            </FollowUs>
            <MediaWrapper>
                <Media src={facebook} onClick={handleSocialMediaUrl(FACEBOOK_LINK)} />
                <Media src={instagram} onClick={handleSocialMediaUrl(INSTAGRAM_LINK)} />
                <Media src={linkedin} onClick={handleSocialMediaUrl(LINKEDIN_LINK)} />
            </MediaWrapper>
            <ButtonsWrapper>
                <Button onClick={() => navigate('/about-us')}>
                    ABOUT US
                </Button>
                <Button onClick={() => alert("TODO -> terms and conditions")}>
                    TERMS & CONDITIONS
                </Button>
                <Button onClick={toggleContactUs}>
                    CONTACT US
                </Button>
            </ButtonsWrapper>
            <Copyright>Copyright CDL Hint ® 2021. All Rights Reserved.</Copyright>
        </Container>
    )
};

