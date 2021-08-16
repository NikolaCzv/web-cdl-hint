import styled from 'styled-components';
import { colors } from '../../../../utils/colors';
import { fonts } from '../../../../utils/fonts';
import footerWallpaper from '../../../../images/footerwp.png';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footerWallpaper});
    background-size: cover;
    @media only screen and (max-width: 768px){
        height: 30vh;
    };
`;

export const BottomLogo = styled.img`
    margin-top: 15px;
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
    };
`;

export const FollowSub = styled.h2`
    color: ${colors.white};
    font-family: ${fonts.main};
`;

export const MediaWrapper = styled.div`
    text-align: -webkit-center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
`;

export const Media = styled.img`
    @media only screen and (max-width: 768px){
        height: 30px;
        width: 30px;
        margin-bottom: 15px;
        margin-right: 0px;
    };
`;

export const FooterButton = styled.button`
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

export const Copyright = styled.h4`
    color: ${colors.white};
    font-family: ${fonts.main};
`;


