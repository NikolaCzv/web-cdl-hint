import React, { useState } from 'react';
import { 
    TabButton, 
    Container, 
    Tab, 
    TabContent,
    ListText,
    Form,
    InputFieldWrapper,
    InputField,
    ApplyButton,
    CompanyInputField
} from './style';
import { Select } from 'antd';
import { fonts } from '../../../../utils/fonts';
import { states } from '../../../../utils/states';

const selectStyle = {
    marginBottom: '1.5rem', 
    fontFamily: fonts.main,
    width: '80%'
};

const Applications = () => {
    const [isDriverTab, setIsDriverTab] = useState(true);
    const [isCompanyTab, setIsCompanyTab] = useState(false);
    const [isListTab, setIsListTab] = useState(false);

    const { Option } = Select;

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
        <Container id='applications'>
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
                    <Form>
                        <InputFieldWrapper>
                            <InputField placeholder="First Name"/>
                            <InputField placeholder="Last Name"/>
                            <InputField placeholder="Email Address"/>
                            <InputField placeholder="Phone Number"/>
                        </InputFieldWrapper>
                        <InputFieldWrapper>
                            <Select 
                                style={selectStyle}
                                placeholder="CDL State"
                            >
                                {states.map(state => {
                                    return (
                                        <Option value={state.abbreviation}>
                                            {state.abbreviation}
                                        </Option>
                                    );
                                })}
                            </Select>
                            <Select 
                                style={selectStyle}
                                placeholder="Trailer Type"
                            >
                                <Option value="any">Any</Option>
                                <Option value="doubles">Doubles</Option>
                                <Option value="flatbed">Flatbed</Option>
                                <Option value="reefer">Reefer</Option>
                                <Option value="van">Van</Option>
                                <Option value="other">Other</Option>
                            </Select>
                            <Select 
                                style={selectStyle}
                                placeholder="Driver Type"
                            >
                                <Option value="any">Any</Option>
                                <Option value="company">Company</Option>
                                <Option value="owner">Owner</Option>
                            </Select>
                            <Select 
                                style={selectStyle}
                                placeholder="Years of Experience"
                            >
                                3 , 4, 5+
                                <Option value="<1">Less Then 1</Option>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5+">5+</Option>
                            </Select>
                        </InputFieldWrapper>
                    </Form>
                    <ApplyButton>APPLY</ApplyButton>
                </TabContent>
            : isCompanyTab ? 
                <TabContent id="company" class="tabcontent">
                    <Form>
                        <InputFieldWrapper>
                            <CompanyInputField placeholder="Company Name"/>
                            <CompanyInputField placeholder="Email Address"/>
                            <CompanyInputField placeholder="Phone Number"/>
                            <CompanyInputField placeholder="DOT Number"/>
                        </InputFieldWrapper>
                    </Form>
                    <ApplyButton>REQUEST</ApplyButton>
                </TabContent> 
            : isListTab ?
                <TabContent id="list" class="tabcontent">
                    <ListText>COMING SOON</ListText>
                </TabContent>
            : null }

        </Container>
    );
};

export default Applications;