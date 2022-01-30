import React from "react";
import { Modal } from "antd";
import { EMAIL_SUPPORT, LINKEDIN_LINK, PHONE_NUMBER } from "../../utils/constants";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Link = styled.a`
    margin-bottom: 10px;
`;

export const ContactUsModal = ({ isContactUs, toggleContactUs }) => {
    return (
        <Modal 
            title="Contact Us" 
            visible={isContactUs} 
            onCancel={toggleContactUs}
            footer={null}
            centered={true}
        >
            <Content>
                <Link href={`tel:${PHONE_NUMBER}`}>Phone: {PHONE_NUMBER}</Link>
                <Link href={`mailto:${EMAIL_SUPPORT}`}>Email: {EMAIL_SUPPORT}</Link>
                <Link href={LINKEDIN_LINK} target="_blank">LinkedIn: {LINKEDIN_LINK}</Link>
            </Content>
        </Modal>
    )
};
