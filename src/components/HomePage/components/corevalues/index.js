import React from 'react';
import { 
    Container, 
    Card,
    Image,
    Content,
    CardTitle,
    CardSub,
    ContentAlt,
    Icon,
    MiddleCard
} from './style';

import WeAreCdl from '../../../../images/weAreCdl.jpg';
import Trust from '../../../../images/trust.png';
import Care from '../../../../images/care.png';
import CareIco from '../../../../assets/icons/careIco.png';
import TrustIco from '../../../../assets/icons/trustIco.png';
import WeAreCdlIco from '../../../../assets/icons/weAreCdlIco.png';

const CoreValues = () => {
    return (
        <Container>
            <Card>
                <Content>
                    <Image src={WeAreCdl}/>
                </Content>
                <ContentAlt>
                    <Icon src={WeAreCdlIco}/>
                    <CardTitle>
                        WE ARE CDL HINT 
                    </CardTitle>
                    <CardSub>
                        With years of experience in trucking, marketing and tech, 
                        and passion in all three fields, we came to a solution - to help drivers 
                        find a right path in their professional career.  
                    </CardSub>
                </ContentAlt>
            </Card>
            <MiddleCard>
                <ContentAlt>
                    <Icon src={TrustIco}/>
                    <CardTitle>
                        WE BELIEVE IN TRUST
                    </CardTitle>
                    <CardSub>
                        We believe in what we do! That's why we are here to help you
                        make right choices in your career.
                        <span style={{ marginLeft: '5px'}}>
                        We believe in you and we know
                        how important is the work you do! 
                        </span>
                    </CardSub>
                </ContentAlt>
                <Content>
                    <Image src={Trust} />
                </Content>
            </MiddleCard>
            <Card>
                <Content>
                    <Image src={Care}/>
                </Content>
                <ContentAlt>
                    <Icon src={CareIco}/>
                    <CardTitle>
                        WE CARE FOR OUR CLIENTS
                    </CardTitle>
                    <CardSub>
                        Our goal is to find the best match for our clients, because our clients are
                        our top priority.
                        <span style={{ marginLeft: '5px'}}>
                        Working with the top companies in Chicago area, 
                        makes our job easier. 
                        </span>
                    </CardSub>
                </ContentAlt>
            </Card>
        </Container>
    );
};

export default CoreValues;