import React, { useState } from 'react';
import { FaRegThumbsUp } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Faq() {
    return (
        <>
            <section className="page-header page-header-dark bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Faq</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">Faq</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="bg-white shadow-md rounded p-4">
                        <h3 className="text-6 mb-4">Get answers to your queries</h3>
                        <hr className="mx-n4 mb-4" />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="text-5 fw-400">Booking</h3>
                            </div>
                            <div className="col-md-9">
                                <div className="accordion accordion-flush" id="accordionBooking">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading5">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5" aria-expanded="false" aria-controls="faq5">How can i cancel my booking?</button>
                                        </h2>
                                        <div id="faq5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionBooking">
                                            <div className="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading6">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6" aria-expanded="false" aria-controls="faq6">How do I print my e-ticket? </button>
                                        </h2>
                                        <div id="faq6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionBooking">
                                            <div className="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7" aria-controls="faq7">Do I need an ID Proof while booking a train ticket?</button>
                                        </h2>
                                        <div id="faq7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionBooking">
                                            <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading8">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq8" aria-expanded="false" aria-controls="faq8"> Why are seats priced differently on the same bus?</button>
                                        </h2>
                                        <div id="faq8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordionBooking">
                                            <div className="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="text-5 fw-400">Payments</h3>
                            </div>
                            <div className="col-md-9">
                                <div className="accordion accordion-flush" id="accordionPayments">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading9">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq9" aria-expanded="false" aria-controls="faq9">How do I pay?</button>
                                        </h2>
                                        <div id="faq9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordionPayments">
                                            <div className="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading10">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq10" aria-expanded="false" aria-controls="faq10">How do I pay using a credit/debit card?</button>
                                        </h2>
                                        <div id="faq10" className="accordion-collapse collapse" aria-labelledby="heading10" data-bs-parent="#accordionPayments">
                                            <div className="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading11">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq11" aria-expanded="false" aria-controls="faq11">Can I use my bank's Internet Banking feature to make a payment?</button>
                                        </h2>
                                        <div id="faq11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordionPayments">
                                            <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading12">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq12" aria-expanded="false" aria-controls="faq12">Are there any hidden charges (Octroi or Tax)? </button>
                                        </h2>
                                        <div id="faq12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionPayments">
                                            <div className="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="text-5 fw-400">My Account</h3>
                            </div>
                            <div className="col-md-9">
                                <div className="accordion accordion-flush" id="accordionAccount">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading13">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq13" aria-expanded="false" aria-controls="faq13">Is there any registration fee?</button>
                                        </h2>
                                        <div id="faq13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionAccount">
                                            <div className="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading14">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq14" aria-expanded="false" aria-controls="faq14">Is my account information safe?</button>
                                        </h2>
                                        <div id="faq14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionAccount">
                                            <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading15">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq15" aria-expanded="false" aria-controls="faq15">How does it work?</button>
                                        </h2>
                                        <div id="faq15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionAccount">
                                            <div className="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading16">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq16" aria-expanded="false" aria-controls="faq16">I did not receive the cashback</button>
                                        </h2>
                                        <div id="faq16" className="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionAccount">
                                            <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading17">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq17" aria-expanded="false" aria-controls="faq17">Forgot my password! What next?</button>
                                        </h2>
                                        <div id="faq17" className="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionAccount">
                                            <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading18">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq18" aria-expanded="false" aria-controls="faq18">Closing Your Account</button>
                                        </h2>
                                        <div id="faq18" className="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionAccount">
                                            <div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center my-3 my-md-5">
                            <p className="text-4 mb-3">Can't find what you're looking for? Our customer care team are here to help</p>
                            <Link to={'Contact-us'} className="btn btn-primary">Contact Customer Care</Link> </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
