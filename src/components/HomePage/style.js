import styled from "styled-components";

export const VideoTitle = styled.h1`
    z-index: 2;
    position: absolute;
    font-family: Gill Sans, sans-serif;
    font-weight: bold;
    color: #FFFFFF;
    width: 41%;
    bottom: 145px;
    font-size: 44px;
    @media only screen and (max-width: 768px){
        font-size: 24px;
        left: 20px;
        top: 60%;
        width: 60%;
    };
    @media only screen and (min-width: 769px){
        font-size: 32px;
        left: 20px;
        bottom: 30%;
        width: 45%;
    };
    @media only screen and (min-width: 1024px){
        font-size: 44px;
        left: 20px;
        bottom: 30%;
        width: 35%;
    }
`;