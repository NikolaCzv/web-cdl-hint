import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
    background-color: ${colors.grayBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 20px;
`;

export const Title = styled.div`
    font-size: 36px;
    margin-bottom: 20px;
    color: ${colors.main};
  
    @media only screen and (max-width: 760px){
        font-size: 24px;
    };
`;

export const TextContent = styled.div`
    font-size: 24px;
    display: flex;
    text-align: center;
    font-weight: 100;
    max-width: 50%;
  
    @media only screen and (max-width: 760px){
        font-size: 16px;
        max-width: 80%;
    };
`;
