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
    ApplyButton
} from './style';
import { Select } from 'antd';
import { fonts } from '../../../../utils/fonts';
import { states } from '../../../../utils/states';
import axios from 'axios';
import { notification } from 'antd';

const selectStyle = {
    marginBottom: '1.5rem', 
    fontFamily: fonts.main,
    width: '80%',
};

const Applications = () => {
    const [companyData, setCompanyData] = useState({
        companyName: "",
        email: "",
        dot: "",
        phone: "",
        phoneLiveTransfer: "",
        address: "",
        availability: ""
    });
    const [driverData, setDriverData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        cdlState: '',
        trailerType: '',
        driverType: '',
        yearsOfExperience: '',
        appliedAt: new Date
    })
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

    const handleOnChange = (type, e, category) => {
        if(category === 'driver'){
            setDriverData({
                ...driverData,
                [type]: e.target.value
            });
        } else {
            setCompanyData({
                ...companyData,
                [type]: e.target.value
            })
        }
    };

    const handleOnSelect = (type, value) => {
        setDriverData({
            ...driverData,
            [type]: value
        })
    };

    const openNotification = () => {
        notification.success({
          message: 'Successfully Sent',
          duration: 3,
          description:
            'The application successfully sent. We will be contacting you shortly!',
        });
    };

    const handleSubmit = (type) => {
        if(type === 'driver'){
            let fullName = driverData.firstName + " " + driverData.lastName;
            let body = driverData;
            delete body.firstName;
            delete body.lastName;
            body.fullName = fullName;
    
            console.log('BODY', fullName, body)
    
            openNotification();
    
            // axios.post('https://cdl-hint-be-stage.herokuapp.com/api/driver/apply', body)
            // .then(data => console.log(data))
            // .catch(err => console.log(err))
    
            // fetch('https://cdl-hint-be-stage.herokuapp.com/api/driver/apply', 
            // {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(body)
            // })
            // .then(data => console.log(data))
            // .catch(err => console.log(err))
        } else {
            openNotification();
            console.log(companyData);
            axios.post('https://cdl-hint-be-stage.herokuapp.com/api/company/apply', companyData)
            .then(data => console.log(data))
            .catch(err => console.log(err))
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
                {/* <TabButton selected={isListTab} onClick={() => handleTabs('list')}>
                    LIST OF COMPANIES
                </TabButton> */}
            </Tab>

            {isDriverTab ?
                <TabContent id="driver" className="tabcontent">
                    <Form>
                        <InputFieldWrapper>
                            <InputField 
                                placeholder="First Name" 
                                onChange={e => handleOnChange('firstName', e, 'driver')}
                            />
                            <InputField 
                                placeholder="Last Name" 
                                onChange={e => handleOnChange('lastName', e, 'driver')}
                            />
                            <InputField 
                                placeholder="Email Address" 
                                onChange={e => handleOnChange('email', e, 'driver')}
                            />
                            <InputField 
                                placeholder="Phone number" 
                                onChange={e => handleOnChange('phone', e, 'driver')}
                            />
                        </InputFieldWrapper>
                        <InputFieldWrapper>
                            <Select 
                                style={selectStyle}
                                placeholder="CDL State"
                                size='large'
                                onSelect={value => handleOnSelect('cdlState', value)}
                            >
                                {states.map((state, index) => {
                                    return (
                                        <Option value={state.abbreviation} key={index}>
                                            {state.abbreviation}
                                        </Option>
                                    );
                                })}
                            </Select>
                            <Select 
                                style={selectStyle}
                                placeholder="Trailer Type"
                                size='large'
                                onSelect={value => handleOnSelect('trailerType', value)}
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
                                size='large'
                                onSelect={value => handleOnSelect('driverType', value)}
                            >
                                <Option value="any">Any</Option>
                                <Option value="company">Company</Option>
                                <Option value="owner">Owner</Option>
                            </Select>
                            <Select 
                                style={selectStyle}
                                placeholder="Years of Experience"
                                size='large'
                                onSelect={value => handleOnSelect('yearsOfExperience', value)}
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
                    <ApplyButton onClick={() => handleSubmit('driver')}>
                        APPLY
                    </ApplyButton>
                </TabContent>
            : isCompanyTab ? 
                <TabContent id="company" class="tabcontent">
                    <Form isCompanyTab={isCompanyTab}>
                        <InputFieldWrapper isCompanyTab={isCompanyTab}>
                            <InputField 
                                placeholder="Company Name"
                                onChange={e => handleOnChange('companyName', e, 'company')}
                            />
                            <InputField 
                                placeholder="Phone Number" 
                                onChange={e => handleOnChange('phone', e, 'company')}
                            />
                            <InputField 
                                placeholder="Email Address"
                                onChange={e => handleOnChange('email', e, 'company')}
                            />
                            {/* <InputField placeholder="Form Applicant (First & Last Name)"/> */}
                        </InputFieldWrapper>
                    </Form>
                    <ApplyButton onClick={() => handleSubmit('company')}>
                        APPLY
                    </ApplyButton>
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