import React, { useState } from 'react';
import { 
    TabButton, 
    Container, 
    Tab, 
    TabContent 
} from './style';

const Applications = () => {
    const [isDriverTab, setIsDriverTab] = useState(true);
    const [isCompanyTab, setIsCompanyTab] = useState(false);
    const [isListTab, setIsListTab] = useState(false);

    const handleTabs = tab => {
        if(tab === "driver"){
            setIsDriverTab(true);
            setIsListTab(false);
            setIsCompanyTab(false);
        } else if (tab === "company"){
            setIsDriverTab(false);
            setIsListTab(false);
            setIsCompanyTab(true);
        } else {
            setIsDriverTab(false);
            setIsListTab(true);
            setIsCompanyTab(false);
        }
    };

    return (
        <Container>
            <Tab>
                <TabButton selected={isDriverTab} onClick={() => handleTabs('driver')}>
                    DRIVER APPLICATION
                </TabButton>
                <TabButton selected={isCompanyTab} onClick={() => handleTabs('company')}>
                    REQUEST A DRIVER
                </TabButton>
                <TabButton selected={isListTab} onClick={() => handleTabs('list')}>
                    LIST OF COMPANIES
                </TabButton>
            </Tab>

            {isDriverTab ?
                <TabContent id="driver" class="tabcontent">
                    <p>Driver application.</p>
                </TabContent>
            : isCompanyTab ? 
                <TabContent id="company" class="tabcontent">
                    <p>Company application.</p>
                </TabContent> 
            : isListTab ?
                <TabContent id="list" class="tabcontent">
                    <p>Company List.</p>
                </TabContent>
            : null }
        </Container>
    );
};

export default Applications;