import React from 'react';
import SlidesHeader from './SlidesHeader';
import { HashLink as Link } from 'react-router-hash-link';
import icon1 from '../assets/img/icon/1.png'
import icon2 from '../assets/img/icon/2.png'
import icon3 from '../assets/img/icon/3.png'

const Skills = () => {
    return (
        <>
            <div className="skill-area section-area bg-cover">
                <SlidesHeader />
                <div className="container ">
                    <div className="row align-items-center vt-mt-100">
                        <div className="col-lg-1 col-12">
                            <div className="skill-title">
                                <h2 className='rotate-title section-title'>My Skills</h2>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 single-skill-wrap">
                                    <div className="single-skill">
                                        <div className="single-skill-icon">
                                            <img src={icon1} alt="icon1" />
                                        </div>
                                        <div className="single-skill-title">
                                            <h4>
                                                <Link to="/service-single#">Email Design</Link>
                                            </h4>
                                        </div>
                                        <div className="single-skill-text">
                                            <p>Proficient in writing and styling HTML and CSS code for email templates. Designing and coding responsive HTML emails that adapt to different screen sizes and devices.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 single-skill-wrap">
                                    <div className="single-skill">
                                        <div className="single-skill-icon">
                                            <img src={icon2} alt="icon2" />
                                        </div>
                                        <div className="single-skill-title">
                                            <h4>
                                                <Link to="/service-single#">Client Fulfillment</Link>
                                            </h4>
                                        </div>
                                        <div className="single-skill-text">
                                            <p>Skills in creating visually appealing email designs that align with brand guidelines and marketing objectives. Flexibility to adapt to different client preferences.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 single-skill-wrap">
                                    <div className="single-skill">
                                        <div className="single-skill-icon">
                                            <img src={icon3} alt="icon3" />
                                        </div>
                                        <div className="single-skill-title">
                                            <h4>
                                                <Link to="/service-single#">Testing and QA</Link>
                                            </h4>
                                        </div>
                                        <div className="single-skill-text">
                                            <p>Expertise in testing HTML emails across various email clients, browsers, and devices to ensure consistent and optimal display. Staying current with industry trends. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;