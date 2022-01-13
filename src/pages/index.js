import React, { useState } from "react";
import MainVideo from "../components/HomePage/components/video";
import Applications from "../components/HomePage/components/applications";
import CoreValues from "../components/HomePage/components/corevalues";
import TopBanner from "../components/HomePage/components/topBanner";
import Footer from "../components/HomePage/components/footer";
import ContactUsModal from "../components/ContactUsModal";


const HomePage = () => {
  const [isContactUs, setIsContactUs] = useState(false);

  const toggleContactUs = () => setIsContactUs(!isContactUs);

  return (
    <div>
      <ContactUsModal 
        isContactUs={isContactUs} 
        toggleContactUs={toggleContactUs}
      />
      <TopBanner />
      <MainVideo toggleContactUs={toggleContactUs}/>
      <Applications />
      <CoreValues />
      <Footer toggleContactUs={toggleContactUs}/>
    </div>
  );
};

export default HomePage;
