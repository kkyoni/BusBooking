import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
function AboutUs() {
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>About Us</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">About Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="bg-white shadow-md rounded p-4">
                        <h2 className="text-6">What is Quickai?</h2>
                        <p>Instant Online recharge and Bill Payments Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
                        <p>Partiendo voluptatibus ex cum, sed erat fuisset ne, cum ex meis volumus mentitum. Alienum pertinacia maiestatis ne eum, verear persequeris et vim. Mea cu dicit voluptua efficiantur, nullam labitur veritus sit cu. Eum denique omittantur te, in justo epicurei his, eu mei aeque populo. Cu pro facer sententiae, ne brute graece scripta duo. No placerat quaerendum nec, pri alia ceteros adipiscing ut. Quo in nobis nostrum intellegebat. Ius hinc decore erroribus eu, in case prima exerci pri. Id eum prima adipisci. Ius cu minim theophrastus, legendos pertinacia an nam.</p>
                        <div className="row mt-4 mb-2">
                            <div className="col-md-4">
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <FaRegThumbsUp /></div>
                                    <h3>Why choose Us</h3>
                                    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <FaPaperPlane /> </div>
                                    <h3>Our Mission</h3>
                                    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <FaRegEye /> </div>
                                    <h3>Our Vision</h3>
                                    <p>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
