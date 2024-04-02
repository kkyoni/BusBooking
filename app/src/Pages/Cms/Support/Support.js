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
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <div className="bg-white shadow-md rounded p-4">
                                <h2 className="text-6 mb-4">Send a Request</h2>
                                <hr className="mx-n4 mb-4" />
                                <p className="text-3">Please fill out the form below. we will get back to you within a couple of hours.</p>
                                <form id="recharge-bill" method="post">
                                    <div className="mb-3">
                                        <label className="form-label" for="subject">Subject</label>
                                        <select className="form-select" id="subject" required="">
                                            <option value="">Select Your Subject</option>
                                            <option>Recharge &amp; Bill</option>
                                            <option>Booking</option>
                                            <option>Account</option>
                                            <option>Payment</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" for="yourName">Your Name</label>
                                        <input type="text" className="form-control" id="yourName" required="" placeholder="Enter Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" for="yourEmail">Your Email</label>
                                        <input type="email" className="form-control" id="yourEmail" required="" placeholder="Enter Email Id" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" for="mobileNumber">Mobile Number</label>
                                        <input type="text" className="form-control" data-bv-field="number" id="mobileNumber" required="" placeholder="Enter Mobile Number" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" for="yourProblem">Your Query</label>
                                        <textarea className="form-control" rows="5" id="yourProblem" required="" placeholder="Specify your query"></textarea>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-white shadow-md rounded p-4">
                                <h2 className="text-6 mb-4">FAQ</h2>
                                <hr className="mx-n4 mb-4" />
                                <div className="accordion accordion-flush mt-n3" id="accordion">
                                    <div className="accordion-item">
                                        <Collapse items={booking} />

                                    </div>

                                </div>
                                <hr className="mx-n4" />
                                <div className="d-grid">
                                    <Link to={'/Faq'} className="btn btn-link btn-sm"><u>Click Here for more FAQ</u></Link>
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
