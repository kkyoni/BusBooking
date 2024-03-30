import React from 'react';
import { Link } from 'react-router-dom';
function PayPal() {
    return (
        <>

            <div className="col-md-8 col-lg-9">
                <div className="tab-content my-3" id="myTabContentVertical">
                    <div className="tab-pane fade active show" id="secondTab" role="tabpanel" aria-labelledby="second-tab">
                        <div className="row">
                            <div className="col-md-8"> <img className="img-fluid" src="https://harnishdesign.net/demo/html/quickai/images/paypal-logo.png" alt="Paypal Logo" title="Pay easily, fast and secure with PayPal." />
                                <p className="lead">Pay easily, fast and secure with PayPal.</p>
                                <p className="alert alert-info mb-4"><i className="fas fa-info-circle"></i> You will be redirected to PayPal to complete your payment securely.</p>
                                <button className="btn btn-primary d-flex align-items-center" type="submit"><i className="fab fa-paypal fa-2x me-2"></i> Pay via PayPal</button>
                            </div>
                            <div className="col-md-4 mt-md-0 mt-4">
                                <div className="bg-light-2 rounded p-4 d-none d-md-block">
                                    <h3 className="text-4 mb-3">We value your Privacy</h3>
                                    <p className="mb-0">We will not sell or distribute your contact information. Read our <Link to={"/"}>Privacy Policy</Link>.</p>
                                    <hr className="mx-n4" />
                                    <h3 className="text-4 mb-3">Billing Enquiries</h3>
                                    <p className="mb-0">Do not hesitate to reach our <Link to={"/"}>support team</Link> if you have any queries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PayPal;
