import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
function Support() {
    const booking = [
        {
            key: '1',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>How can I make a account?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div></div>,
        },
        {
            key: '2',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Is there any registration fee?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div></div>,
        },
        {
            key: '3',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Is my account information safe?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '4',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>How does it work?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '5',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>I did not receive the cashback</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '6',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Forgot my password! What next?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '7',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Closing Your Account</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        }
    ];
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
                                        <Collapse items={booking} />

                                    </div>

                                </div>
                                <hr class="mx-n4" />
                                <div class="d-grid">
                                    <Link to={'/Faq'} class="btn btn-link btn-sm"><u>Click Here for more FAQ</u></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;
