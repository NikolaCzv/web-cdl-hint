import React, { useState } from "react";
import { TopBanner, Video, Applications, CoreValues, Footer } from "../components/HomePage";
import { ContactUsModal } from "../components/ContactUsModal"
import { Layout } from "../components/Layout"
import { TermsAndConditions } from "../components/TermsAndConditionsModal";


const HomePage = () => {
  const [isContactUs, setIsContactUs] = useState(false);
  const [isTermsAndConditions, setIsTermsAndConditions] = useState(false);

  const toggleContactUs = () => setIsContactUs(!isContactUs);

  const toggleTermsAndConditions = () =>
    setIsTermsAndConditions(!isTermsAndConditions);

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
      <TopBanner />
      <Video toggleContactUs={toggleContactUs}/>
      <Applications />
      <CoreValues />
      <Footer 
        toggleContactUs={toggleContactUs} 
        toggleTermsAndConditions={toggleTermsAndConditions}
      />
    </Layout>
  );
};

export default HomePage;
