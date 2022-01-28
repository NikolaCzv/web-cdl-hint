import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";

export const Container = styled.div`
    background-color: ${colors.grayBackground};
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    @media only screen and (max-width: 760px){
        height: 90vh;
    };
`;

export const Header = styled.div`
    font-size: 36px;
    font-family: ${fonts.main};
    margin: 0px 0px 20px 0px;
    color: ${colors.main};
    @media only screen and (max-width: 760px){
        font-size: 32px;
    };
`;

export const TextContent = styled.div`
    font-size: 24px;
    font-family: ${fonts.main};
    width: 75%;
    display: flex;
    text-align: center;
    font-weight: 100;
    @media only screen and (max-width: 760px){
        font-size: 20px;
    };
`;