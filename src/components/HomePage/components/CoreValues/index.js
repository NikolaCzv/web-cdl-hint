import React from 'react';
import {
    Container,
    Card,
    Image,
    Content,
    CardTitle,
    CardDescription,
    ContentAlt,
    Icon,
    MiddleCard, ImageWrapper, TextWrapper
} from "./style"

import WeAreCdl from '../../../../images/weAreCdl.jpg';
import Trust from '../../../../images/trust.png';
import Care from '../../../../images/care.png';
import CareIco from '../../../../assets/icons/careIco.png';
import TrustIco from '../../../../assets/icons/trustIco.png';
import WeAreCdlIco from '../../../../assets/icons/weAreCdlIco.png';

export const CoreValues = () => {
    return (
        <Container>
            <Card>
                <ImageWrapper>
                    <Image src={WeAreCdl}/>
                </ImageWrapper>
                <TextWrapper>
                    <Icon src={WeAreCdlIco}/>
                    <CardTitle>
                        WE ARE CDL HINT 
                    </CardTitle>
                    <CardDescription>
                        With years of experience in trucking, marketing and tech, 
                        and passion in all three fields, we came to a solution - to help drivers 
                        find a right path in their professional career.  
                    </CardDescription>
                </TextWrapper>
            </Card>
            <Card>
                <TextWrapper>
                    <Icon src={TrustIco}/>
                    <CardTitle>
                        WE BELIEVE IN TRUST
                    </CardTitle>
                    <CardDescription>
                        We believe in what we do! That's why we are here to help you
                        make right choices in your career. We believe in you and we know
                        how important is the work you do!
                    </CardDescription>
                </TextWrapper>
                <ImageWrapper>
                    <Image src={Trust}/>
                </ImageWrapper>
            </Card>
            <Card>
                <ImageWrapper>
                    <Image src={Care}/>
                </ImageWrapper>
                <TextWrapper>
                    <Icon src={CareIco}/>
                    <CardTitle>
                        WE CARE FOR OUR CLIENTS
                    </CardTitle>
                    <CardDescription>
                        Our goal is to find the best match for our clients, because our clients are
                        our top priority.
                        Working with the top companies in Chicago area,
                        makes our job easier.
                    </CardDescription>
                </TextWrapper>
            </Card>
        </Container>
    );
};
