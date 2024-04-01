import React, { useState } from 'react';
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
            <section class="hero-wrap section">
                <div class="hero-mask opacity-8 bg-secondary"></div>
                <div class="hero-bg"></div>
                {/* <div class="hero-bg" style={{ backgroundImage: url('images/image-2.jpg') }}></div> */}
                <div class="hero-content my-5">
                    <div class="container">
                        <div class="row align-items-center text-center">
                            <div class="col-12">
                                <h1 class="text-10 text-white mb-3">How can we help?</h1>
                            </div>
                            <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                <div class="input-group">
                                    <input class="form-control shadow-none border-0" type="search" id="search-input" placeholder="Search for a topic or question" value="" />
                                    <button class="btn btn-primary shadow-none" type="button"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">

                <section class="section py-3 mt-3 py-md-5 mt-md-5">
                    <div class="container">
                        <h2 class="text-9 text-center">What do you need help with?</h2>
                        <p class="lead text-center mb-5">Lisque persius interesset his persequeris.</p>
                        <div class="row g-4">
                            <div class="col-sm-6 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body">
                                        <div class="text-center my-4"> <span class="text-16 text-primary"><FaLifeRing /></span>
                                            <h5 class="mt-1">General Help</h5>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush border-top border-bottom">
                                        <a class="list-group-item list-group-item-action" href="#">Persius interesset his et</a> <a class="list-group-item list-group-item-action" href="#">Quot quidam persequeris</a> <a class="list-group-item list-group-item-action" href="#">Mutat tacimates id sit. </a>
                                    </ul>
                                    <div class="card-footer position-relative"> <a href="#" class="btn-link stretched-link"><span class="me-2"><i class="fas fa-file-alt"></i></span>33 Topics <span class="float-end"><i class="fas fa-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body">
                                        <div class="text-center my-4"> <span class="text-16 text-primary"><FaClipboardCheck /></span>
                                            <h5 class="mt-1">Booking</h5>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush border-top border-bottom">
                                        <a class="list-group-item list-group-item-action" href="#">Persius interesset his et</a> <a class="list-group-item list-group-item-action" href="#">Quot quidam persequeris</a> <a class="list-group-item list-group-item-action" href="#">Mutat tacimates id sit. </a>
                                    </ul>
                                    <div class="card-footer position-relative"> <a href="#" class="btn-link stretched-link"><span class="me-2"><i class="fas fa-file-alt"></i></span>42 Topics <span class="float-end"><i class="fas fa-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body">
                                        <div class="text-center my-4"> <span class="text-16 text-primary"><FaUserCircle /></span>
                                            <h5 class="mt-1">My Account</h5>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush border-top border-bottom">
                                        <a class="list-group-item list-group-item-action" href="#">Persius interesset his et</a> <a class="list-group-item list-group-item-action" href="#">Quot quidam persequeris</a> <a class="list-group-item list-group-item-action" href="#">Mutat tacimates id sit. </a>
                                    </ul>
                                    <div class="card-footer position-relative"> <a href="#" class="btn-link stretched-link"><span class="me-2"><i class="fas fa-file-alt"></i></span>32 Topics <span class="float-end"><i class="fas fa-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body">
                                        <div class="text-center my-4"> <span class="text-16 text-primary"><FaMoneyCheckAlt /></span>
                                            <h5 class="mt-1">Payments</h5>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush border-top border-bottom">
                                        <a class="list-group-item list-group-item-action" href="#">Persius interesset his et</a> <a class="list-group-item list-group-item-action" href="#">Quot quidam persequeris</a> <a class="list-group-item list-group-item-action" href="#">Mutat tacimates id sit. </a>
                                    </ul>
                                    <div class="card-footer position-relative"> <a href="#" class="btn-link stretched-link"><span class="me-2"><i class="fas fa-file-alt"></i></span>14 Topics <span class="float-end"><i class="fas fa-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body">
                                        <div class="text-center my-4"> <span class="text-16 text-primary"><FaTimesCircle /></span>
                                            <h5 class="mt-1">Cancellation</h5>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush border-top border-bottom">
                                        <a class="list-group-item list-group-item-action" href="#">Persius interesset his et</a> <a class="list-group-item list-group-item-action" href="#">Quot quidam persequeris</a> <a class="list-group-item list-group-item-action" href="#">Mutat tacimates id sit. </a>
                                    </ul>
                                    <div class="card-footer position-relative"> <a href="#" class="btn-link stretched-link"><span class="me-2"><i class="fas fa-file-alt"></i></span>11 Topics <span class="float-end"><i class="fas fa-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body">
                                        <div class="text-center my-4"> <span class="text-16 text-primary"><FaGift /></span>
                                            <h5 class="mt-1">Reffral Rewards</h5>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush border-top border-bottom">
                                        <a class="list-group-item list-group-item-action" href="#">Persius interesset his et</a> <a class="list-group-item list-group-item-action" href="#">Quot quidam persequeris</a> <a class="list-group-item list-group-item-action" href="#">Mutat tacimates id sit. </a>
                                    </ul>
                                    <div class="card-footer position-relative"> <a href="#" class="btn-link stretched-link"><span class="me-2"><i class="fas fa-file-alt"></i></span>9 Topics <span class="float-end"><i class="fas fa-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-lg-3">
                                <div class="card shadow-sm border-0">
                                    <div class="card-body">
                                        <div class="text-center my-4"> <span class="text-16 text-primary"><FaShieldAlt /></span>
                                            <h5 class="mt-1">Security</h5>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush border-top border-bottom">
                                        <a class="list-group-item list-group-item-action" href="#">Persius interesset his et</a> <a class="list-group-item list-group-item-action" href="#">Quot quidam persequeris</a> <a class="list-group-item list-group-item-action" href="#">Mutat tacimates id sit. </a>
                                    </ul>
                                    <div class="card-footer position-relative"> <a href="#" class="btn-link stretched-link"><span class="me-2"><i class="fas fa-file-alt"></i></span>18 Topics <span class="float-end"><i class="fas fa-arrow-right"></i></span></a> </div>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 pt-md-3 mt-md-4">
                            <div class="col-lg-6">
                                <div class="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                                    <div class="row g-0">
                                        <div class="col-12 col-sm-auto text-13 text-muted d-flex align-items-center justify-content-center"> <span class="px-4 ms-3 me-2 mb-4 mb-sm-0"><FaRegEnvelope /></span> </div>
                                        <div class="col text-center text-sm-start">
                                            <div class="">
                                                <h5 class="text-3 text-body">Can't find what you're looking for?</h5>
                                                <p class="text-muted mb-0">We want to answer all of your queries. Get in touch and we'll get back to you as soon as we can. <a class="btn-link" href="">Contact us<span class="text-1 ms-1"><i class="fas fa-chevron-right"></i></span></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="bg-white shadow-sm rounded ps-4 ps-sm-0 pe-4 py-4">
                                    <div class="row g-0">
                                        <div class="col-12 col-sm-auto text-13 text-muted d-flex align-items-center justify-content-center"> <span class="px-4 ms-3 me-2 mb-4 mb-sm-0"><FaRegCommentAlt /></span> </div>
                                        <div class="col text-center text-sm-start">
                                            <div class="">
                                                <h5 class="text-3 text-body">Technical questions</h5>
                                                <p class="text-muted mb-0">Have some technical questions? Hit us up on live chat or whatever. <a class="btn-link" href="">Click here<span class="text-1 ms-1"><i class="fas fa-chevron-right"></i></span></a></p>
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
