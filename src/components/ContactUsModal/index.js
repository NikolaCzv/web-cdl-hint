import React from "react";

import { Modal } from "antd";

const ContactUsModal = ({ isContactUs, toggleContactUs }) => {
    return (
        <Modal 
            title="Contact Us" 
            visible={isContactUs} 
            onCancel={toggleContactUs}
            footer={null}
            centered={true}
        >
        <p>Phone: +1(123)456-7890</p>
        <p>Email: cdlsupport@email.com</p>
        <p>LinkedIn: www.linkedinprofile.com</p>
    </Modal>
    )
};

export default ContactUsModal;