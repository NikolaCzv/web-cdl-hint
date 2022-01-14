import React, { useState } from 'react';
import { 
    TabButton, 
    Container, 
    Tab, 
    TabContent,
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

// const API_URL = "http://localhost:3002/api";
const API_URL = "https://cdl-hint-be-stage.herokuapp.com/api";

const selectStyle = {
    marginBottom: '1.5rem', 
    fontFamily: fonts.main,
    width: '80%',
};

const INIT_DRIVER_APPLY = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    cdlState: null,
    trailerType: null,
    driverType: null,
    yearsOfExperience: null
};

const INIT_COMPANY_APPLY = {
    companyName: null,
    email: null,
    phone: null,
    applicantFullName: null
}

const TABS = {
    DRIVER: "driver",
    COMPANY: "company"
}

const Applications = () => {
    const [companyData, setCompanyData] = useState(INIT_COMPANY_APPLY);
    const [driverData, setDriverData] = useState(INIT_DRIVER_APPLY);
    const [activeTab, setActiveTab] = useState(TABS.DRIVER);
    const [loading, setLoading] = useState(false);
    const { Option } = Select;

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

    const openSuccessNotification = () => {
        notification.success({
          message: 'Successfully Sent',
          duration: 3,
          description:
            'The application successfully sent. We will be contacting you shortly.',
        });
    };

    const openErrorNotification = () => {
        notification.error({
            message: 'Not Sent',
            duration: 3,
            description:
              'The application not sent. All inputs are required or you already applied.',
        });
    };

    const handleSubmit = async type => {
        setLoading(true);
        if(type === 'driver'){
            const data = {
                fullName: `${driverData.firstName} ${driverData.lastName}`,
                email: driverData.email,
                phone: driverData.phone,
                cdlState: driverData.cdlState,
                trailerType: driverData.trailerType,
                driverType: driverData.driverType,
                yearsOfExperience: driverData.yearsOfExperience,
                appliedAt: new Date().toUTCString()
            };

            try {
                await axios.post(`${API_URL}/driver/apply`, data);
                openSuccessNotification();
                setDriverData(INIT_DRIVER_APPLY);
                setLoading(false);
            } catch (e) {
                openErrorNotification();
                setLoading(false);
                console.log('ERROR driver apply', e);
            }
        } else {
            const data = {
                ...companyData,
                appliedAt: new Date().toUTCString()
            };

            try {
                await axios.post(`${API_URL}/company/apply`, data)
                openSuccessNotification();
                setCompanyData(INIT_COMPANY_APPLY);
                setLoading(false);
            } catch (e) {
                openErrorNotification();
                setLoading(false);
                console.log('ERROR company apply', e);
            }
        }
    };

    const isCompanyTab = activeTab === TABS.COMPANY;
    const isDriverTab = activeTab === TABS.DRIVER;

    return (
        <Container id='applications'>
            <Tab>
                <TabButton selected={isDriverTab} onClick={() => setActiveTab(TABS.DRIVER)}>
                    DRIVER APPLICATION
                </TabButton>
                <TabButton selected={isCompanyTab} onClick={() => setActiveTab(TABS.COMPANY)}>
                    REQUEST A DRIVER
                </TabButton>
            </Tab>

            {isDriverTab ?
                <TabContent id="driver" className="tabcontent">
                    <Form>
                        <InputFieldWrapper>
                            <InputField 
                                placeholder="First Name" 
                                onChange={e => handleOnChange('firstName', e, 'driver')}
                                value={driverData.firstName}
                            />
                            <InputField 
                                placeholder="Last Name" 
                                onChange={e => handleOnChange('lastName', e, 'driver')}
                                value={driverData.lastName}
                            />
                            <InputField 
                                placeholder="Email Address" 
                                onChange={e => handleOnChange('email', e, 'driver')}
                                value={driverData.email}
                            />
                            <InputField 
                                placeholder="Phone Number"
                                onChange={e => handleOnChange('phone', e, 'driver')}
                                value={driverData.phone}
                            />
                        </InputFieldWrapper>
                        <InputFieldWrapper>
                            <Select 
                                style={selectStyle}
                                placeholder="CDL State"
                                size='large'
                                onSelect={value => handleOnSelect('cdlState', value)}
                                value={driverData.cdlState}
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
                                value={driverData.trailerType}
                            >
                                <Option value="any">Any</Option>
                                <Option value="doubles">Doubles</Option>
                                <Option value="flatbed">Flatbed</Option>
                                <Option value="reefer">Reefer</Option>
                                <Option value="van">Van</Option>
                            </Select>
                            <Select 
                                style={selectStyle}
                                placeholder="Driver Type"
                                size='large'
                                onSelect={value => handleOnSelect('driverType', value)}
                                value={driverData.driverType}
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
                                value={driverData.yearsOfExperience}
                            >
                                3 , 4+
                                <Option value="0">Less Then 1</Option>
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4+</Option>
                            </Select>
                        </InputFieldWrapper>
                    </Form>
                    <ApplyButton disabled={loading} onClick={() => handleSubmit('driver')}>
                        APPLY
                    </ApplyButton>
                </TabContent>
            : isCompanyTab ?
                <TabContent id="company" className="tabcontent">
                    <Form isCompanyTab={isCompanyTab}>
                        <InputFieldWrapper isCompanyTab={isCompanyTab}>
                            <InputField 
                                placeholder="Company Name"
                                onChange={e => handleOnChange('companyName', e, 'company')}
                                value={companyData.companyName}
                            />
                            <InputField
                              placeholder="Your Full Name"
                              onChange={e => handleOnChange('applicantFullName', e, 'company')}
                              value={companyData.applicantFullName}
                            />
                            <InputField 
                                placeholder="Phone Number" 
                                onChange={e => handleOnChange('phone', e, 'company')}
                                value={companyData.phone}
                            />
                            <InputField 
                                placeholder="Email Address"
                                onChange={e => handleOnChange('email', e, 'company')}
                                value={companyData.email}
                            />
                        </InputFieldWrapper>
                    </Form>
                    <ApplyButton disabled={loading} onClick={() => handleSubmit('company')}>
                        APPLY
                    </ApplyButton>
                </TabContent>
            : null}
        </Container>
    );
};

export default Applications;
