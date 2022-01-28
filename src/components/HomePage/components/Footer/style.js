import styled from 'styled-components';
import { colors } from '../../../../utils/colors';
import footerWallpaper from '../../../../images/footerwp.png';
import { MenuButton } from "../../../style"

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60vh;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footerWallpaper});
    background-size: cover;
`;

export const BottomLogo = styled.img`
    width: 150px;
`;

export const FollowUs = styled.h2`
    color: ${colors.white};
    font-size: 16px;
`;

export const MediaWrapper = styled.div`
    text-align: -webkit-center;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const Media = styled.img`
    cursor: pointer;
    margin: 0 10px;
`;

export const Copyright = styled.h4`
    color: ${colors.white};
    font-size: 12px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 768px){
    flex-direction: column;
  };
`;

export const Button = styled(MenuButton)`
  width: 200px;

  @media only screen and (max-width: 768px){
    margin-bottom: 20px;
  };
`;


