import React, { useState } from 'react';

import { TopBanner, Footer, CoreValues, Video } from "../components/HomePage";
import { Hero, Content } from "../components/AboutUs";
import { ContactUsModal } from "../components/ContactUsModal";
import { Layout } from "../components/Layout";

const AboutUs = () => {
    const [isContactUs, setIsContactUs] = useState(false);

    const toggleContactUs = () => setIsContactUs(!isContactUs);

    return (
        <Layout>
            <ContactUsModal 
                isContactUs={isContactUs} 
                toggleContactUs={toggleContactUs}
            />
            <TopBanner/>
            <Hero toggleContactUs={toggleContactUs} />
            <Content />
            <Footer />
        </Layout>
    );
};

export default AboutUs;
