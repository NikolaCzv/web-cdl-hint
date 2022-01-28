import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
    width: 100%;
    background-color: ${colors.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    @media only screen and (max-width: 768px){
      flex-direction: column;
    };
`;

export const TextHolder = styled.div`
    color: ${colors.white};
    font-size: 16px;
    width: 70%;

    @media only screen and (max-width: 768px){
      width: 100%;
      text-align: center;
    };
`;

export const PhoneHolder = styled.a`
    width: 30%;
    color: ${colors.white};
    font-size: 16px;
    text-align: right;
  
    @media only screen and (max-width: 768px){
      width: 100%;
      text-align: center;
    };
`;

export const ApplyToday = styled.span`
    cursor: pointer;
    color: ${colors.white};
    &:hover {
      text-decoration: underline;
    }

  @media only screen and (max-width: 768px){
    text-decoration: underline;
  };
`;
