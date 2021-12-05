import styled from "styled-components";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

export const TopMenu = styled.div`
    z-index: 1;
    position: absolute;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    top: 6%;
    padding-left: 60px;
    @media only screen and (max-width: 1170px){
        width: 90%;
        padding-left: 20px;
    }
    @media only screen and (max-width: 768px){
        padding-left: 0px;
        width: 95%;
    };
`;

export const TopButtonsWrapper = styled.div`
    background-color: inherit;
    border: none;
`;

export const TopMenuButton = styled.button`
    border: none;
    background-color: inherit;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    color: ${colors.white};
    font-family: ${fonts.main};
    &:hover {
        color: ${colors.subMain};
    }
    @media only screen and (max-width: 768px){
        display: none;
    };
    @media only screen and (max-width: 1170px){
        display: none;
    }
`;

export const HamburgerMenu = styled.img`
    display: none;
    color: ${colors.white};
    @media only screen and (max-width: 1170px){
        display: block;
        color: ${colors.white};
        margin-top: 5px;
    }
`;

export const TopLogo = styled.img`
    cursor: pointer;
    @media screen and (device-aspect-ratio: 40/71) {
        margin-top: 1.75rem;
        margin-left: 1.25rem;
        width: 10rem;
    }
    @media screen and (device-aspect-ratio: 375/667) {
        margin-top: 1.75rem;
        margin-left: 1.25rem;
        width: 10rem;
    }
    @media only screen and (min-width: 769px){
        width: 250px;
        height: 70px;
    };
    @media only screen and (min-width: 1024px){
        width: 270px;
        height: 80px;
    }
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3){
        width: 270px;
        height: 80px;
        margin-top: 15px;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        margin-top: 15px;
    };
    @media only screen and (max-width: 768px){
        margin-top: 20px;
        margin-left: 20px;
        width: 160px;
        height: 50px;
    };
`;
