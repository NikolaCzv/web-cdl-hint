import styled from "styled-components"
import { colors } from "../../utils/colors"

export const MenuButton = styled.button`
  border: none;
  background-color: inherit;
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: ${colors.white};
  &:hover {
    color: ${colors.subMain};
  }
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

export const TopLogo = styled.img`
    cursor: pointer;
    width: 150px;
`;

export const TopMenuButton = styled(MenuButton)`
    @media only screen and (max-width: 768px){
        display: none;
    };
`;

export const MobileMenuButton = styled(MenuButton)`
  margin: 20px;
`;

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

export const HamburgerMenu = styled.img`
    display: none;
  
    @media only screen and (max-width: 768px){
        display: block;
        width: 25px;
        margin-bottom: 5px;
        cursor: pointer;
    }
`;
