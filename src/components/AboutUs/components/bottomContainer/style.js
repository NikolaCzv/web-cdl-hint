import styled from 'styled-components';
import { fonts } from '../../../../utils/fonts';


export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 70vh;
    align-items: center;
    justify-content: center;
`;

export const MainText = styled.h1`
    font-family: ${fonts.main};
    font-size: 36px;
`;

export const SubText = styled.div`
    text-align: center;
    font-size 28px;
    width: 50%;
`;