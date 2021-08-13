import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180vh;
    justify-content: space-evenly;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    height: 55vh;
    background-color: ${colors.grayBackground};
    width: 90%;
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;
