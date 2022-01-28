import React from 'react';
import { 
    Container, 
    TextHolder,
    ApplyToday,
    PhoneHolder
} from './style';
import { PHONE_NUMBER } from "../../../../utils/constants"

export const TopBanner = () => {
    return (
        <Container>
            <TextHolder>
                We collaborate with hundreds of companies all over the U.S! {" "}
                <ApplyToday href="#applications"> 
                    APPLY NOW! 
                </ApplyToday>
            </TextHolder>
            <PhoneHolder href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</PhoneHolder>
        </Container>
    );
};
