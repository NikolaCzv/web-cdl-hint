import React, { useState } from 'react';

import TopBanner from '../components/HomePage/components/topBanner';
import MainImage from '../components/AboutUs/components/mainImage';
import Content from '../components/AboutUs/components/Content';
import Footer from '../components/HomePage/components/footer';
import ContactUsModal from '../components/ContactUsModal';

const AboutUs = () => {
    const [isContactUs, setIsContactUs] = useState(false);

    const toggleContactUs = () => setIsContactUs(!isContactUs);

    return (
        <div>
            <ContactUsModal 
                isContactUs={isContactUs} 
                toggleContactUs={toggleContactUs}
            />
            <TopBanner/>
            <MainImage toggleContactUs={toggleContactUs} />
            <Content />
            <Footer />
        </div>
    );
};

export default AboutUs;
