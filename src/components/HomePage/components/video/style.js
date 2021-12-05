import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";

//Iphone 5/SE @media screen and (device-aspect-ratio: 40/71)
//Iphone 6 (device-aspect-ratio: 375/667)

export const VideoTitle = styled.div`
    z-index: 1;
    position: absolute;
    font-family: ${fonts.main};
    font-weight: bold;
    color: ${colors.white};
    font-size: 44px;
    @media screen and (device-aspect-ratio: 40/71){
        font-size: 24px;
        bottom: 30%;
        padding-left: 1.25rem;
    };
    @media screen and (device-aspect-ratio: 375/667){
        font-size: 20px;
        bottom: 6%;
        padding-left: 1.25rem;
    }
    @media only screen and (min-width: 769px){
        font-size: 32px;
        padding-left: 20px;
        bottom: 20%;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        font-size: 28px;
        padding-left: 20px;
        bottom: 16%;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        font-size: 28px;
        padding-left: 20px;
        bottom: 10%;
    };
    @media only screen and (min-width: 1024px){
        font-size: 44px;
        padding-left: 60px;
        bottom: 30%;
    };
    @media only screen and (max-width: 768px){
        font-size: 24px;
        bottom: 30%;
        padding-left: 20px;
    };
`;

export const VideoText = styled.p`
    font-size: 24px; 
    font-weight: normal; 
    margin-top: 12px;
    @media screen and (device-aspect-ratio: 40/71) {
        font-size: 16px;
    }
    @media screen and (device-aspect-ratio: 375/667) {
        font-size: 16px;
    }
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3) {
        font-size: 16px;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        font-size: 18px;
    };
    @media only screen and (max-width: 768px){
        font-size: 18px;
    };
`;