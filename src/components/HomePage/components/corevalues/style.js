import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180vh;
    justify-content: space-evenly;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    height: 30%;
    background-color: ${colors.grayBackground};
    width: 90%;
    @media only screen and (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
    };
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 768px){
        width: 30vh;
        height: 30vh;
    };
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ContentAlt = styled.div`
    justify-content: space-evenly;
    align-items: end; 
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const CardTitle = styled.h1`
    font-weight: bold;
    font-size: 36px;
    font-family: ${fonts.main};

`;

export const CardSub = styled.div`
    font-size: 24px;
    width: 65%;
    font-family: ${fonts.main};
`;

export const Icon = styled.img`
    width: 12%;
    height: 15%;   
`;

