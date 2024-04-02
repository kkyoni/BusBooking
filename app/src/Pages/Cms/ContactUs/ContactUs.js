import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function ContactUs() {
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="bg-white shadow-md rounded h-100 p-3">
                                <iframe class="h-100 w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1530885071349" allowfullscreen=""></iframe>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="bg-white shadow-md rounded p-4">
                                <h2 class="text-6 mb-4">Get in touch</h2>
                                <hr class="mx-n4 mb-4" />
                                <p class="text-3">For Customer Support and Query, Get in touch with us: <Link to={'/Help'}>Help</Link></p>
                                <div class="featured-box style-1">
                                    <div class="featured-box-icon text-primary"> <FaMapMarkerAlt /></div>
                                    <h3>Quickai Inc.</h3>
                                    <p>4th Floor, Plot No.22, Above Public Park<br />
                                        145 Murphy Canyon Rd.<br />
                                        Suite 100-18<br />
                                        San Diego CA 2028 </p>
                                </div>
                                <div class="featured-box style-1">
                                    <div class="featured-box-icon text-primary"> <FaPhone /> </div>
                                    <h3>Telephone</h3>
                                    <p>(+060) 9898980098, (+060) 8898880088</p>
                                </div>
                                <div class="featured-box style-1">
                                    <div class="featured-box-icon text-primary"> <FaEnvelope /> </div>
                                    <h3>Business Inquiries</h3>
                                    <p>info@quickai.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
