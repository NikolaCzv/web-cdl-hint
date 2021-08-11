import styled from "styled-components";
import { colors } from "../../utils/colors";
import { fonts } from "../../utils/fonts";

export const VideoTitle = styled.h1`
    z-index: 2;
    position: absolute;
    font-family: ${fonts.main};
    font-weight: bold;
    color: ${colors.white};
    width: 100%;
    bottom: 145px;
    font-size: 44px;
    @media only screen and (max-width: 768px){
        font-size: 24px;
        left: 40px;
        bottom: 40%;
        width: 100%;
    };
    @media only screen and (min-width: 769px){
        font-size: 32px;
        left: 60px;
        bottom: 40%;
        width: 100%;
    };
    @media only screen and (min-width: 1024px){
        font-size: 44px;
        left: 60px;
        bottom: 40%;
        width: 100%;
    }
`;

export const TopLogo = styled.img`
    @media only screen and (max-width: 768px){
        width: 160px;
        height: 50px;
    };
    @media only screen and (min-width: 769px){
        width: 250px;
        height: 70px;
    };
    @media only screen and (min-width: 1024px){
        width: 270px;
        height: 80px;
    }
`;

export const TopMenu = styled.div`
    z-index: 2;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    top: 3%;
    padding-left: 60px;
    @media only screen and (max-width: 1170px){
        width: 90%;
    }
    @media only screen and (max-width: 768px){
        padding-left: 40px;
    };
`;

export const TopButtonsWrapper = styled.div`
    background-color: inherit;
    border: none;
    padding-right: 120px;
    @media only screen and (max-width: 768px){
        display: none;
    };
    @media only screen and (max-width: 1170px){
        display: none;
    }
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
`;

export const HamburgerMenu = styled.img`
    display: none;
    color: ${colors.white};
    @media only screen and (max-width: 1170px){
        display: block;
        color: ${colors.white};
    }
`;