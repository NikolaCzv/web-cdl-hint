import React, { useState } from 'react';
import { 
    TabButton, 
    Container, 
    Tab, 
    TabContent,
    Form,
    InputFieldWrapper,
    InputField,
    ApplyButton,
} from './style';
import axios from 'axios';
import { API_URL } from "../../../../utils/constants";
import { notification } from 'antd';
import checkPhone from 'phone';
import illustrationUrl from "../../../../images/how-it-works.svg";

const INIT_DRIVER_APPLY = {
    firstName: null,
    lastName: null,
    phone: null,
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

export const Applications = () => {
    const [companyData, setCompanyData] = useState(INIT_COMPANY_APPLY);
    const [driverData, setDriverData] = useState(INIT_DRIVER_APPLY);
    const [activeTab, setActiveTab] = useState(TABS.DRIVER);
    const [loading, setLoading] = useState(false);

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

    const openInvalidPhoneErrorNotification = () => {
        notification.error({
            message: 'Phone invalid',
            duration: 3,
            description:
              'Your phone number is invalid. Please add valid format +1(312)833-6388.',
        });
    };

    const handleSubmit = async type => {
        const isPhoneValid = checkPhone(driverData.phone || companyData.phone, { country: 'USA' });

        if (!isPhoneValid.isValid) {
            openInvalidPhoneErrorNotification();
            return;
        }

        setLoading(true);
        if(type === 'driver'){
            const data = {
                fullName: `${driverData.firstName} ${driverData.lastName}`,
                phone: driverData.phone,
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
            {isDriverTab && (
              <div>
                  <h2>We are here to help you find your next job!</h2>
                  <h2>
                      After submitting the application we will find
                      a company that meets your expectations! Apply below!
                  </h2>
                  <img src={illustrationUrl} alt="How it works illustration" />
                  <br />
                  <br />
              </div>
            )}
            <Tab>
                <TabButton selected={isDriverTab} onClick={() => setActiveTab(TABS.DRIVER)}>
                    DRIVER APPLICATION
                </TabButton>
                <TabButton selected={isCompanyTab} onClick={() => setActiveTab(TABS.COMPANY)}>
                    REQUEST A DRIVER
                </TabButton>
            </Tab>
            {isDriverTab ?
                <TabContent>
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
                                placeholder="Phone Number"
                                onChange={e => handleOnChange('phone', e, 'driver')}
                                value={driverData.phone}
                            />
                        </InputFieldWrapper>
                    </Form>
                    <ApplyButton disabled={loading} onClick={() => handleSubmit('driver')}>
                        APPLY
                    </ApplyButton>
                </TabContent>
            : isCompanyTab ?
                <TabContent>
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
