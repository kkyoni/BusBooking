import React from 'react';
import { Link } from 'react-router-dom';
function CreditDebitCards() {
    return (
        <>
            <div className="col-md-8 col-lg-9">
                <div className="tab-content my-3" id="myTabContentVertical">
                    <div className="tab-pane fade active show" id="firstTab" role="tabpanel" aria-labelledby="first-tab">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-5 mb-4">Enter Card Details</h3>
                                <form id="payment" method="post">
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label" for="cardNumber">Enter Debit / Credit Card Number</label>
                                            <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required="" placeholder="Card Number" />
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <label className="form-label" for="expiryMonth">Expiry Month</label>
                                                <select id="expiryMonth" className="form-select" required="">
                                                    <option value="">Expiry Month</option>
                                                    <option value="1">January</option>
                                                    <option value="2">February</option>
                                                    <option value="3">March</option>
                                                    <option value="1">April</option>
                                                    <option value="1">May</option>
                                                    <option value="1">June</option>
                                                    <option value="1">July</option>
                                                    <option value="1">August</option>
                                                    <option value="1">September</option>
                                                    <option value="1">October</option>
                                                    <option value="1">November</option>
                                                    <option value="1">December</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div>
                                                <label className="form-label" for="expiryYear">Expiry Year</label>
                                                <select id="expiryYear" className="form-select" required="">
                                                    <option value="">Expiry Year</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                    <option>2020</option>
                                                    <option>2021</option>
                                                    <option>2022</option>
                                                    <option>2023</option>
                                                    <option>2024</option>
                                                    <option>2025</option>
                                                    <option>2026</option>
                                                    <option>2027</option>
                                                    <option>2028</option>
                                                    <option>2029</option>
                                                    <option>2030</option>
                                                    <option>2031</option>
                                                    <option>2032</option>
                                                    <option>2033</option>
                                                    <option>2034</option>
                                                    <option>2035</option>
                                                    <option>2036</option>
                                                    <option>2037</option>
                                                    <option>2038</option>
                                                    <option>2039</option>
                                                    <option>2040</option>
                                                    <option>2041</option>
                                                    <option>2042</option>
                                                    <option>2043</option>
                                                    <option>2044</option>
                                                    <option>2045</option>
                                                    <option>2046</option>
                                                    <option>2047</option>
                                                    <option>2048</option>
                                                    <option>2049</option>
                                                    <option>2050</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <label className="form-label" for="cvvNumber">CVV</label>
                                            <input type="text" className="form-control" data-bv-field="cvvnumber" id="cvvNumber" required="" placeholder="CVV Number" />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label" for="cardHolderName">Card Holder Name</label>
                                            <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required="" placeholder="Card Holder Name" />
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input id="save-card" name="savecard" className="form-check-input" type="checkbox" />
                                                <label className="form-check-label" for="save-card">Save my card Details.</label>
                                            </div>
                                        </div>
                                        <div className="col-12 d-grid"> <Link to={'/'} className="btn btn-primary">Proceed to Pay $135</Link> </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4 mt-lg-0 mt-4">
                                <h3 className="text-4 mb-3">We Accept:</h3>
                                <ul className="payments-types mb-3">
                                    <li><Link to={'/'} target="_blank"> <img data-bs-toggle="tooltip" src="https://harnishdesign.net/demo/html/quickai/images/payment/visa.png" alt="visa" title="" data-bs-original-title="Visa" aria-label="Visa" /></Link></li>
                                    <li><Link to={'/'} target="_blank"> <img data-bs-toggle="tooltip" src="https://harnishdesign.net/demo/html/quickai/images/payment/discover.png" alt="discover" title="" data-bs-original-title="Discover" aria-label="Discover" /></Link></li>
                                    <li><Link to={'/'} target="_blank"> <img data-bs-toggle="tooltip" src="https://harnishdesign.net/demo/html/quickai/images/payment/american.png" alt="american express" title="" data-bs-original-title="American Express" aria-label="American Express" /></Link></li>
                                    <li><Link to={'/'} target="_blank"> <img data-bs-toggle="tooltip" src="https://harnishdesign.net/demo/html/quickai/images/payment/mastercard.png" alt="discover" title="" data-bs-original-title="Discover" aria-label="Discover" /></Link></li>
                                </ul>
                                <div className="bg-light-2 rounded p-4 d-none d-md-block">
                                    <h3 className="text-4 mb-3">We value your Privacy</h3>
                                    <p className="mb-0">We will not sell or distribute your contact information. Read our <Link to={'/'}>Privacy Policy</Link>.</p>
                                    <hr className="mx-n4" />
                                    <h3 className="text-4 mb-3">Billing Enquiries</h3>
                                    <p className="mb-0">Do not hesitate to reach our <Link to={'/'}>support team</Link> if you have any queries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="secondTab" role="tabpanel" aria-labelledby="second-tab">
                        <div className="row">
                            <div className="col-md-8"> <img className="img-fluid" src="images/paypal-logo.png" alt="Paypal Logo" title="Pay easily, fast and secure with PayPal." />
                                <p className="lead">Pay easily, fast and secure with PayPal.</p>
                                <p className="alert alert-info mb-4"><i className="fas fa-info-circle"></i> You will be redirected to PayPal to complete your payment securely.</p>
                                <button className="btn btn-primary d-flex align-items-center" type="submit"><i className="fab fa-paypal fa-2x me-2"></i> Pay via PayPal</button>
                            </div>
                            <div className="col-md-4 mt-md-0 mt-4">
                                <div className="bg-light-2 rounded p-4 d-none d-md-block">
                                    <h3 className="text-4 mb-3">We value your Privacy</h3>
                                    <p className="mb-0">We will not sell or distribute your contact information. Read our <Link to={'/'}>Privacy Policy</Link>.</p>
                                    <hr className="mx-n4" />
                                    <h3 className="text-4 mb-3">Billing Enquiries</h3>
                                    <p className="mb-0">Do not hesitate to reach our <Link to={'/'}>support team</Link> if you have any queries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreditDebitCards;
