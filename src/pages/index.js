import * as React from "react";
import MainVideo from "../components/HomePage/components/video";
import Applications from "../components/HomePage/components/applications";
import CoreValues from "../components/HomePage/components/corevalues";
import TopBanner from "../components/common/TopBanner";
import Footer from "../components/common/Footer";


const HomePage = () => (
  <div>
    <TopBanner />
    <MainVideo />
    <Applications />
    <CoreValues />
    <Footer />
  </div>
);

export default HomePage;
