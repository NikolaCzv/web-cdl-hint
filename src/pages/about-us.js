import React from 'react';

import TopBanner from '../components/HomePage/components/topBanner';
import MainImage from '../components/AboutUs/components/mainImage';
import Content from '../components/AboutUs/components/Content';
import Footer from '../components/HomePage/components/footer';;

const AboutUs = () => {
    return (
        <div>
            <TopBanner />
            <MainImage />
            <Content />
            <Footer />
        </div>
    );
};

export default AboutUs;