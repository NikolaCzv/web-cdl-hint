import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
  position: relative;
`;

export const MobileMenu = styled.div`
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 7px;
  background-color: ${colors.main};
  z-index: 2;

  ${props => props.show ? `
    display: block;
  ` : `
    display: none;
  `}
`;

export const MenuButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const VideoTextWrapper = styled.div`
    z-index: 1;
    position: absolute;
    font-weight: bold;
    color: ${colors.white};
    font-size: 36px;
    bottom: 40px;
    padding: 10px;

  @media only screen and (max-width: 768px){
    font-size: 24px;
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
