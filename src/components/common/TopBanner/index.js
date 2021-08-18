import React from 'react';
import { 
    Container, 
    TextHolder,
    ApplyToday,
    PhoneHolder,
    IconHolder
} from './style';
import phoneIcon from '../../../assets/icons/phone.png';

const TopBanner = () => {
    return (
        <Container>
            <TextHolder>
                We collaborate with hundreds of companies all over the U.S! {" "}
                <ApplyToday href="#applications"> 
                    APPLY NOW! 
                </ApplyToday>
            </TextHolder>
            <TextHolder>
                <PhoneHolder>
                    +1(123)456-7890
                </PhoneHolder>
                <IconHolder src={phoneIcon}/>
            </TextHolder>
        </Container>
    );
};

export default TopBanner;