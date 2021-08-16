import styled from 'styled-components';
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";
import { Input } from 'antd';

export const Container = styled.div`
    background-color: ${colors.grayBackground};
    height: 70vh;
    padding: 80px 64px 32px 80px;
    @media only screen and (max-width: 768px){
        height: 85vh;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    };
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
    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
`;

export const Tab = styled.div`
    width: auto;
    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    };
`;

export const TabContent = styled.div`
    height: 50vh;
    width: 100%;
    background-color: ${colors.white};
    border-top: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px){
        height: 70vh;
        flex-direction: column;
    };
`;

export const ListText = styled.div`
    font-size: 72px;
    background: -webkit-linear-gradient(${colors.main}, ${colors.subMain});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const Form = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
    @media only screen and (max-width: 768px){
        height: 45vh;
        flex-direction: column;
        justify-content: center;
    };
`;

export const InputFieldWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const InputField = styled(Input)`
    font-family: ${fonts.main};
    margin-bottom: 1.5rem;
    width: 80%;
`;

export const ApplyButton = styled.button`
    background-color: inherit;
    display: inline-block;
    font-family: ${fonts.main};
    border-color: ${colors.main};
    border-width: thin;
    border-radius: 2px;
    color: ${colors.main};
    cursor: pointer;
    width: 10.5rem;
    height: 2rem;
    margin-top: 40px;

    &:hover {
        background-color: ${colors.main};
        color: ${colors.white};
    }
    @media only screen and (max-width: 768px){
        height: 44px;
        width: 180px;
        font-size: 16px;
    };
`;