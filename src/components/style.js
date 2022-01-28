import styled from "styled-components";
import { colors } from '../utils/colors';
import { fonts } from '../utils/fonts';

export const TopMenu = styled.div`
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

export const TopButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MenuButton = styled.button`
  border: none;
  background-color: inherit;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: ${colors.white};
  font-family: ${fonts.main};
  &:hover {
    color: ${colors.subMain};
  }
`;

export const TopMenuButton = styled(MenuButton)`
    @media only screen and (max-width: 768px){
        display: none;
    };
`;

export const MobileMenuButton = styled(MenuButton)`
  margin: 20px;
`;

export const HamburgerMenu = styled.img`
    display: none;
  
    @media only screen and (max-width: 768px){
        display: block;
        width: 25px;
        margin-bottom: 5px;
        cursor: pointer;
    }
`;

export const TopLogo = styled.img`
    cursor: pointer;
    width: 150px;
`;
