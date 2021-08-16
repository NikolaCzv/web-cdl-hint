import * as React from "react";
import MainVideo from "../components/HomePage/components/video";
import Applications from "../components/HomePage/components/applications";
import CoreValues from "../components/HomePage/components/corevalues";
import TopBanner from "../components/HomePage/components/topBanner";
import Footer from "../components/HomePage/components/footer";


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
