import React, { useState } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Support() {
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Support</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-8">
                            <div class="bg-white shadow-md rounded p-4">
                                <h2 class="text-6 mb-4">Send a Request</h2>
                                <hr class="mx-n4 mb-4" />
                                <p class="text-3">Please fill out the form below. we will get back to you within a couple of hours.</p>
                                <form id="recharge-bill" method="post">
                                    <div class="mb-3">
                                        <label class="form-label" for="subject">Subject</label>
                                        <select class="form-select" id="subject" required="">
                                            <option value="">Select Your Subject</option>
                                            <option>Recharge &amp; Bill</option>
                                            <option>Booking</option>
                                            <option>Account</option>
                                            <option>Payment</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="yourName">Your Name</label>
                                        <input type="text" class="form-control" id="yourName" required="" placeholder="Enter Your Name" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="yourEmail">Your Email</label>
                                        <input type="email" class="form-control" id="yourEmail" required="" placeholder="Enter Email Id" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="mobileNumber">Mobile Number</label>
                                        <input type="text" class="form-control" data-bv-field="number" id="mobileNumber" required="" placeholder="Enter Mobile Number" />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label" for="yourProblem">Your Query</label>
                                        <textarea class="form-control" rows="5" id="yourProblem" required="" placeholder="Specify your query"></textarea>
                                    </div>
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="bg-white shadow-md rounded p-4">
                                <h2 class="text-6 mb-4">FAQ</h2>
                                <hr class="mx-n4 mb-4" />
                                <div class="accordion accordion-flush mt-n3" id="accordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading1">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">How can I make a account?</button>
                                        </h2>
                                        <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="heading1" data-bs-parent="#accordion">
                                            <div class="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading2">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Is there any registration fee?</button>
                                        </h2>
                                        <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                            <div class="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading3">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Is my account information safe?</button>
                                        </h2>
                                        <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                            <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading4">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">How does it work?</button>
                                        </h2>
                                        <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                            <div class="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading5">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">I did not receive the cashback</button>
                                        </h2>
                                        <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                            <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading6">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">Forgot my password! What next?</button>
                                        </h2>
                                        <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordion">
                                            <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="heading7">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">Closing Your Account</button>
                                        </h2>
                                        <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordion">
                                            <div class="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mx-n4" />
                                <div class="d-grid"><a href="faq.html" class="btn btn-link btn-sm"><u>Click Here for more FAQ</u></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;
