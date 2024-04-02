import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';

function Faq() {
    const booking = [
        {
            key: '1',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>How can i cancel my booking?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div></div>,
        },
        {
            key: '2',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>How do I print my e-ticket?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div></div>,
        },
        {
            key: '3',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Do I need an ID Proof while booking a train ticket?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '4',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Why are seats priced differently on the same bus?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        }
    ];
    const payments = [
        {
            key: '1',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>How do I pay?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div></div>,
        },
        {
            key: '2',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>How do I pay using a credit/debit card?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div></div>,
        },
        {
            key: '3',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Can I use my bank's Internet Banking feature to make a payment?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '4',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Are there any hidden charges (Octroi or Tax)?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        }
    ];
    const myAccount = [
        {
            key: '1',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Is there any registration fee?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '2',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Is my account information safe?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '3',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>How does it work?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '4',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>I did not receive the cashback</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '5',
            label: <h2 className="accordion-header" id="heading5" style={{ fontSize: '16px' }}>Forgot my password! What next?</h2>,
            children: <div id="faq5" className="accordion-collapse collapse show" aria-labelledby="heading5" data-bs-parent="#accordionBooking"><div className="accordion-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div></div>,
        },
        {
            key: '6',
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
                                        <Collapse items={booking} />
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
                                        <Collapse items={payments} />
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
                                <div className="accordion accordion-flush" id="accordionPayments">
                                    <div className="accordion-item">
                                        <Collapse items={myAccount} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center my-3 my-md-5">
                            <p className="text-4 mb-3">Can't find what you're looking for? Our customer care team are here to help</p>
                            <Link to={'/Contact-us'} className="btn btn-primary">Contact Customer Care</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Faq;
