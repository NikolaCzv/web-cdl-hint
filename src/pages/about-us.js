import React, { useState } from 'react';

import { TopBanner, Footer } from "../components/HomePage";
import { Hero, Content } from "../components/AboutUs";
import { ContactUsModal } from "../components/ContactUsModal";
import { Layout } from "../components/Layout";
import { TermsAndConditions } from '../components/TermsAndConditionsModal';

const AboutUs = () => {
    const [isContactUs, setIsContactUs] = useState(false);
    const [isTermsAndConditions, setIsTermsAndConditions] = useState(false);
  
    const toggleTermsAndConditions = () =>
      setIsTermsAndConditions(!isTermsAndConditions);

    const toggleContactUs = () => setIsContactUs(!isContactUs);

    return (
        <Layout>
            <ContactUsModal 
                isContactUs={isContactUs} 
                toggleContactUs={toggleContactUs}
            />
            <TermsAndConditions 
                isTermsAndConditions={isTermsAndConditions}
                toggleTermsAndConditions={toggleTermsAndConditions}
            />
            <TopBanner/>
            <Hero toggleContactUs={toggleContactUs} />
            <Content />
            <Footer 
                toggleContactUs={toggleContactUs} 
                toggleTermsAndConditions={toggleTermsAndConditions}
            />
        </Layout>
    );
};

export default AboutUs;
