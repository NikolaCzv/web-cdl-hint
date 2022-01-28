import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${colors.grayBackground};
    margin-bottom: 20px;
  
    @media only screen and (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        justify-content: space-between;
    };
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
  
    @media only screen and (max-width: 768px){
        width: 100%;
    };
`;

export const ImageWrapper = styled.div`
    width: 100%;
`;

export const TextWrapper = styled.div`
    justify-content: space-evenly;
    padding: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media only screen and (max-width: 768px){
        padding: 20px;
        justify-content: center;
    };
`;

export const CardTitle = styled.h1`
    font-weight: bold;
    font-size: 36px;
    @media only screen and (max-width: 768px){
        font-size: 24px;
    };
`;

export const CardDescription = styled.div`
    font-size: 24px;
    @media only screen and (max-width: 768px){
        font-size: 24px;
    };
`;

export const Icon = styled.img`
    width: 50px;
    margin-bottom: 20px;
  
    @media only screen and (max-width: 768px){
        width: 30px;
    };
`;
