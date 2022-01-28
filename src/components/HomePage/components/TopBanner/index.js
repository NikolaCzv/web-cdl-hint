import React from 'react';
import { 
    Container, 
    TextHolder,
    ApplyToday,
    PhoneHolder
} from './style';
import { PHONE_NUMBER } from "../../../../utils/constants"
import { navigate } from "gatsby"

export const TopBanner = () => {
    const handleApplyNow = async () => {
      await navigate("/#applications")
    }
    return (
        <Container>
            <TextHolder>
                We collaborate with hundreds of companies all over the U.S! {" "}
                <ApplyToday onClick={handleApplyNow}>
                    APPLY NOW! 
                </ApplyToday>
            </TextHolder>
            <PhoneHolder href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</PhoneHolder>
        </Container>
    );
};
