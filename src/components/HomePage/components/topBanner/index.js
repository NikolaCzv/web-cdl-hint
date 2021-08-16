import React from 'react';
import { 
    Container, 
    TextHolder,
    ApplyToday
} from './style';

const TopBanner = () => {
    return (
        <Container>
            <TextHolder>
                We collaborate with hundreds of companies all over U.S! {" "}
                <ApplyToday href="#applications"> 
                    APPLY NOW! 
                </ApplyToday>
            </TextHolder>
            <TextHolder>
                +1(123)456-7890
            </TextHolder>
        </Container>
    );
};

export default TopBanner;