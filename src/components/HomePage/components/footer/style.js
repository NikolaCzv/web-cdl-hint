import styled from 'styled-components';
import { colors } from '../../../../utils/colors';
import { fonts } from '../../../../utils/fonts';
import footerWallpaper from '../../../../images/footerwp.png';

//Iphone 5/SE (device-aspect-ratio: 40/71)
//Iphone 6 (device-aspect-ratio: 375/667)

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
    @media only screen and (device-aspect-ratio: 40/71){
        height: 45vh;
    };
    @media only screen and (device-aspect-ratio: 375/667){
        height: 45vh;
    }
`;

// @media only screen and (max-width: 768px){
//     height: 30vh;
// };

export const BottomLogo = styled.img`
    margin-top: 15px;

    @media only screen and (device-aspect-ratio: 40/71){
        width: 10rem;
    };

    @media only screen and (device-aspect-ratio: 375/667){
        width: 10rem;
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

// @media only screen and (max-width: 768px){
//     width: 160px;
//     height: 50px;
// };

export const FollowSub = styled.h2`
    color: ${colors.white};
    font-family: ${fonts.main};
    @media only screen and (device-aspect-ratio: 40/71){
        font-size: 18px;
    };
    @media only screen and (device-aspect-ratio: 375/667){
        font-size: 18px;
    };
`;

export const MediaWrapper = styled.div`
    text-align: -webkit-center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
`;

export const Media = styled.img`
    @media only screen and (device-aspect-ratio: 40/71){1
        width: 1.875rem;
        margin-bottom: 1rem;
        margin-right: 0rem;
    };
    @media only screen and (device-aspect-ratio: 375/667){
        width: 1.875rem;
        margin-bottom: 1rem;
        margin-right: 0rem;
    };
`;

// (device-aspect-ratio: 40/71)

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


