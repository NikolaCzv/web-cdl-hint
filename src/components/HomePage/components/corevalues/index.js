import React from 'react';
import { 
    Container, 
    Card,
    Image,
    Content
} from './style';

import WeAreCdl from '../../../../images/weAreCdl.jpg';
import Trust from '../../../../images/trust.png';
import Care from '../../../../images/care.png';

const CoreValues = () => {
    return (
        <Container>
            <Card>
                <Content>
                    <Image src={WeAreCdl} />
                </Content>
                <Content>

                </Content>
            </Card>
            <Card>
                <Content>
                    
                </Content>
                <Content>
                    <Image src={Trust} />
                </Content>
            </Card>
            <Card>
                <Content>
                    <Image src={Care}/>
                </Content>
                <Content>
                    
                </Content>
            </Card>
        </Container>
    );
};

export default CoreValues;