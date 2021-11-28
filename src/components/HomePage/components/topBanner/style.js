import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";

//Iphone 5/SE (device-aspect-ratio: 40/71)
//Iphone 6 (device-aspect-ratio: 375/667)

export const Container = styled.div`
    height: 2.5rem;
    background-color: ${colors.main};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 4rem;
    padding-right: 4rem;
    @media screen and (device-aspect-ratio: 40/71) {
        height: 3.5rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }
    @media screen and (device-aspect-ratio: 375/667) {
        height: 3.75rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        height: 3.5rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        height: 3.5rem;
        padding-left: 0.3rem;
        padding-right: 0.3rem;
    }
`;
    // @media only screen and (max-width: 768px){
    //     padding-left: 20px;
    //     padding-right: 5px;
    //     height: 55px;
    // };

export const TextHolder = styled.div`
    color: ${colors.white};
    font-family: ${fonts.main};
    font-size: 16px;
    @media screen and (device-aspect-ratio: 40/71) {
        font-size: 14px;
    }
    @media screen and (device-aspect-ratio: 375/667) {
        font-size: 14px;
    }
    `;
    // @media only screen and (max-width: 768px){
    //     font-size: 14px;
    //     display: flex;
    //     flex-direction: column;
    // };

export const PhoneHolder = styled.div`
    @media only screen and (max-width: 768px){
        display: none;
    };
`;

export const IconHolder = styled.img`
    display: none;
    @media only screen and (max-width: 768px){
        display: block;
        width: 60%;
    };
`;

export const ApplyToday = styled.a`
    text-decoration: underline;
    cursor: pointer;
    color: ${colors.white};
`;