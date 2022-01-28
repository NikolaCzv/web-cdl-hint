import React, { useState } from "react";
import { TopBanner, Video, CoreValues } from "../components/HomePage";
import { ContactUsModal } from "../components/ContactUsModal"
import { Layout } from "../components/Layout"


const HomePage = () => {
  const [isContactUs, setIsContactUs] = useState(false);

  const toggleContactUs = () => setIsContactUs(!isContactUs);

  return (
    <Layout>
      <ContactUsModal
        isContactUs={isContactUs}
        toggleContactUs={toggleContactUs}
      />
      <TopBanner />
      <Video toggleContactUs={toggleContactUs}/>
      {/*<Applications />*/}
      <CoreValues />
      {/*<Footer toggleContactUs={toggleContactUs}/>*/}
    </Layout>
  );
};

export default HomePage;
