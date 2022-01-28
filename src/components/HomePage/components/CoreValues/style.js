import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { fonts } from "../../../../utils/fonts";

//Iphone 5/SE @media screen and (device-aspect-ratio: 40/71)
//Iphone 6 (device-aspect-ratio: 375/667)

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180vh;
    justify-content: space-evenly;
    align-items: center;
    @media screen and (device-aspect-ratio: 40/71){
        height: 330vh;
    };
    @media screen and (device-aspect-ratio: 375/667){
        height: 280vh;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        height: 305vh;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        height: 280vh;
    };
    @media only screen and (max-width: 768px){
        height: 305vh;
    };
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${colors.grayBackground};
    width: 90%;
    height: 50vh;
    @media screen and (device-aspect-ratio: 40/71){
        overflow: hidden;
        flex-direction: column;
        height: 100vh;
    };
    @media screen and (device-aspect-ratio: 375/667){
        overflow: hidden;
        flex-direction: column;
        height: 85vh;
    };
    @media only screen and (max-width: 768px){
        height: 240vh;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        overflow: hidden;
        flex-direction: column;
        height: 95vh;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        overflow: hidden;
        flex-direction: column;
        height: 85vh;
    };
    @media only screen and (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        height: 90vh;
        justify-content: space-between;
    };
`;

export const MiddleCard = styled.div`
    display: flex;
    flex-direction: row;
    height: 30%;
    background-color: ${colors.grayBackground};
    width: 90%;
    height: 50vh;
    @media screen and (device-aspect-ratio: 40/71){
        overflow: hidden;
        flex-direction: column-reverse;
        justify-content: flex-end;
        height: 100vh;
    };
    @media screen and (device-aspect-ratio: 375/667){
        overflow: hidden;
        flex-direction: column-reverse;
        justify-content: flex-end;
        height: 85vh;
    };
    @media only screen and (min-width: 769px){
        overflow: hidden;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        overflow: hidden;
        flex-direction: column-reverse;
        justify-content: flex-end;
        height: 95vh;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        overflow: hidden;
        flex-direction: column-reverse;
        justify-content: flex-end;
        height: 95vh;
    };
    @media only screen and (max-width: 768px){
        overflow: hidden;
        flex-direction: column-reverse;
        height: 90vh;
        justify-content: space-between;
    };
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    @media screen and (device-aspect-ratio: 40/71){
        width: 100%;
        height: 37.5vh;
    };
    @media screen and (device-aspect-ratio: 375/667){
        width: 100%;
        height: 37.5vh;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        width: 100%;
        height: 37.5vh;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        width: 100%;
        height: 37.5vh;
    };
    @media only screen and (max-width: 768px){
        width: 100%;
        height: 45vh;
    };
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media screen and (device-aspect-ratio: 40/71){
        width: 100%;
        height: 37.5vh;
    };
    @media screen and (device-aspect-ratio: 375/667){
        width: 100%;
        height: 37.5vh;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        width: 100%;
        height: 37.5vh;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        width: 100%;
        height: 37.5vh;
    };
    @media only screen and (max-width: 768px){
        width: 100%;
        height: 37.5vh;
    };
`;

export const ContentAlt = styled.div`
    justify-content: space-evenly;
    padding: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media screen and (device-aspect-ratio: 40/71){
        padding-left: 1.25rem;
        width: 100%;
        height: 40vh;
        justify-content: center;
        justify-content: flex-start;
        padding-top: 2rem;
    };
    @media screen and (device-aspect-ratio: 375/667){
        padding-left: 1.25rem;
        width: 100%;
        height: 40vh;
        justify-content: center;
        justify-content: flex-start;
        padding-top: 2rem;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        padding-left: 1.25rem;
        width: 100%;
        height: 40vh;
        justify-content: center;
        justify-content: flex-start;
        padding-top: 2rem;
        align-items: unset; 
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        padding-left: 1.25rem;
        width: 100%;
        height: 40vh;
        justify-content: center;
        justify-content: flex-start;
        padding-top: 2rem;
        align-items: unset; 
    };
    @media only screen and (max-width: 768px){
        padding-left: 20px;
        width: 100%;
        height: 40vh;
        justify-content: center;
    };
`;

export const CardTitle = styled.h1`
    font-weight: bold;
    font-size: 36px;
    font-family: ${fonts.main};
    @media only screen and (device-aspect-ratio: 40/71){
        font-size: 22px;
    };
    @media screen and (device-aspect-ratio: 375/667){
        font-size: 22px;
    };
    @media only screen and (min-width: 769px){
        font-size: 32px;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        font-size: 32px;
    };
    @media only screen and (max-width: 768px){
        font-size: 24px;
    };
`;

export const CardSub = styled.div`
    font-size: 24px;
    width: 65%;
    font-family: ${fonts.main};
    font-weight: 100;
    @media only screen and (device-aspect-ratio: 40/71){
        font-size: 16px;
        width: auto;
    };
    @media screen and (device-aspect-ratio: 375/667){
        font-size: 16px;
        width: auto;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        font-size: 18px;
        width: 100%;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        font-size: 20px;
        width: 100%;
    };
    @media only screen and (max-width: 768px){
        font-size: 24px;
        width: 100%;
        padding-bottom: 20px;
    };
`;

export const Icon = styled.img`
    width: 12%;
    @media only screen and (device-aspect-ratio: 40/71){
        width: 2.5rem;
        margin-bottom: 1.25rem;
    };
    @media screen and (device-aspect-ratio: 375/667){
        width: 2.5rem;
        margin-bottom: 1.25rem;
    };
    @media only screen 
    and (min-device-width : 414px) 
    and (max-device-width : 736px)
    and (device-width : 414px)
    and (device-height : 736px)
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio : 3) 
    and (-webkit-device-pixel-ratio : 3)
    {
        width: 2.5rem;
        margin-bottom: 1.25rem;
    };
    @media only screen 
    and (device-width: 414px) 
    and (device-height: 896px) 
    and (-webkit-device-pixel-ratio: 2) {
        width: 2.5rem;
        margin-bottom: 1.25rem;
    };
    @media only screen and (max-width: 768px){
        width: 8%;
        margin-bottom: 1.25rem;
    };
`;