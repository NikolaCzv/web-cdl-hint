import React from 'react';
import { 
    Container, 
    Card,
    Image,
    Content,
    CardTitle,
    CardSub,
    ContentAlt,
    Icon
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </CardSub>
                </ContentAlt>
            </Card>
            <Card>
                <ContentAlt>
                    <Icon src={TrustIco}/>
                    <CardTitle>
                        WE BELIEVE IN TRUST
                    </CardTitle>
                    <CardSub>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </CardSub>
                </ContentAlt>
                <Content>
                    <Image src={Trust} />
                </Content>
            </Card>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </CardSub>
                </ContentAlt>
            </Card>
        </Container>
    );
};

export default CoreValues;