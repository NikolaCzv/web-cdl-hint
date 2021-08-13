import styled from 'styled-components';
import { colors } from '../../../../utils/colors';
import { fonts } from '../../../../utils/fonts';
import FooterWallpaper from '../../../../images/footerwp.jpg';

export const Container = styled.div`
    display: flex;
    Width: 100%;
    height: 50vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    background-image: ${FooterWallpaper};
    background-color: black;
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
    }
`;

export const FollowSub = styled.h2`
    color: #FFFFFF

`
export const MediaWrapper = styled.div`
    text-align: -webkit-center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 40%;
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    };
`
export const Media = styled.img`
@media only screen and (max-width: 768px){
    height: 30px;
    width: 30px;
    margin-bottom: 15px;
    margin-right: 0px;
};
`
export const FooterButtonWrapper = styled.div`

`
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
`


