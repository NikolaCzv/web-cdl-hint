import styled from 'styled-components';
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";

export const Container = styled.div`
    background-color: ${colors.gray};
    height: 75vh;
    width: 100%;
    padding: 80px 64px 32px 80px;
`;

export const TabButton = styled.button`
    background-color: ${props => props.selected ? colors.white : "inherit"};
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    display: inline-block;
    font-family: ${fonts.main};
    border-bottom-style: none;
    border-left-style: none;
    border-right-style: none;
    border-top-style: ${props => props.selected ? "solid" : "none"};
    border-color: ${colors.main};
    border-width: medium;

    &:hover {
        background-color: ${colors.main};
        color: ${colors.white};
    }
`;

export const Tab = styled.div`
    overflow: hidden;
    width: auto;
`;

export const TabContent = styled.div`
    padding: 6px 12px;
    height: 60vh;
    width: 90%;
    background-color: ${colors.white};
    border-top: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ListText = styled.div`
    font-size: 72px;
    background: -webkit-linear-gradient(${colors.main}, ${colors.subMain});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;