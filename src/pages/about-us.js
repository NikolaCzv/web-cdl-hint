import * as React from "react";
import AboutUsTop from "../components/AboutUs/components/topContainer";
import Footer from "../components/common/Footer";
import TopBanner from "../components/common/TopBanner";
import AboutUsBottom from "../components/AboutUs/components/bottomContainer";

const AboutUs = () => {
    return( 
        <div>
            <TopBanner />
            <AboutUsTop />
            <AboutUsBottom />
            <Footer />
        </div>
    );
};

export default AboutUs;