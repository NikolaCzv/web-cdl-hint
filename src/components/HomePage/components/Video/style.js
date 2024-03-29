import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
  position: relative;
`;

export const VideoTextWrapper = styled.div`
    z-index: 1;
    position: absolute;
    font-weight: bold;
    color: ${colors.white};
    font-size: 36px;
    bottom: 40px;
    padding: 10px 40px;

  @media only screen and (max-width: 768px){
    font-size: 24px;
    padding: 10px 20px;
  };
`;

export const VideoText = styled.p`
    font-size: 24px; 
    font-weight: normal; 
    margin-top: 12px;

  @media only screen and (max-width: 768px){
    font-size: 16px;
  };
`;
