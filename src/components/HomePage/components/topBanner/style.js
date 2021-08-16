import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";

export const Container = styled.div`
    height: 40px;
    background-color: ${colors.main};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 64px;
    padding-right: 64px;
    @media only screen and (max-width: 768px){
        padding-left: 5px;
        padding-right: 5px;
    };
`;

export const TextHolder = styled.div`
    color: ${colors.white};
    font-family: ${fonts.main};
    font-size: 16px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    };
`;

export const ApplyToday = styled.a`
    text-decoration: underline;
    cursor: pointer;
    color: ${colors.white};
`;