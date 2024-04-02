import React from 'react';
import { FaLifeRing } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Help() {
    return (
        <>
            <section className="hero-wrap section">
                <div className="hero-mask opacity-8 bg-secondary"></div>
                <div className="hero-bg"></div>
                {/* <div className="hero-bg" style={{ backgroundImage: url('images/image-2.jpg') }}></div> */}
                <div className="hero-content my-5">
                    <div className="container">
                        <div className="row align-items-center text-center">
                            <div className="col-12">
                                <h1 className="text-10 text-white mb-3">How can we help?</h1>
                            </div>
                            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <div className="input-group">
                                    <input className="form-control shadow-none border-0" type="search" id="search-input" placeholder="Search for a topic or question" value="" />
                                    <button className="btn btn-primary shadow-none" type="button"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">

                <section className="section py-3 mt-3 py-md-5 mt-md-5">
                    <div className="container">
                        <h2 className="text-9 text-center">What do you need help with?</h2>
                        <p className="lead text-center mb-5">Lisque persius interesset his persequeris.</p>
                        <div className="row g-4">
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="text-center my-4"> <span className="text-16 text-primary"><FaLifeRing /></span>
                                            <h5 className="mt-1">General Help</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <Link to={'/'} className="list-group-item list-group-item-action">Persius interesset his et</Link> <Link to={'/'} className="list-group-item list-group-item-action">Quot quidam persequeris</Link> <Link to={'/'} className="list-group-item list-group-item-action">Mutat tacimates id sit. </Link>
                                    </ul>
                                    <div className="card-footer position-relative"> <Link to={'/'} className="btn-link stretched-link"><span className="me-2"><i className="fas fa-file-alt"></i></span>33 Topics <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="text-center my-4"> <span className="text-16 text-primary"><FaClipboardCheck /></span>
                                            <h5 className="mt-1">Booking</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <Link to={'/'} className="list-group-item list-group-item-action">Persius interesset his et</Link> <Link to={'/'} className="list-group-item list-group-item-action">Quot quidam persequeris</Link> <Link to={'/'} className="list-group-item list-group-item-action">Mutat tacimates id sit. </Link>
                                    </ul>
                                    <div className="card-footer position-relative"> <Link to={'/'} className="btn-link stretched-link"><span className="me-2"><i className="fas fa-file-alt"></i></span>42 Topics <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="text-center my-4"> <span className="text-16 text-primary"><FaUserCircle /></span>
                                            <h5 className="mt-1">My Account</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <Link to={'/'} className="list-group-item list-group-item-action">Persius interesset his et</Link> <Link to={'/'} className="list-group-item list-group-item-action">Quot quidam persequeris</Link> <Link to={'/'} className="list-group-item list-group-item-action">Mutat tacimates id sit. </Link>
                                    </ul>
                                    <div className="card-footer position-relative"> <Link to={'/'} className="btn-link stretched-link"><span className="me-2"><i className="fas fa-file-alt"></i></span>32 Topics <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="text-center my-4"> <span className="text-16 text-primary"><FaMoneyCheckAlt /></span>
                                            <h5 className="mt-1">Payments</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <Link to={'/'} className="list-group-item list-group-item-action">Persius interesset his et</Link> <Link to={'/'} className="list-group-item list-group-item-action">Quot quidam persequeris</Link> <Link to={'/'} className="list-group-item list-group-item-action">Mutat tacimates id sit. </Link>
                                    </ul>
                                    <div className="card-footer position-relative"> <Link to={'/'} className="btn-link stretched-link"><span className="me-2"><i className="fas fa-file-alt"></i></span>14 Topics <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="text-center my-4"> <span className="text-16 text-primary"><FaTimesCircle /></span>
                                            <h5 className="mt-1">Cancellation</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <Link to={'/'} className="list-group-item list-group-item-action">Persius interesset his et</Link> <Link className="list-group-item list-group-item-action">Quot quidam persequeris</Link> <Link to={'/'} className="list-group-item list-group-item-action">Mutat tacimates id sit. </Link>
                                    </ul>
                                    <div className="card-footer position-relative"> <Link to={'/'} className="btn-link stretched-link"><span className="me-2"><i className="fas fa-file-alt"></i></span>11 Topics <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="text-center my-4"> <span className="text-16 text-primary"><FaGift /></span>
                                            <h5 className="mt-1">Reffral Rewards</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <Link to={'/'} className="list-group-item list-group-item-action">Persius interesset his et</Link> <Link to={'/'} className="list-group-item list-group-item-action">Quot quidam persequeris</Link> <Link to={'/'} className="list-group-item list-group-item-action">Mutat tacimates id sit. </Link>
                                    </ul>
                                    <div className="card-footer position-relative"> <Link to={'/'} className="btn-link stretched-link"><span className="me-2"><i className="fas fa-file-alt"></i></span>9 Topics <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link> </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="card shadow-sm border-0">
                                    <div className="card-body">
                                        <div className="text-center my-4"> <span className="text-16 text-primary"><FaShieldAlt /></span>
                                            <h5 className="mt-1">Security</h5>
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush border-top border-bottom">
                                        <Link to={'/'} className="list-group-item list-group-item-action">Persius interesset his et</Link> <Link to={'/'} className="list-group-item list-group-item-action">Quot quidam persequeris</Link> <Link to={'/'} className="list-group-item list-group-item-action">Mutat tacimates id sit. </Link>
                                    </ul>
                                    <div className="card-footer position-relative"> <Link to={'/'} className="btn-link stretched-link"><span className="me-2"><i className="fas fa-file-alt"></i></span>18 Topics <span className="float-end"><i className="fas fa-arrow-right"></i></span></Link> </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4 pt-md-3 mt-md-4">
                            <div className="col-lg-6">
                                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                                    <div className="row g-0">
                                        <div className="col-12 col-sm-auto text-13 text-muted d-flex align-items-center justify-content-center"> <span className="px-4 ms-3 me-2 mb-4 mb-sm-0"><FaRegEnvelope /></span> </div>
                                        <div className="col text-center text-sm-start">
                                            <div className="">
                                                <h5 className="text-3 text-body">Can't find what you're looking for?</h5>
                                                <p className="text-muted mb-0">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can. <Link className="btn-link" to={'/Contact-us'}>Contact us<span className="text-1 ms-1"><i className="fas fa-chevron-right"></i></span></Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                                    <div className="row g-0">
                                        <div className="col-12 col-sm-auto text-13 text-muted d-flex align-items-center justify-content-center"> <span className="px-4 ms-3 me-2 mb-4 mb-sm-0"><FaRegCommentAlt /></span> </div>
                                        <div className="col text-center text-sm-start">
                                            <div className="">
                                                <h5 className="text-3 text-body">Technical questions</h5>
                                                <p className="text-muted mb-0">Have some technical questions? Hit us up on live chat or whatever. Get in touch and we'll get back to you as soon as we can <Link className="btn-link" to={'/Support'}>Click here<span className="text-1 ms-1"><i className="fas fa-chevron-right"></i></span></Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Help;
