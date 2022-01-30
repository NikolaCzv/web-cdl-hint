import React from 'react';
import { Header } from "../../../Header";
import { Container, Image } from "./style"

import aboutUs from '../../../../images/aboutUs.png';

export const Hero = ({ toggleContactUs }) => {
    return (
        <Container>
            <Image src={aboutUs}/>
            <Header toggleContactUs={toggleContactUs} />
        </Container>
    );
};
