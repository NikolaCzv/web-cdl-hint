import styled from 'styled-components';
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";
import { Input } from 'antd';

//Iphone 5/SE @media screen and (device-aspect-ratio: 40/71)
//Iphone 6 (device-aspect-ratio: 375/667)

export const Container = styled.div`
    background-color: ${colors.grayBackground};
    height: 70vh;
    padding: 80px 64px 32px 80px;
    @media screen and (device-aspect-ratio: 40/71){
        height: 120vh;
        padding: 0rem;
    };
    @media screen and (device-aspect-ratio: 375/667){
        height: 120vh;
        padding: 0rem;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3){
        height: 120vh;
        padding: 0rem;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        height: 100vh;
        padding: 0rem;
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
    @media screen and (device-aspect-ratio: 40/71){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
    @media screen and (device-aspect-ratio: 375/667){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    };
`;

export const Tab = styled.div`
    width: auto;
    @media screen and (device-aspect-ratio: 40/71){
        display: flex;
        flex-direction: column;
    };
    @media screen and (device-aspect-ratio: 375/667){
        display: flex;
        flex-direction: column;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        display: flex;
        flex-direction: column;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
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
    @media screen and (device-aspect-ratio: 40/71){
        padding-top: 1.5rem;
        height: auto;
    };
    @media screen and (device-aspect-ratio: 375/667){
        padding-top: 1.5rem;
        height: auto;
        padding-bottom: 2rem;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        padding-top: 1.5rem;
        height: auto;
        padding-bottom: 2rem;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        padding-top: 1.5rem;
        height: auto;
        padding-bottom: 2rem;
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
    justify-content: ${props => props.isCompanyTab ? 'center' : 'space-between'};
    padding: 0px;
    @media screen and (device-aspect-ratio: 40/71){
        flex-direction: ${props => props.isCompanyTab ? 'row' : 'column'};
        justify-content: center;
    };
    @media screen and (device-aspect-ratio: 375/667){
        flex-direction: ${props => props.isCompanyTab ? 'row' : 'column'};
        justify-content: center;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        flex-direction: ${props => props.isCompanyTab ? 'row' : 'column'};
        justify-content: center;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        flex-direction: ${props => props.isCompanyTab ? 'row' : 'column'};
        justify-content: center;
    };
`;

export const InputFieldWrapper = styled.div`
    width: ${props => props.isCompanyTab ? '70%' : '100%'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const InputField = styled(Input)`
    font-family: ${fonts.main};
    margin-bottom: 1.5rem;
    width: 80%;
    height: 2.45rem;
    ::placeholder {
        font-size: 1.1em;
      }
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
    @media screen and (device-aspect-ratio: 40/71){
        width: 11.25rem;
        font-size: 16px;
        margin-top: 20px;
    };
    @media screen and (device-aspect-ratio: 375/667){
        width: 11.25rem;
        font-size: 16px;
        margin-top: 20px;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        width: 11.25rem;
        font-size: 16px;
        margin-top: 20px;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        width: 11.25rem;
        font-size: 16px;
        margin-top: 20px;
    };
`;