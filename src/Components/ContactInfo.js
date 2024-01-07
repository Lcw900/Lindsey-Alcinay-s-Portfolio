import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-info vt-md-mb-70">
                <ul>
                    <li className='contact-info-list'>
                        <div className="contact-info-icon">
                            <i className="ri-mail-line"></i>
                        </div>
                        <div className="contact-info-text">
                            <h5>Email</h5>
                            <p>Lcw900@yahoo.com</p>
                            <p>Lalcinay@gmail.com</p>
                        </div>
                    </li>
                    <li className='contact-info-list'>
                        <div className="contact-info-icon">
                            <i className="ri-map-pin-line"></i>
                        </div>
                        <div className="contact-info-text">
                            <h5>Location</h5>
                            <p><a href="mailto:info@validtheme.com">Middlesex County, NJ</a></p>
                        </div>
                    </li>
                    <li className='contact-info-list'>
                        <div className="contact-info-icon">
                            <i className="ri-headphone-line"></i>
                        </div>
                        <div className="contact-info-text">
                            <h5>Phone</h5>
                            <p><a href="tel:+4733378901">732-407-4960</a></p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;